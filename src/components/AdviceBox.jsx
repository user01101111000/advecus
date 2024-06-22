import style from "./AdviceBox.module.css";
import divider from "../assets/images/pattern-divider-desktop.svg";
import loading from "../assets/images/loading.gif";

import randomDice from "../utils/randomDice.jsx";

import { useSelector, useDispatch } from "react-redux";
import { fetchAdviceData } from "../states/slicers/adviceSlicer";
import { useEffect, useState } from "react";
export default function AdviceBox() {
  const [diceIcon, setDiceIcon] = useState(null);

  const { isLoading, error, data } = useSelector((state) => state.advice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdviceData());
    setDiceIcon(randomDice());
  }, []);

  function getAdvice() {
    dispatch(fetchAdviceData());
    setDiceIcon(randomDice());
  }

  return (
    <article className={style.adviceBox}>
      <p>ADVICE #{data.id}</p>

      <h1>
        {isLoading ? (
          <img src={loading} alt="loading" className={style.loading} />
        ) : (
          <>{error ? "Error" : data.advice}</>
        )}
      </h1>

      <img src={divider} alt="divider" />

      <div
        className={isLoading ? style.processing : style.diceWrapper}
        onClick={getAdvice}
      >
        {diceIcon}
      </div>
    </article>
  );
}
