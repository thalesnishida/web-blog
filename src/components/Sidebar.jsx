import styles from "./Sidebar.module.css";

import { PencilLine } from "phosphor-react";

export function Sidebar() {
  return (
    <div>
      <aside className={styles.sidebar}>
        <img
          className={styles.cover}
          src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        />

        <div className={styles.profile}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/69862938?v=4"
          />

          <strong>Thales Nishida</strong>

          <span>Full-Stack developer</span>
        </div>

        <footer>
          <a href="#">
            <PencilLine size={20} />
            Editar seu perfil
          </a>
        </footer>
      </aside>
    </div>
  );
}
