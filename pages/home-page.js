const homePage = Vue.component('home-page', {
    props:[
        'user',
    ],

    components:{
        'nav-bar': menu,
        'main-header': header,
        'tasks': tasks,
    },

    data(){
        return {

        }
    },

    template:`
        <div class="container" style="height: 100vh; width: 100vw">
            <nav-bar style="height:100%"></nav-bar>
            <div style="display: flex; flex-direction: column; width: 100%">
                <main-header v-bind:user="user"></main-header>
                <tasks :user="user"></tasks>
            </div>
        </div>
    `

})