let MyTasks = [];

//method to accept variable(string) then output 
//the variable and return the length of the myTask array
let addTask = (task)=>{
    let length = MyTasks.push(task);
    console.log("Task: "+task+" added to tasks")
    return length;
}

let listAllTasks = ()=>{
    MyTasks.forEach((thing)=>{
        console.log(thing);
    })
}

addTask("Learn JS");