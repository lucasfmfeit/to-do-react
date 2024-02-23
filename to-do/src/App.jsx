
import { Todo } from "./components/todo/index"
import styles from "./App.module.css"
import "./global.css"



export function App() {


  return (
    <div className={styles.appContainer}>
        <Todo/>
    </div>
    
     )
}


