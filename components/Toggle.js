import style from "./Style/toggle.module.scss";
import { useState, useRef, useEffect } from "react";

const Toggle = (props) => {
  const input = useRef();

  useEffect(() => {
    input.current.checked = props.isToggled;
  }, []);

  return (
    <div className={style.container}>
      <label class={style.switch}>
        <input
          ref={input}
          type="checkbox"
          onClick={(e) => {
            props.click();
          }}
        />
        <span className={style.slider} />
      </label>
      <h5>{props.toggleTitle}</h5>
    </div>
  );
};

export default Toggle;
