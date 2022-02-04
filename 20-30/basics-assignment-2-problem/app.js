const app = Vue.createApp({
    data() {
      return {
        output:'OUTPUT',
        confirmedOutput:'',
        enteredValue:'OUTPUT'
      };
      
    },
    methods: {
        alerte(){
            alert("dang yo booty thick")
        },
        setOutput(event){
            this.output = event.target.value;
        },
        enteredOutput(event){
            this.enteredValue = event.target.value;
        },
        confirmedInput(){
            this.confirmedOutput = this.enteredValue;
        }
        
        }
    
    });

    app.mount('#assignment');


    