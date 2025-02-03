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
            <div className={styles.footer}>
                <p className={styles.text2}>
                    Powered by 
                </p>
                <p className={styles.text3}>
                    Pinecone Academy 
                </p>
            </div>
        </div>
    )
}
export default Tabs