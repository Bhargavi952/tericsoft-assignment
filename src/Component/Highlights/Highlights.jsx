import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../Redux/actions";
import styles from "./styles.module.css";
import ClipLoader from "react-spinners/ClipLoader";
import PropagateLoader from "react-spinners/PropagateLoader";

const Highlights = () => {
  const [color, setColor] = useState("gray");

  const data = useSelector((state) => state);
  const loading = data.isloading;
  // console.log(loading)
  const dispatch = useDispatch();
  // console.log(data.highlights)
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <>
      <h1 className={styles.heading}>Highlights</h1>
      {data.isloading ? (
        <div className={styles.loader}>
          <PropagateLoader size={15} color={color} loading={loading} />
        </div>
      ) : (
        <div className={styles.highlights_container}>
          {data.highlights?.map((item) => {
            return <Card data={item} />;
          })}
        </div>
      )}
    </>
  );
};

export default Highlights;
