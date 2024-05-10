import styles from "./styles.module.css"



export function Task( {id,description,checked,data,onCheckedTask}){

    console.log(id,description,data,checked)

    function handleChecked(){
        onCheckedTask(id)
    }
    
    return(
        <div className={styles.taskContainer}>
                <div className = {styles.spanCheck}>
                    <input onChange={handleChecked} type="checkbox" name="" id="checkbox" checked={checked}/>
                    
                    <span>
                        <h3>{description}</h3>
                        <time dateTime ='2001-05-15 19:00'>{data}</time>
                    </span>
                </div>
                <div className = {styles.buttons}>
                    <button id="trash"></button>
                    <button id='edit'>Edit</button>
                </div>

        </div>
    )
}78