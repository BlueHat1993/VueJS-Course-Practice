Vue.createApp({

  data(){
    return{
      goals:[],
      enteredValue:''
    }
  },
  methods:{
    addGoal(){
      this.goals.push(this.enteredValue);
    },
    RemoveGoal(){
      if(Array.isArray(this.goals))
        {
          this.goals.pop();
        }
    },
    ClearGoals(){
      this.goals.length=0;
    }
  }


}).mount('#app'); // create up creates an object



// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal() {
//   const enteredValue = inputEl.value;
//   const listItemEl = document.createElement('li');
//   listItemEl.textContent = enteredValue;
//   listEl.appendChild(listItemEl);
//   inputEl.value = '';
// }

// buttonEl.addEventListener('click', addGoal);

