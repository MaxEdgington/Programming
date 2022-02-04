const app = Vue.createApp({
    data(){
        return {
        counter: 0,
        };
    },

    
    computed: {
        changingResult(){

            if (this.counter === 0){
                return 'RESULT';
            }
                else if (this.counter === 37){
                    return '37';
                }
                else if (this.counter > 37){
                    return 'Too much!';
            }

            else { return 'Not there yet'
        }
    }},
    
    watch: {
        counter(value) {
        if (value > 0) {
            // if value exceeds 0 
            const that = this;
            // this wont work by itself becuase this in the timeout function
            // wont refer to the same thing this would refer to outside the function
            // therefore we can work around that by storing this in another constant and
            // using that within the function 
            // not vue specific, just how JS works 
            setTimeout(function () {
                // set timer
                that.counter = 0;
                //
            }, 5000);
            //timer 5 seconds
        
        }

    
        
    }},

    methods:{
        add(num){
            this.counter = this.counter + num;
        }
    }


});

    app.mount('#assignment')
