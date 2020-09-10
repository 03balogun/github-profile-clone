<template>
    <div class="" id="repositories">
        <div class="mt-16" v-if="isFetchingDetails">
            <span>Fetching repositories details...</span>
        </div>
        <div class="repositories__filter" v-if="!isFetchingDetails" >
            <form action="" @submit.prevent="">
                <input type="text" v-model="query" class="input" placeholder="Find a repository..." aria-label="Find a repository"/>
            </form>
            <div class="d-flex">
                <button class="btn">
                    <span>Type:</span> All
                </button>
                <button class="btn">
                    <span>Language:</span> All
                </button>
                <a class="btn btn--green">
                      <span class="iconify"
                            data-icon="octicon:repo-16"
                            data-inline="true"
                            data-width="16"
                            data-height="16"></span>
                    New
                </a>
            </div>
        </div>
        <template v-if="!isFetchingDetails && repositories.length">
            <repository-result v-for="repository of repositories" :key="repository.id" :repository="repository" />
        </template>
        <template v-if="!isFetchingDetails && repositories.length === 0">
            <span>No repository</span>
        </template>
    </div>
</template>

<script>
    import RepositoryResult from "./RepositoryResult";
    export default {
        name: "RepositoriesTabContent",
        components: {RepositoryResult},
        data: () => ({ query: ''}),
        computed: {
            repositories() {

                const respositories = this.$store.getters['getRepositories'];

                if (this.query.length) {
                    return respositories.filter(repo => repo.name
                        .toLowerCase()
                        .includes(this.query.toLowerCase()))
                }

                return respositories;
            },
            isFetchingDetails() {
                return this.$store.getters['getIsFetchingDetails'];
            }
        }
    }
</script>

<style scoped>
    .repositories__filter{
        display: flex;
        padding: 16px 0 16px 0;
    }

    .repositories__filter form{
        width: 65%;
        margin-right: 16px;
    }

    .repositories__filter .btn{
        min-width: fit-content;
        margin-right: 16px;
    }

    .repositories__filter .btn span{
        color: #666
    }
</style>
