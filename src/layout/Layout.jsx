import style from "./Layout.module.css";
import AdviceBox from "../components/AdviceBox";
export default function Layout() {
  return (
    <main className={style.layout}>
      <AdviceBox />
    </main>
  );
}
