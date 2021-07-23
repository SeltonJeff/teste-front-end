const customForm = Vue.component('custom-form', {
    components: {
        'custom-input': customInput
    },
    props: ['formConfig', 'header'],
    data() {
        return {

        }
    },
    methods: {
        emit(){
            this.$emit('emit-form', this.formConfig)
        }
    },
    template: `
        <div>
            <h2>{{ formConfig.header }}</h2>
            <div v-for="item in formConfig.fields" :style="{margin: '12px 0 8px 0'}">    
                <div v-if="item.type == 'radio'" class="container">
                    <div v-for="option in item.options" class="container">
                        <custom-input :title="option.title" :type="item.type" :name="item.title"></custom-input>
                    </div>
                </div>
                <custom-input v-else
                    :color="item.color"
                    :onClick="emit"
                    :title="item.title" 
                    :type="item.type"
                    :value="item.value"
                    v-model="item.value">
                </custom-input>
            </div>
        </div>`
})