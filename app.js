const bus = new Vue();

new Vue({
    el:'#app',
    router,
    components:{
        'login-page': loginPage,
        'home-page': homePage,
        'main-header': header,
    },

    data(){
        return{
            loggedUser: undefined,
        }
    },

    created() {
        bus.$on('log-user', this.logUser);
    },

    methods: {
        logUser(user){
            if(user) {
                this.loggedUser = user
                this.$router.push('/home')
            }            
        }
    },

    template: `
        <router-view :user="loggedUser">
            <login-page ></login-page>
            <home-page :user="loggedUser"></home-page>
        </router-view>`,
})