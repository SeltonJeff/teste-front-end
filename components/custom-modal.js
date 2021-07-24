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
                height: '100vh',
                width: '100vw',
                position: 'absolute',
                top: "0",
                left: "0",
                zIndex: '5',
            }
        },
        modal() {
            return {
                backgroundColor: 'white',
                borderRadius: '6px',
                opacity: 'white',
                padding: '32px',
                transition: 'top 2s',
                zIndex: '6',
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