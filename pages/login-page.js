const loginPage = Vue.component('login-page', {
    components: {
        'custom-input' : customInput,
    },
    data(){
        return{
            user: {
                imgSrc: './resources/01.jpg',
                name: 'Matheus Gomes de Castro',
                role: 'Desenvolvedor Back-End',
                id: 1,
            },
        }
    },

    computed: {

    },

    methods: {
        logUser() {
            bus.$emit('log-user', this.user)
        }
    },

    template: `
        <div class="container m-teme">
            <div id="login-logo" class="full-height container primary-color centralize">
                <img id="logo" src="./resources/logo.png" alt="app-logo">
            </div>
            <div class="login container centralize full-height full-width">
                <div method="post" class="container direction-col">
                    <h1>Entre com seus dados de acesso.</h1>

                    <custom-input
                        :type="'text'"
                        :title="'Nome de usuário ou e-mail:'">
                    </custom-input>

                    <custom-input
                        :type="'password'"
                        :title="'Senha:'">
                    </custom-input>
                    
                    <custom-input
                        v-on:click="logUser"
                        :color="'enabled'"
                        :value="'Entrar'"
                        :type="'button'"
                        :onClick="logUser">
                    </custom-input >
                </div>
            </div>
        </div>
    `
})