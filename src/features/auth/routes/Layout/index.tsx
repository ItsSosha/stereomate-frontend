import { Outlet } from "react-router-dom";

import styles from "./styles.module.scss";

export function AuthLayout() {
  return (
    <div className={styles.root}>
      <div className={styles.rootBlur}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>Stereomate</h1>
          <p className={styles.subtitle}>Music On. World Off.</p>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
