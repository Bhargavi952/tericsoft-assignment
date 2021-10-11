import React, { useEffect } from "react";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../Redux/actions";
import styles from "./styles.module.css";

const Highlights = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  // console.log(data.highlights)
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <>
      <h1 className={styles.heading}>Highlights</h1>
      <div className={styles.highlights_container}>
        {data.highlights?.map((item) => {
          return <Card data={item} />;
        })}
        {/* <Card/> */}
      </div>
    </>
  );
};

export default Highlights;
