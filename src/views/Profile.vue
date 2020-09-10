<template>
    <div>
        <TabNavigation />
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <ProfileDetail />
                </div>
                <div class="col-9">
                    <div class="tabs__contents">
                        <router-view/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TabNavigation from "@/components/TabNavigation";
    import ProfileDetail from "@/components/ProfileDetail";
    export default {
        name: 'Profile',
        components: {ProfileDetail, TabNavigation},
        mounted() {
            this.$store.dispatch('fetchUserRecord', this.$route.params.username);
        }
    }
</script>
