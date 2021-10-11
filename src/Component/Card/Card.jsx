import React from "react";
import styles from "./styles.module.css";

const card = ({ data }) => {
  console.log(data);
  return (
    <div className={styles.card_container}>
      <img width="100%" height="100%" src={data.img_url} alt={data.title} />

      <div
        className={styles.card_cont_details}
        //   className={styles.details_container}
        style={{
          position: "absolute",
          width: "100%",
          bottom: 0,
          paddingBottom: "10px",
          //   paddingLeft:"1px",
          background: "rgba(0,0,0,0.4)",
        }}
      >
        <div className={styles.details} >
          <div className={styles.title}>
            <h4>{data.title}</h4>
            <h6>{data.time}</h6>
          </div>
          <button className={styles.btn}>{data.btn1}</button>
        &nbsp;&nbsp;
        <button className={styles.btn}>{data.btn2}</button>

        </div>
        {/* <div className={styles.title}> */}
        {/* <h4>{data.title}</h4>
       <p>{data.time}</p> */}
        {/* </div> */}
      
      </div>
    </div>
  );
};

export default card;
