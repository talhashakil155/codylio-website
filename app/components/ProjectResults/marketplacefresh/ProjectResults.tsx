import React from 'react';
import styles from './Results.module.css';

const Results = () => {
  return (
    <div className={styles.parentContainer}>
      <div className={styles.resultsContainer + " mx-auto max-w-7xl px-6 lg:px-8"}>
        <h2 className={styles.heading}>Results</h2>
        <p className={styles.description}>
          This shows the performance improvements and increase in number of active users post-update
        </p>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h3><b>42,000</b></h3>
            <p>number of active users</p>
          </div>
          <div className={styles.card}>
            <h3><b>16</b></h3>
            <p>grocery stores with their own inventory and management</p>
          </div>
          <div className={styles.card}>
            <h3><b>20%</b></h3>
            <p>performace improved with our load balancing</p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Results;
