<template>
    <div class="card repo-card" draggable="true">
        <div class="d-flex repo-card__title">
            <div class="d-flex align-item-center">
                          <span class="iconify"
                                data-icon="octicon:repo-16"
                                data-inline="false"
                                data-width="16"
                                data-height="16"></span>
                <a href="javascript:;">
                    {{ repository.name }}
                </a>
            </div>
            <div class="repo-card__grabber"
                 aria-label="Drag to change position"
                 title="Drag to change position">
                          <span class="iconify"
                                data-icon="octicon:grabber-16"
                                data-inline="false"
                                data-width="16"
                                data-height="16"></span>
            </div>
        </div>
        <p>
            {{ repository.description }}
        </p>
        <div class="d-flex repo-card__footer">
            <div>
                <span class="lang-indicator" style="background-color: #f1e05a;"></span> {{ repository.language }}
            </div>
            <div>
                          <span class="iconify"
                                data-icon="octicon:star-16"
                                data-inline="false"
                                data-width="16"
                                data-height="16"></span>{{ repository.stargazers_count }}
            </div>
            <div>
                          <span class="iconify"
                                data-icon="octicon:repo-forked-16"
                                data-inline="false"
                                data-width="16"
                                data-height="16"></span>{{ repository.forks_count }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RepositoryCard",
        props: {
            repository: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>

    .repo-card__title{
        width: 100%;
        font-weight: 600;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .repo-card__title svg{
        color: var(--text-color-grey);
    }

    .repo-card__title a{
        margin-left: 8px;
        text-decoration: none;
    }

    .repo-card__title a:hover{
        text-decoration: underline;
    }

    .repo-card p, .repo-card__footer{
        font-size: 12px;
        color: var(--text-color-grey);
    }

    .repo-card__footer div{
        margin-right: 16px;
        display: flex;
    }

    .repo-card__footer div svg, .lang-indicator{
        margin-right: 4px;
    }

    .repo-card__grabber{
        cursor: grab;
    }
</style>
