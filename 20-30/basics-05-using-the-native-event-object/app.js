const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  computed: {
    fullName(){
      console.log('Running again...');
      if (this.name === ''){
    
    return '';
    }
    return this.name + ' ' + 'Bobbybrown';
    },
    // if it's a computed property you call 
    // the computed property like a data property (not like a
    // method with () )
    // one of the benefits is that with a method you have code executed
    // with computed properties vue is aware of the depndencies of the computer
    // properties 
    /* 
    So in this case, that name is a dependency
    and it will cache the computed property value
    and only recalculate and reevaluate it  
    if one of the dependencies in this case,
    the only dependency we have the name property changed.
    And that's the key difference for performance.
    It's better to use computer properties that methods
    for outputting values In most cases.
    
    METHODS

    only use methods if you want to recalculate a value
    whenever everything on the page is changed 
    
    If you want to recalculate a value if a single dependency changed 
    use computed properties 

    more often you're using methods because you have events 
    You need methods because you want to trigger certain methods when an event occurs, 
    you NEED to bimd your events to methods 

    DONT bind events to comoputer properties 
    
    you really ONLY use computer properties for outputting something like 
    full 


    */ 
  },
  methods: {
    outputFullName(){
      if (this.name === ''){
    
        // if check if this name is currently empty
        return '';
        // if it is return empty string
      }

      return this.name + ' ' + 'Bobbybrown';
      // only return last name if name is not empty
      /* So here we leveraged the fact
    that we're having a method to return different values based
    on different values and name.

      */ 

    // however this is not the best way 
    // the problem is, if counter button pressed, we don't see problem but 
    // behind scenes Vue tries to find out where on this page it needs to update
    // the rendered page 
    // if we call method, method will be re-executed by vue whenever 
    // anything on the page changes
    // vue doesn't know what method does
    // it doesn't know if counter gets used in there
    // if counter changed and this method uses counter, the method
    // should be re-executed
    // for that reason, Vue re-executed any method between curly braces / v-bind
    // v-html will be re-executed if anything on the screen changes
    // even if we know vue doesnt know
    // we can add console log
    // indicates things are running each time, that's why methods are not the 
    // best solution for outputting dynamically 
    // calculated value like this
    // what is a better solution? 

    // we could put our name in your name in the html
    // <p> Your Name: {{ name+ ' + 'Schwarz'}}
    // issue is now we have more logic in our HTML which is not good! 

    // next thing, computed properties
    // vue will be aware of their dependencies, and only re-execute if one 
    // of the dependencies change
    // computer is the third big configuration option 
    // use computed - key options supported by vue in vue apps 
    // computed wants an object 
    // in computer you define methods, but methods will be called and executed 
    // differently
    // here we can add a full name method re above 

    },
    // I want to call outputFullName in curly braces 
    

    setName(event) {
      this.name = event.target.value;

    
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    /*
    resetInput(){
     document.querySelector('input').value ='' 
    }

    this is a JS method but not using Vue 
    */ 
   resetInput(){
     this.name = '';

  }
}});

app.mount('#events');
