import { ButtonHTMLAttributes, PropsWithChildren } from "react";

import styles from "./styles.module.scss";
import classNames from "classnames";

interface ButtonProps
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button {...rest} className={classNames(styles.root, className)}>
      {children}
    </button>
  );
}
