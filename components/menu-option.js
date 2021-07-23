const menuOption = Vue.component('menu-option',{
    props: ['icon', 'text'],
    data(){
        return{
            isHover: false
        }
    },
    computed: {
        style() {
            let height = '60px'
            let backgorundColor = this.isHover ? 'rgb(17,130,242)' : 'var(--primary-color)'

            return {
                height,
                'backgorund-color': backgorundColor
            }
        }
    },
    
    template:`
        <div 
            class="centralize container direction-col"
            :style="style"
            @mouseover="isHover = true"
            @mouseout="isHover = false"
        >
            <div :class="icon"></div>
            <div style="font-size: 0.6em; margin-top: 10px">{{text}}</div>
        </div>    
    `
})