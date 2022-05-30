import React from "react";
import { ImSpinner3 } from "react-icons/im";
import styles from '../styles/spinner.module.css'


const Spinner = () => {
  return (
    <div className="flex justify-center mt-10">
      <ImSpinner3 size={30} className={styles.spinner} />
    </div>
  );
};

export default Spinner;
