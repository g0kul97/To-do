import {useState} from "react";
import './style.css';

function ToDo(){
    const [tasks,setTasks] = useState([]);
    const[inputValue,setInputValue]= useState("");

    function addData(){
        if(inputValue.length===0){
            return;
        }
        setTasks([
            ...tasks,
            {
                content: inputValue,
            iscomplete: false,
            isEditing: false
        }
        ]);
        setInputValue("");
    }
function deleteTask(taskIndex) {
    tasks.splice(taskIndex,1)
    setTasks([
        ...tasks
    ]
        // tasks.filter(
        //     (t)=>t !==task
        // )
    )
}
function markCompleted(taskIndex){
    tasks[taskIndex].iscomplete = !tasks[taskIndex].iscomplete;
    setTasks([
        ...tasks
    ])
}
function editTask(taskIndex){
    tasks[taskIndex].isEditing=true;
    setTasks(
        [...tasks]
    )
}

function updateValue(taskIndex,value){
    tasks[taskIndex].content=value;
    setTasks(
        [...tasks]
    )
}

function saveTask(taskIndex){
    tasks[taskIndex].isEditing=false;
    setTasks(
        [...tasks]
    )
}

    return <div className="ToDo">
        <h1>ToDo List</h1>
        <div className="tasks">
            {
                tasks.sort((a)=>a.iscomplete ? 1 : -1).map(

                    (task,index)=><div key={index} className={"task " + (task.iscomplete ? "completed": "incomplete")}>
                      <input type="checkbox" checked={task.iscomplete} onChange={()=>markCompleted(index)}/>
                       {
                        task.isEditing ?
                        
                            <input value={task.content}onChange={(event)=>updateValue(index,event.target.value)} className="edit-input" />
                        :
                        <span className="content">
                    {
                        task.iscomplete ?
                        <del>{task.content}</del>:
                        task.content
                    }
                    
                        </span>
                       }
                       {
                        task.isEditing?
                         <button onClick={()=>saveTask(index)} className="save">Save</button>:
                         <button onClick={()=>editTask(index)} className="edit" >Edit</button>
                       }
                       
                     
                    <button onClick={()=>deleteTask(index)} className="delete">Delete</button>
                    </div>
                )
            }
        </div>
        <div className="add-task">
            <input value={inputValue} onChange={(event)=>setInputValue(event.target.value)} placeholder="Enter your task"/>
            <button onClick={addData}>Add Task</button>
        </div>
    </div>
  }
  
  export default ToDo;