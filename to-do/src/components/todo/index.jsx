import { useState } from 'react'
import { Task } from '../task'
import styles from './styles.module.css'




export function Todo(){

    const [taskList,setTaskList] = useState([
        {
            id:32,
            description:"Aqui vai sei la o que",
            data:"09/04",
            checked:false
        
        },
        {
            id:31,
            description:"flamengo",
            data:"09/04",
            checked:false
        
        },
        {
            id:2,
            description:"maior ou igual que",
            data:"09/04",
            checked:false
        
        },
        {
            id:322,
            description:"palmeiras",
            data:"09/04",
            checked:true
        
        },
    ])

    function onCheckedTask(id){
        
        const copyTaskList = taskList.map(task=>{
            if(task.id==id){
                task.checked=!task.checked
            }
        })
        setTaskList(copyTaskList)
    }

    return(
        <div className={styles.boxContainer}>
            <header>
                <h1>TODO LIST</h1>
            </header>
            <div className={styles.optionsBox}>
                <button>
                    Add Task
                </button>
                <select>

                    <option value="all" disabled selected>All</option>
                    
                    <option value="none">None</option>
                </select>
            </div>
            <div className={styles.tasksBox}>
                {
                    taskList.map(task=>{
                        return(

                            <Task
                            key = {task.id}
                            id = {task.id}
                            description={task.description}
                            data = {task.data}
                            checked = {task.checked}
                            onCheckedTask = {onCheckedTask}
                            />
                        )

                    })
                }
            </div>
            
        </div>
    )
}