import { useState } from "react"
import styles from "./index.module.css"
const Input = () => {

    return (
        <div className={styles.inputContainer}>
            <input placeholder="Add a new task..."></input>
            <button>Add</button>
        </div>
    )
}
export default Input