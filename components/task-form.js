const taskForm = Vue.component('task-form', {
    props:['active'],
    components: {
        'custom-form': customForm,
        'custom-modal': customModal
    },
    data() {
        let _self = this
        return {
            formConfig: {
                header: 'Cadastrar Tarefa',
                fields: [
                    {
                        title: "Título",
                        type: "text",
                        value: "",
                    },
                    {
                        title: "Descrição",
                        type: "textarea",
                        value: "",
                    },
                    {
                        title: "prioridade",
                        type: "radio",
                        selected: null,
                        options: [
                            {
                                title: "Urgente"
                            },
                            {
                                title: "Importante"
                            }
                        ]
                    },
                    {
                        color: "enabled",
                        value: "Adicionar",
                        type: "sm-button",
                    },
                ]
            }
        }
    },
    methods: {
        emitTask(formResult) {
            this.$emit('emit-task', formResult)
        }
    },
    template: `
        <custom-modal :active= "active">
            <custom-form :header="formConfig.header" :formConfig="formConfig" @emit-form="emitTask"></custom-form>
        </custom-modal>`
})