import React, { Component } from "react";
import styles from "./styles.module.css";

class Navbar extends Component {
  render() {
    return (
      <div className={styles.nav_container}>
        <div className={styles.sub_container}>
          <i class="fa fa-star-o"></i>
          <p>Featured</p>
        </div>
        <div className={styles.sub_container}>
          <i class="fa fa-star-o"></i>
          <p>Featured</p>
        </div>

        <div className={styles.sub_container}>
          <i class="fas fa-swimmer"></i>
          <p>Aquatics</p>
        </div>
        <div className={styles.sub_container}>
          <i class="fas fa-biking"></i>
          <p>Cycling</p>
        </div>
        <div className={styles.sub_container}>
          <i class=" fas fa-horse-head"></i>
          <p>Equestrain</p>
        </div>
        <div className={styles.sub_container}>
          <i class="fas fa-skiing"></i>
          <p>Extreme</p>
        </div>
        <div className={styles.sub_container}>
          <i class="fas fa-golf-ball"></i>
          <p>Golf</p>
        </div>
        <div className={styles.sub_container}>
          <i class="fas fa-dumbbell"></i>
          <p>Gymnastic</p>
        </div>
        <div className={styles.sub_container}>
          <i class="fas fa-ship"></i>
          <p>Lake & Sea</p>
        </div>
      </div>
    );
  }
}

export default Navbar;