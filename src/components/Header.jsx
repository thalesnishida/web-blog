import style from "./Header.module.css";

import logoTipo from "../assets/ignite-logo.svg";

export function Header() {
  return (
    <header className={style.header}>
      <img src={logoTipo} alt="Logotipo" />
    </header>
  );
}
