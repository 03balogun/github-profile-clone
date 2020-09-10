<template>
    <div class="profile">
        <div class="mt-16" v-if="isFetchingDetails">
            <span>Fetching profile details...</span>
        </div>
        <template v-if="!isFetchingDetails && profile.login">
            <a href="javascript:;" class="profile_avatar">
                <img :src="profile.avatar_url"
                     :alt="`${profile.name} avatar`"
                     class="avatar"
                     width="260"
                     height="260" />
            </a>
            <div class="profile__details">
                <div class="profile__name pt-16 pb-16">
                    <h1>{{ profile.name }}</h1>
                    <span>{{ profile.login }}</span>
                </div>
                <p class="profile_bio">
                    {{ profile.bio }}
                </p>
                <button class="btn">
                    Edit Profile
                </button>
                <div class="d-flex align-item-center profile__figures">
                    <div>
                  <span class="iconify"
                        data-icon="octicon:people-16"
                        data-inline="false"
                        data-width="16"
                        data-height="16"></span>
                        <span class="count">{{ profile.followers }}</span> followers
                    </div>
                    <span>·</span>
                    <div>
                        <span class="count">{{ profile.following }}</span> following
                    </div>
                    <span>·</span>
                    <div>
                  <span class="iconify"
                        data-icon="octicon:repo-16"
                        data-inline="false"
                        data-width="16"
                        data-height="16"></span>
                        <span class="count">{{ profile.public_repos }}</span> Repos
                    </div>
                </div>
                <div class="profile__location">
                    <div v-if="profile.location">
                        <span class="iconify"
                              data-icon="octicon:location-16"
                              data-inline="false"
                              data-width="16"
                              data-height="16"></span>
                        {{ profile.location }}
                    </div>
                    <div>
                   <span class="iconify"
                         data-icon="octicon:mail-16"
                         data-inline="false"
                         data-width="16"
                         data-height="16"></span>
                        dummy@mail.com
                    </div>
                </div>
            </div>
        </template>
        <div class="mt-16" v-if="!isFetchingDetails && !profile.login">
            <span>Profile details could not be loaded</span>
        </div>

    </div>
</template>

<script>
    export default {
        name: "ProfileDetail",
        computed: {
            profile() {
                return this.$store.getters['getProfile'];
            },
            isFetchingDetails() {
                return this.$store.getters['getIsFetchingDetails'];
            }
        }
    }
</script>

<style scoped>
    .profile svg{
        color: #6a737d;
    }

    .profile_avatar, .profile__details{
        position: relative;
        top: -30px
    }

    .profile_avatar{
        display: flex;
        z-index: 8;
    }

    .profile__name h1{
        font-size: 1.625rem;
        margin: 0;
        line-height: 1.25;
    }

    .profile__name span{
        color: #666;
        font-size: 1.25rem;
        line-height: 1.25;
    }

    .profile_bio{
        font-size: 1rem;
        margin: 0 0 16px 0;
    }

    .profile__figures{
        margin-top: 16px;
        flex-wrap: wrap;
    }

    .profile__figures span{
        margin: 0 4px 0 4px;
    }

    .profile__figures div span{
        font-weight: 600!important;
        display: inline-block;
    }

    .profile__figures div{
        display: flex;
        align-items: center;
    }

    .profile__location{
        margin-top: 16px;
    }

    .profile__location div{
        display: flex;
        align-items: center;
    }

    .profile__location div span{
        font-size: 14px;
    }

    .profile__location div svg{
        margin-right: 7px;
    }

    @media (max-width: 768px) {
        .profile{
            margin-top: 20px;
        }

        .profile_avatar, .profile__details{
            position: initial;
        }
        .profile_avatar img{
            width: 100px;
            height: 100px;
            object-fit: cover;
        }
    }
</style>
