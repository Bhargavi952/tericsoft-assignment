import React from 'react'
import styles from "./styles.module.css";


const SideHeading = () => {
    return (
        <div className={styles.sideHeading_container}>
            <h5>BMX</h5>
            <h5>Mountain</h5>
            <h5>Road</h5>
            <h5>Track</h5>
        </div>
    )
}

export default SideHeading
