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
        <div style="
            display: flex; 
            justify-content: flex-end;
            height: 60px;
            box-shadow: 1px -4px 10px gray;
        ">
            <user-profile v-bind:user="user"></user-profile>
        </div>
    `
})