const userProfile = Vue.component('user-profile', {
    props: [
        'user',
    ],

    data() {
        return {

        }
    },

    template: `
        <div class="profile">
            <img v-bind:src="user.imgSrc"
                v-bind:style="{
                    width: '40px',
                    height: '40px',
                    objectFit: 'cover',
                    borderRadius: '40px',
                    margin: 'auto',
                }">
                </img>
            <div style="margin:auto; margin-left:5px; margin-right: 10px">
                <div style="font-weight:bold; font-size: 0.8em">{{user.name}}</div>
                <div style="font-weight:bold; font-size: 0.7em; color: var(--primary-color)">{{user.role}}</div>
            </div>
        </div>
    `
})