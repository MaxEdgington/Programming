const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
    
  },
  methods: {
    confirmedInput(){
this.confirmedName = this.name;
    },
    setName(event){
      this.name = event.target.value;

      // how do we get value user entered? Built in JS behaviour 
      // - point to set name method 

      /* When you add an event listener and point at a function that should be executed when that event occurs,
       that fucntion will automatically get one arguement, the browser will 
       ensure this argument is provided, and that will be an object describing 
       the event that occured 
      In set name we can accept this one parameter - named whatever you want, but you will always get this by the browser. 
      We would have had it with the add arguments before but we overrode it with out own parameters
      Because we're not executing with setName with parenthesis 
      and instead pointing at it, we don't override it and let the browser provide
      the default event object 

      Useful because default event object will be full of information, for example
      it will give us information about the HTML element on which this event occured and 
      we can think read the current value stored in this input from that input element
      Get access to target of the event through event.target

      target - gives us access to element in which event occured 
      input eleent will have a value property used to read what the user entered 

      event.target.value is value user eneted, 
      setName called on every input event (every keystroke)
      this. should update the name data property with every keystroke with the value the user currently
      entered here

      Then we're outputting name below in the P tag 

      
    




      */ 
    },
    add(num){
      this.counter = this.counter + num;
    },
    reduce(num){
      this.counter = this.counter - num; 
    }
  }
});

app.mount('#events');
