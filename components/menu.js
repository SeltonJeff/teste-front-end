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
            style="
                background-color: var(--primary-color); 
                color: white;
                box-shadow: -1px 5px 5px #808080;
                padding-top: 10px;
                align-items: center;
                z-index: 4;"
            class="menu container direction-col">
            
            <div style="width: 60px; overflow-x: hidden;">
                <img src="./resources/logo.png" alt="logo" style="width: 200px; position: relative; left: -12.5px;">
            </div>
            
            <div class="centralize container direction-col" style=" margin: auto; border-bottom: 1px solid rgb(55,165,255;">
                <menu-option 
                    v-for="(option, index) in options" 
                    v-bind:key="index"
                    :icon="option.icon" 
                    :text="option.name"
                    style=" 
                        margin-left: 5px;
                        margin-right: 5px;
                        border-top: 1px solid rgb(55,165,255); 
                        cursor: pointer;"
                    class="menu-item"
                >    
                </menu-option>
            </div>
        </div>    
    `
})