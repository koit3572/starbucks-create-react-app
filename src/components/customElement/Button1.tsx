import React from 'react'
import styles from "../../style/customelement.module.scss";
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
interface IButton1 {
  children: React.ReactNode;
  type?: "reverse" | "brown" | "gold" | "white";
  to?: string;
  className?: string;
}
const cx = classNames.bind(styles);
const Button1: React.FC<IButton1> = ({
  children,
  type,
  to = "#",
  className
}) => {
  return (
    <Link
      to={to}
      className={`${
        type ? cx("button1", `button1--${type}`) : cx("button1")
      } ${className}`}
    >
      {children}
    </Link>
  );
}

export default Button1