const groupList = Vue.component('group-list', {
    props: ['list', 'groupKey'],
    components: {
        'custom-flair' : customFlair
    },
    data() {
        return {

        }
    },
    computed: {
        style(){
            return {
                backgroundColor: 'rgb(244,251,255)',
                height: '100vh',
                alignItems: 'flex-start',
                width: '20vw',
                zIndex: 1,
                boxShadow: '-1px 5px 5px #808080',
            }
        },
        groupedList() {
            return this.groupList(this.list)
        }
    },
    methods: {
        groupList(list) {                        
            let groupedList = list.reduce((accumulator, item) => {
                let currentKey = item[this.groupKey]

                let objKeys = Object.keys(accumulator)
                let hasKey = objKeys.find(key => key == currentKey)

                if(currentKey == "") return accumulator;
                else if(!hasKey) {
                    accumulator[currentKey] = []
                }
                accumulator[currentKey].push(item)
                return accumulator
            }, {})

            return groupedList
        }
    },
    template: `
        <div class="centralize container direction-col group-list" :style="style">
            <div>Categorias</div>
            <div v-for="(array, key) in groupedList" class="container direction-row">
                <div style="margin: 5px">
                    <i class="fas fa-chevron-right fa-xs"></i>
                </div>
                <div style="margin: 5px">{{key}}</div>
                <div style="margin: 5px">
                    <custom-flair v-if="key == 'Urgente'" :text="array.length" :type="'danger'"></custom-flair>
                    <custom-flair v-else-if="key == 'Importante'" :text="array.length" :type="'warning'"></custom-flair>
                </div>
            </div>            
        </div>`
})