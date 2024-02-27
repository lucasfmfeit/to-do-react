import { Task } from '../taks'
import styles from './styles.module.css'


export function Todo(){
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
                <Task/>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
            </div>
            
        </div>
    )
}