import React from "react";
import styles from "./styles.module.css";

const card = ({ data }) => {
  console.log(data);
  return (
    <div className={styles.card_container}>
      <img width="100%" height="100%" src={data.img_url} alt={data.title} />

      <div className={styles.card_container_details}>
        <div className={styles.details}>
          <div className={styles.title}>
            <p>{data.title}</p>
            <p className={styles.time}>{data.time}</p>
          </div>
          <button className={styles.btn}>{data.btn1}</button>
          &nbsp;&nbsp;
          <button className={styles.btn}>{data.btn2}</button>
        </div>
      </div>
    </div>
  );
};

export default card;
