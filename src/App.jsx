import { Header } from "./components/Header";

import styles from "./App.module.css";
import { Post } from "./Post";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Thales Nishida"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi dicta, nihil natus pariatur amet rerum delectus in fugiat, suscipit quaerat dolorem architecto similique sequi accusamus exercitationem atque optio minus quia"
          />

          <Post author="Eliara Santiago" content="Novo post" />
        </main>
      </div>
    </div>
  );
}

export default App;
