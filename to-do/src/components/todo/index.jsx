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
                    <ul>All</ul>
                    <ul>None</ul>
                </select>
            </div>
            <p>dalkfnjalkfn</p>
            <p>dalkfnjalkfn</p>
            <p>dalkfnjalkfn</p>
            <p>dalkfnjalkfn</p>
            
        </div>
    )
}