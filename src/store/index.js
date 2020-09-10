import axios from 'axios'
axios.defaults.baseURL = 'https://api.github.com';

const RATE_LIMIT_MESSAGE = 'Rate limit exceeded. Github allows a limit of 10 API calls per minute. Kindly wait for one minute, refresh your page and retry';

export default {
    state: {
        users: [],
        profile: {},
        repositories: [],
        staredRepositories: [],
        isFetchingDetails: false
    },
    mutations: {
        setState(state, { key, value }) {
            state[key] = value;
        }
    },
    getters: {
        getUsers: (state) => state.users,
        getProfile: (state) => state.profile,
        getRepositories: (state) => state.repositories,
        getStaredRepositories: (state) => state.staredRepositories,
        getIsFetchingDetails: (state) => state.isFetchingDetails,
    },
    actions: {
        async searchUsers({ commit }, query) {
            try {
                const response = (await axios.get(`/search/users?q=${query} in:login`)).data;

                commit('setState', { key: 'users', value: response.items })

            }catch (e) {
                //
                console.log(e);
                if (e.response.status === 403){
                    alert(RATE_LIMIT_MESSAGE)
                }
            }
        },
        async fetchUserRecord({ commit }, username) {
            commit('setState', { key: 'isFetchingDetails', value: true });
            try {
                //
                const baseUrl = `/users/${username}`;

                const userDetailEndpoints = [`${baseUrl}`, `${baseUrl}/repos`, `${baseUrl}/starred`];

                const gitHubAPIRequest = userDetailEndpoints.map(url => axios.get(url));

                const responses = await Promise.all(gitHubAPIRequest);

                const {
                    0: {data: profile},
                    1: {data: repositories},
                    2: {data: staredRepositories}
                } = responses;

                commit('setState', { key: 'profile', value: profile });
                commit('setState', { key: 'repositories', value: repositories });
                commit('setState', { key: 'staredRepositories', value: staredRepositories });
            } catch (error) {
                console.log(error);
                if (error.response.status === 403){
                    alert(RATE_LIMIT_MESSAGE)
                }
            }
            commit('setState', { key: 'isFetchingDetails', value: false });
        }
    }
}
