import styles from "./App.module.scss";
import FormAddTask from "./components/FormAddTask";

import Header from "./components/Header";
import ListTasks from "./components/ListTasks";

function App() {
  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>
        <ListTasks />
      </div>
    </div>
  );
}

export default App;
