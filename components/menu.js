const menu = Vue.component('nav-bar', {
    components: {
        'menu-option': menuOption
    },
    data(){
        return{
            options:[
                {
                    icon: 'far fa-chart-bar fa-2x',
                    name: 'DashBoard',
                }, 
                {
                    icon: 'far fa-check-circle fa-lg',
                    name: 'Tarefas',
                }, 
                {
                    icon: 'fas fa-cogs fa-lg',
                    name: 'Configurações',
                }, 
            ],
        }
    },

    
    template:`
        <div 
            style="background-color: var(--primary-color); color: white;"
            class="container direction-col">
                
            <img src="" alt="logo">
            
            <div class="centralize container direction-col" style=" margin: auto">
                <menu-option 
                    v-for="(option, index) in options" 
                    v-bind:key="index"
                    :icon="option.icon" 
                    :text="option.name"
                    style=" margin: 10px"
                >    
                </menu-option>
            </div>
        </div>    
    `
})