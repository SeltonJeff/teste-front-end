const header = Vue.component('main-header', {
    props:[
        'user',
    ],

    data(){
        return {
            
        }
    },

    components:{
        'user-profile': userProfile
    },

    template: `
        <div chass="header-profile" style="
            display: flex; 
            justify-content: flex-end;
            box-shadow: 1px -4px 10px gray;
            min-height: 60px;
            z-index: 3;
        ">
            <user-profile v-bind:user="user"></user-profile>
        </div>
    `
})