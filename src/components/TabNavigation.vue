<template>
    <div class="tabs__wrapper">
        <div class="container">
            <div class="row">
                <div class="col-3"></div>
                <div class="col-9">
                    <nav class="tabs__nav">
                        <ul class="">
                            <li v-for="navigation of navigations" :key="navigation.name">
                                <router-link
                                        :to="`/profile/${$route.params.username}/${navigation.name}`"
                                        :class="{'router-link-active': navigation.name === $route.name}"
                                >
                                    <span class="iconify"
                                          :data-icon="`octicon:${navigation.icon}-16`"
                                          data-inline="false"
                                          data-width="16"
                                          data-height="16"></span>
                                    {{ navigation.name }}
                                    <span class="badge" v-if="navigation.hasBadge && profile.public_repos">
                                        {{ profile.public_repos }}
                                    </span>
                                </router-link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabNavigation",
        data: () => ({
            navigations: [
                {
                    name: 'overview',
                    icon: 'book'
                },
                {
                    name: 'repositories',
                    icon: 'repo',
                    hasBadge: true
                },
                {
                    name: 'projects',
                    icon: 'project'
                },
                {
                    name: 'packages',
                    icon: 'package'
                }
            ]
        }),
        computed: {
            profile() {
                return this.$store.getters['getProfile'];
            }
        },
    }
</script>

<style scoped>
    .tabs__wrapper{
        top: 0;
        position: sticky;
        margin-top: 24px;
        border-bottom: 1px solid #e1e4e8;
        background-color: #FFF;
        z-index: 1;
    }

    .tabs__nav ul{
        list-style: none;
        display: flex;
        padding-inline-start: 0;
        margin: 0;
        overflow-x: auto;
    }

    .tabs__nav ul li a{
        display: flex;
        text-decoration: none;
        padding: 8px 16px;
        color: #1b1f23;
        text-align: center;
        white-space: nowrap;
        background-color: initial;
        border: 0;
        border-bottom: 2px solid rgba(209,213,218,0);
        transition: border-bottom-color .20s ease-in;
        text-transform: capitalize !important;
    }

    .tabs__nav ul li a svg{
        color: #959da5;
        margin-right: 6px;
    }
    .tabs__nav ul li a:hover{
        text-decoration: none;
        border-bottom-color: #d1d5da;
    }

    .tabs__nav ul li{
        margin-right: 16px;
        display: flex;
        align-items: center;
    }

    .tabs__nav ul li .router-link-active{
        font-weight: 600;
        border-bottom-color: #f9826c !important;
    }

    .tabs__nav ul li .router-link-active svg {
        color: inherit !important;
    }

    .badge{
        background-color: #d1d5da80;
        display: inline-block;
        border-radius: 2em;
        padding: 0 6px;
        margin-left: 4px;
    }
</style>
