const { createApp } = Vue;

createApp({
    data() {
        return {
            randomEmail: [],
            urlEmail: 'https://flynn.boolean.careers/exercises/api/random/mail',
        }
    },
    methods: {
        apiCall() {
            //ANDIAMO A RICHIMARE L ARRAY VUOTO RIASSEGNADOLO A 0
            this.randomEmail
            axios.get(this.urlEmail).then((emailGen) => {
                this.randomEmail = emailGen.data;
            });

        },
    },
    created() {
        this.apiCall();
    }
}).mount('#app')