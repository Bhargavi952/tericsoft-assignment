import React, { Component } from "react";
import styles from "./styles.module.css";
import data from "./NavData";

class Navbar extends Component {
  render() {
    return (
      <div className={styles.nav_container}>
        {data.map((item) => {
          return (
            <div className={styles.sub_container}>
              <span style={{ color: "gray" }}>
                <i class={item.icon}></i>
              </span>
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Navbar;
