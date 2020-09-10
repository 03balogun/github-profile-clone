<template>
    <div class="user__result">
        <div class="d-flex w-100">
            <div>
                <img :src="user.avatar_url"
                     :alt="user.login"
                     class="avatar" width="20" height="20" />
            </div>
            <div class="d-flex flex-column ml-8 w-100">
                <div class="d-flex justify-content-between w-100">
                    <div class="user__result--name">
                        <router-link :to="`/profile/${user.login}`">
                            {{ user.login }}
                        </router-link>
                    </div>
                    <div>
                        <router-link class="btn" :to="`/profile/${user.login}`">
                            view
                        </router-link>
                    </div>
                </div>
                <!--<p>&#45;&#45;</p>
                <div class="d-flex user__result&#45;&#45;contact">
                    <div>&#45;&#45;</div>
                    <div>&#45;&#45;</div>
                </div>-->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserResult",
        props: {
            user: {
                required: true,
                type: Object
            }
        }
    }
</script>

<style scoped>
    .user__result{
        width: 100%;
        border-top: 1px solid #e1e4e8;
        padding: 16px 0;
    }

    .user__result--name{
        font-weight: 400;
        font-size: 1rem;
    }

    .user__result--name span{
        color: var(--text-color-grey);
        font-weight: 600;
    }

    .user__result--name a{
        text-decoration: none;
    }

    .user__result--name a:hover{
        text-decoration: underline;
    }

    .user__result p{
        margin: 4px 0 4px 0;
    }

    .user__result--contact div{
        font-size: 12px;
        color: var(--text-color-grey);
        margin-right: 15px;
    }

    .btn{
        width: fit-content;
        text-decoration: none;
    }

</style>
