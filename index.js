// Arrays to keep track of each task's state


// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title,description) {
  const task = {
      title: title,
      description: description,
      complete: false,
      logState: function() {
        console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
      },
  
      taskCompleted: function() {
        this.complete = true;
      }
      
  }
  return task
}

const task1 = newTask("Clean litter box", "Take out the poo from the litter box") // returns two objects nested in an array
const task2 = newTask ("Do laundry", "scary")
const tasks = [task1,task2]



setTimeout(() => {
  task1.logState(task1)
},2000)

setTimeout(() => {
  task1.taskCompleted(task1)
},4000)

setTimeout(() => {
  task1.logState(task1)
},6000)



