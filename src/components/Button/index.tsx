import React from "react";
import style from "./Button.module.scss";

interface Props {
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
    children?: React.ReactNode
}

const Button = ({onClick, type, children}: Props) => {
    return (
        <button className={style.button}
          onClick={onClick}
          type={type}
        >
            {children}
        </button>
    );
}

export default Button;