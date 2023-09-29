let MyTasks = [];

//method to accept variable(string) then output 
//the variable and return the length of the myTask array
let addTask = (task) => {
    let length = MyTasks.push(task);
    console.log("Task: " + task + " added to tasks")
    return length;
}

//add method to list tasks
let listAllTasks = () => {
    MyTasks.forEach((thing) => {
        console.log(thing);
    })
}

//write function to delete a task from  the list
let deleteTask = (task) => {
    //return the index of the first task
    let index = MyTasks.indexOf(task);
    if (index > -1) {//if successful display message accordingly
        MyTasks.splice(index, 1);
        console.log("Task: " + task + " removed from Tasks");
    }
    else {//error message
        console.log("Task: " + task + " not in Tasks!");
    }
}

//call methods
addTask("Learn JS");
addTask("Learn REACT");
listAllTasks();
deleteTask("Learn JS");
deleteTask("Learn REACT");