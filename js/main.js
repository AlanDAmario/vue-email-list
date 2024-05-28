const { createApp } = Vue;

createApp({
    data() {
        return {
            emailCounter: 10,
            randomEmail: [],
            urlEmail: 'https://flynn.boolean.careers/exercises/api/random/mail',
        }
    },
    methods: {
        apiCall() {
            //CREAIMO UN SEMPLICE CICLO FOR PER STAMPARE TOT VOLTE
            for (let i = 0; i < this.emailCounter; i++) {
                //SINTASSI PER PRENDERE ELEMENTI ATTRAVERSO AXION, EMAIL GEN è IL CONTENITORE DI TUTTO L OGGETTO RICHIMATO GRAZIE AD AXION
                axios.get(this.urlEmail).then((emailGen) => {
                    //PUSHAMO IN ARRAY (randomEmail) L OGGETTO PRESENTE NELL URL (EMAIL GEN), ENTRANDO DENTRO LA PROPRIETà DATA, ENTRANDO LA PROPRIETà SPECIFICA DI RESPONSE RESPONSE 
                    this.randomEmail.push(emailGen.data.response);
                    //VERIFICA STANDARD SE PER QUALCHE MOTIVO L HTTP DOVESSE FALLIRE NEL CARICAMENTO
                }).catch((error) => {
                    alert.error("Error fetching email:", error);
                });

            }

        },
    },
    created() {
        this.apiCall();
    }
}).mount('#app')