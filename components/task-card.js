const taskCard = Vue.component('task-card', {
    props: ['task'],
    componens: {
        'custom-flair': customFlair
    },
    data(){
        return {
            isHover: false
        }
    },

    created() {
        
    },

    computed: {
        checkBoxStyle() {
            let cursorMode = this.isHover ? 'pointer' : 'default'
            let bgColor = this.task.completed ? 'white' : "rgb(226,238,245)"

            return {
                backgroundColor: bgColor,
                borderRadius: "4px",
                height: "42px",
                marginTop: "3px",
                marginBottom: "3px",
                width: "42px",
                cursor: cursorMode
            }
        },

        cardStyle() {
            let opacity = this.task.completed ? '0.5' :  '1';
            return {
                backgroundColor: "white",
                borderRadius: "6px",
                justifyContent: 'space-between',
                height: "60px",
                opacity
            }
        },

        defaultStyle() {
            return {
                margin: "5px",
                padding: "15px"
            }
        },

    }, 
    
    methods: {
        completeTask() {
            bus.$emit('complete-task', this.task.id)
        }
    },

    template:`
        <div class="container " :style=" [cardStyle, defaultStyle] ">
            <div style="display:flex; 
                align-items: center; 
                text-align: center;">
                <div 
                    :style=" {color: 'rgb(40,167,69)'} "
                    @mouseover= "isHover= true"
                    @mouseout= "isHover= false"
                    @click= "completeTask">
                    <div 
                        v-if="!task.completed"
                        :style="[checkBoxStyle]">
                    </div>
                    <i 
                        v-else-if="task.completed"
                        class="fas fa-check-square fa-3x">
                    </i>
                </div>

                <div id="task-description" style="font-weight: bold; margin-left: 10px;"> {{task.description}} </div>
            </div>

            <custom-flair 
                v-if="(task.status == 'Urgente')" 
                :text="task.status"
                :type="'danger'">
            </custom-flair>
            <custom-flair 
                v-else-if="(task.status == 'Importante')"
                :text="task.status || ''"
                :type="'warning'">
            </custom-flair>
        </div>`
})