
const fs = require(`fs`)

const filePath = "./tasks.json"

const loadTask = ()=>{
    try {
        const dataBuffer = fs.readFileSync(filePath)
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
}
const addTask = (task)=>{
    const tasks = loadTask()
    tasks.push({ task })
    saveTasks(tasks)
    console.log("Task Added",task);
    
}
const saveTasks =(tasks)=>{
    const dataJson = JSON.stringify(tasks);
    fs.writeFileSync(filePath,dataJson)
}

const command = process.argv[2]
const argumment = process.argv[3]

if (command==="add") {
    addTask(argumment)
    
}
else if(command==="list"){
    listTasks()
}
else if(command=="remove"){
    removeTask(argumment)
}
else{
    console.log("Command Not Found!!");
    
}
const listTasks =()=>{
    const tasks =loadTask()
    tasks.forEach((task,index)=>console.log(`${index+1} - ${task.task}`)
    )
        
    
}