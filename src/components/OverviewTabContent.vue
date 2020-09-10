<template>
    <div class="" id="overview">
        <div class="mt-16" v-if="isFetchingDetails">
            <span>Fetching repository details...</span>
        </div>
        <template v-if="!isFetchingDetails && (staredRepositories.length || profile.login)">
            <div class="d-flex justify-content-between pt-16">
                <h4 class="section_header">Starred</h4>
                <h4 class="section_header-light">Customize you pins</h4>
            </div>
            <div class="row repo-cards-row">
                <template v-if="staredRepositories.length">
                    <div v-for="repository of staredRepositories" :key="repository.id" class="col-6">
                        <RepositoryCard :repository="repository" />
                    </div>
                </template>
                <div class="mt-16" v-else>
                    <span>User has no starred repo</span>
                </div>
            </div>
            <div class="row flex-column mt-24">
                <div class="d-flex justify-content-between w-100">
                    <h4 class="section_header">{{ profile.public_repos }} contributions in the last year</h4>
                    <h4 class="section_header-light">Contributions settings</h4>
                </div>
                <div class="col-12">
                    <div class="card" v-if="profile.login">
                        <img :src="`http://ghchart.rshah.org/${profile.login}`" class="w-100" alt="Github chart"/>
                        <br/><small><a href="https://ghchart.rshah.org/" target="_blank"
                                       rel="noopener noreferrer">Source for GitHub Chart API</a></small>
                    </div>
                </div>
            </div>
        </template>
        <div class="mt-16" v-if="!isFetchingDetails && (!staredRepositories.length && !profile.login)">
            <span>Started repositories could not be loaded</span>
        </div>
    </div>
</template>

<script>
    import RepositoryCard from "@/components/RepositoryCard";

    export default {
        name: "OverviewTabContent",
        components: { RepositoryCard },
        computed: {
            profile() {
                return this.$store.getters['getProfile'];
            },
            staredRepositories() {
                const repo = this.$store.getters['getStaredRepositories'];
                // Get the first six starred repo
                return repo.slice(0, 6);
            },
            isFetchingDetails() {
                return this.$store.getters['getIsFetchingDetails'];
            }
        }
    }
</script>

<style scoped>
    .repo-cards-row .col-6:nth-child(odd){
        padding-right: 8px;
    }

    .repo-cards-row .col-6:nth-child(even){
        padding-left: 8px;
    }

    .mt-24{
        margin-top: 24px;
    }
    @media (max-width: 768px) {
        .repo-cards-row .col-6:nth-child(odd){
            padding-right: 0;
        }

        .repo-cards-row .col-6:nth-child(even){
            padding-left: 0;
        }
    }
</style>
