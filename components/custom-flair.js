const customFlair = Vue.component('custom-flair', {
    props: ['text', 'type'],
    data() {
        return {
            
        }
    },
    computed: {
        flairStyle() {
            let backgroundColor;

            if(this.type == "danger") {
                backgroundColor = 'rgb(220,53,69)'
            }
            else if(this.type == "warning") {
                backgroundColor = 'rgb(255,193,7)'
            }

            return {
                maxHeight: "25px",
                backgroundColor,
                borderRadius: "12px",
                color: "white",
                fontSize: "0.75em",
                fontWeight: "500",
                padding: "5px 10px 5px 10px",
                marginTop: "auto",
                marginBottom: "auto",
            }
        }
    },
    template: `<div :style=" [flairStyle] "> {{text}} </div>`
})