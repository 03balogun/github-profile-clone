<template>
    <div class="repositories__result">
        <div class="d-flex justify-content-between w-100">
            <a href="javascript:;">
                <h3>{{ repository.name }}</h3>
            </a>
            <button class="btn">
                      <span class="iconify"
                            data-icon="octicon:star-16"
                            data-inline="false"
                            data-width="16"
                            data-height="16"></span>
                Star
            </button>
        </div>
        <p>
            {{ repository.description }}
        </p>
        <div class="d-flex repositories__footer">
            <div v-if="repository.language">
                <span class="lang-indicator" style="background-color: #f1e05a;"></span> {{ repository.language }}
            </div>
            <div>
                          <span class="iconify"
                                data-icon="octicon:star-16"
                                data-inline="true"
                                data-width="16"
                                data-height="16"></span> {{ repository.stargazers_count }}
            </div>
            <div>
                          <span class="iconify"
                                data-icon="octicon:repo-forked-16"
                                data-inline="true"
                                data-width="16"
                                data-height="16"></span> {{ repository.forks_count }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RepositoryResult",
        props: {
            repository: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>
    .repositories__result .btn{
        min-width: fit-content;
    }

    .repositories__result a{
        text-decoration: none;
    }

    .repositories__result a:hover{
        text-decoration: underline;
    }

    .repositories__result h3{
        font-weight: 600;
        font-size: 1.25rem;
        margin: 0;
    }

    .repositories__result{
        border-top: 1px solid #e1e4e8!important;
        padding: 1.5rem 0 1.5rem 0
    }

    .repositories__result p{
        color: var(--text-color-grey);
        margin: 8px 0 8px;
    }

    .repositories__footer span, .repositories__footer svg{
        margin-right: 4px;
    }

    .repositories__footer{
        font-size: 12px;
        color: var(--text-color-grey);
    }

    .repositories__footer div{
        margin-right: 16px;
        display: flex;
    }
</style>
