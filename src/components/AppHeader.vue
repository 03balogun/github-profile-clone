<template>
    <header class="header pl-16 pr-16">
        <div class="header__brand">
            <router-link to="/">
                <span class="iconify" data-icon="octicon:mark-github-16" data-inline="false" data-width="32" data-height="32"></span>
            </router-link>
        </div>
        <div class="header__content">
            <form @submit.prevent="" class="header__search">
                <input type="search" class="" aria-label="Enter your search term" placeholder="Search or jump to…" />
            </form>
            <nav class="header__nav">
                <ul>
                    <li class="">
                        <a href="javascript:;">
                            Pull requests
                        </a>
                    </li>
                    <li class="">
                        <a href="javascript:;">
                            Issues
                        </a>
                    </li>
                    <li class="">
                        <a href="javascript:;">
                            Marketplace
                        </a>
                    </li>
                    <li class="">
                        <a href="javascript:;">
                            Explore
                        </a>
                    </li>
                </ul>
            </nav>
            <div class="header__nav header__nav-right">
                <ul>
                    <li class="">
                        <a href="javascript:;" class="p-relative"
                           aria-label="View Notifications"
                           title="View Notifications">
                            <span class="unread-indicator"></span>
                            <span class="iconify"
                                  data-icon="octicon:bell-16"
                                  data-inline="false"
                                  data-width="16"
                                  data-height="16"></span>
                        </a>
                    </li>
                    <li class="">
                        <a href="javascript:;" aria-label="Add New Repository"
                           title="Add New Repository">
                            <span class="iconify"
                                  data-icon="octicon:plus-16"
                                  data-inline="false"
                                  data-width="16"
                                  data-height="16"></span>
                        </a>
                    </li>
                    <li class="">
                        <a href="javascript:;" aria-label="View your profile"
                           title="View your profile">
                            <img :src="profile.avatar_url || `https://avatars2.githubusercontent.com/u/28654450?s=60&v=4`"
                                 height="20"
                                 width="20"
                                 alt="User Avatar"
                                 class="avatar" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "AppHeader",
        computed: {
            profile() {
                return this.$store.getters['getProfile'];
            },
        }
    }
</script>

<style scoped>
    .header {
        color: #ffffffb3;
        background-color: var(--text-color-primary);
        display: flex;
        align-items: center;
        height: 53px;
    }

    .header__brand{
        display: flex;
        margin-right: 16px!important;
    }

    .header a{
        color: #fff;
        text-decoration: none;
    }

    .header a:hover{
        color: #ffffffb3;
    }

    .header__content{
        display: flex !important;
        align-items: center;
        margin-right: 16px;
        width: 100%;
    }

    .header__search{
        width: 272px;
        position: relative;
        margin-right: 16px;
    }

    .header__search:focus-within{
        width: 544px;
        transition: .2s ease-in-out;
        transition-property: width;
    }

    .header__search input{
        position: relative;
        min-height: 28px;
        width: 100%;
        padding: 0 5px 0 12px;
        background: #ffffff20;
        border: 0;
        box-shadow: none;
        border-radius: 6px;
        color: #FFF;
    }

    .header__search input::placeholder{
        color: #c3c5c5;
    }

    .header__nav-right{
        margin-left: auto;
        display: flex;
    }

    .header__nav ul{
        list-style: none;
        display: flex;
        padding-inline-start: 0;
    }

    .header__nav ul li:not(:last-child){
        margin-right: 16px;
        display: flex;
        align-items: center;
    }

    .header__nav ul li a{
        font-weight: 600;
    }

    .unread-indicator{
        position: absolute;
        top: -4px;
        left: 6px;
        z-index: 2;
        width: 10px;
        display: block;
        height: 10px;
        color: #fff;
        background-image: linear-gradient(#54a3ff,#006eed);
        background-clip: padding-box;
        border: 2px solid #24292e;
        border-radius: 50%;
    }

    @media (max-width: 768px) {
        .header__nav{
            display: none;
        }
        .header__search:focus-within {
            width: 100%;
        }
    }
</style>
