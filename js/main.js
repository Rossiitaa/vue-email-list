const app = new Vue({
    el: '#app',
    data: {
        email: [],

    },
    methods: {

    },
    created: function randomEmail() {
        for (let i = 0; i < 10; i++) {

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {
            console.log(response.data.response);
        });
    };
    }
});