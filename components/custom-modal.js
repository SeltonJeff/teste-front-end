const customModal = Vue.component('custom-modal', {
    props: ['active'],
    data() {
        return {

        }
    },

    computed: {
        overlay() {
            return {
                backgroundColor: 'rgba(135,153,171, 0.75)',
                height: '100vw',
                position: 'fixed',
                width: '100vw',
            }
        },
        modal() {
            return {
                backgroundColor: 'white',
                borderRadius: '6px',
                opacity: 'white',
                padding: '32px',
                position: "fixed",
                transition: 'top 2s',
                
            }
        }


    },

    template: `
        <div v-if="active" :style="overlay" class="container centralize">
            <div :style="modal" :class="['container', 'centralize', (active? 'modal-open' : 'modal-close')]">
                <slot></slot>
            </div>
        </div>`
})