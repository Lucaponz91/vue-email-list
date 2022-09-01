const app = new Vue({
    el: '#app',

    data: {

        mails: []

    },
    method: {

    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            axios
                .get(' https://flynn.boolean.careers/exercises/api/random/mail ')
                .then((res) => {

                    this.randomEmail = res.data.response;
                    this.mails.push(this.randomEmail);
                    console.log(this.randomEmail)
                })
        }

    }

})




