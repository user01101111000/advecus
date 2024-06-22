import style from "../components/AdviceBox.module.css";

import { BsFillDice1Fill } from "react-icons/bs";
import { BsFillDice2Fill } from "react-icons/bs";
import { BsFillDice3Fill } from "react-icons/bs";
import { BsFillDice4Fill } from "react-icons/bs";
import { BsFillDice5Fill } from "react-icons/bs";
import { BsFillDice6Fill } from "react-icons/bs";

export default function randomDice() {
  const dices = [
    <BsFillDice1Fill className={style.dice} />,
    <BsFillDice2Fill className={style.dice} />,
    <BsFillDice3Fill className={style.dice} />,
    <BsFillDice4Fill className={style.dice} />,
    <BsFillDice5Fill className={style.dice} />,
    <BsFillDice6Fill className={style.dice} />,
  ];

  let index = null;

  do {
    index = Math.floor(Math.random() * 6);
  } while (index == localStorage.getItem("diceIndex"));

  localStorage.setItem("diceIndex", index);

  return dices[index];
}
