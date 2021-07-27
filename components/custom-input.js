const customInput = Vue.component('custom-input', {
    props: ["color", "name", "onClick", "title", "type", "value", "placeholder"],
    data() {
        return {

        }
    },

    computed: {
        isRadio() {
            return this.type === "radio"
        },
        radioStyle() {
            return {
                transform: 'scale(0.5)',
                fontSize: '2em',
                width: '200px',
            }
        },
        isButton() {
            return this.type === "button" || this.type === "sm-button"
        },
        buttonStyle() {
            const availableColors = {
                'enabled' : 'rgb(22,208,141)',
                'disabled' :'rgb(166,193,210)'
            }

            return {
                backgroundColor: (availableColors[this.color] || 'white'),
                color: 'rgb(255, 255, 255)',
                marginTop: '5px',
                height: '36px',
                fontWeight: 'bold',
                border: 'none',
                borderRadius: '3px',
            }
        },

        smButtonStyle() {
            return {
                maxWidth: "256px",
            }
        }
    },

    template: `
        <div :class="['container', (!isRadio ? 'direction-col' : 'direction-row')]" :style="(!isRadio ? '' : radioStyle )">
            <label v-if="!isRadio && !isButton">{{title}}</label>
            <input 
                v-if="!isButton && type !== 'textarea' "
                :name="name"
                :type="type"
                :value="value"
                :placeholder="placeholder"
                @input="$emit('input', $event.target.value)">
            <textarea 
                v-if="type === 'textarea'" 
                style="resize: none; height: 15vh"
                @input="$emit('input', $event.target.value)">{{value}}</textarea>
            <label v-if="isRadio">{{title}}</label>
            <button 
                v-if="isButton" @click="onClick" 
                :style="[buttonStyle, (type === 'sm-button' ? 'smButtonStyle' : '')]">{{value}}</button>
        </div>`
})