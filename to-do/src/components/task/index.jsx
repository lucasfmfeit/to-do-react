import styles from "./styles.module.css"
export function Task(){
    return(
        <div className={styles.taskContainer}>
                <div className = {styles.spanCheck}>
                    <input type="checkbox" name="" id="checkbox" />
                    
                    <span>
                        <h3>title</h3>
                        <time dateTime ='2001-05-15 19:00'>May 15</time>
                    </span>
                </div>
                <div className = {styles.buttons}>
                    <button id="trash">Delete</button>
                    <button id='edit'>Edit</button>
                </div>

        </div>
    )
}