import { InputHTMLAttributes, forwardRef } from "react";

import styles from "./styles.module.scss";
import classNames from "classnames";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, error, ...rest }: InputProps, ref) => {
    return (
      <div className={styles.root}>
        {!!label && (
          <label htmlFor={id} className={styles.label}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={classNames(styles.input, !!error && styles.invalid)}
          {...rest}
        />
        {!!error && <span className={styles.error}>{error}</span>}
      </div>
    );
  }
);
