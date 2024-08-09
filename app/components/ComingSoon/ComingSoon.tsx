import React from "react";
import styles from "./ComingSoon.module.css"

const ComingSoon = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>COMING SOON</h1>
      <p className={styles.description}>
        Get ready! Something really cool is coming!
      </p>
      <div className={styles.inputContainer} >
        <input
          type="email"
          placeholder="Your Email"
          className={styles.input}
        />
        <button className={styles.button}>Notify Me</button>
      </div>
    </div>
  );
};

export default ComingSoon;
