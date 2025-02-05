import styles from "./index.module.css"
const Tabs = () => {
    return (
        <div className={styles.tabsContainer}>
            <div className={styles.buttons}>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
            <p className={styles.text1}>
                No tasks yet. Add one above!
            </p>
        </div>
    )
}
export default Tabs