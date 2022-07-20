import styles from "./ListTasks.module.scss";
import { Clipboard } from "phosphor-react";
import Task from "./Task";
import { useState } from "react";
import FormAddTask from "./FormAddTask";

type Task = {
  id: number;
  description: string;
  isComplete: boolean;
};

export default function ListTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskDescription, setTaskDescription] = useState("");
  const [countTasksCompleted, setCountTasksCompleted] = useState(0);

  console.log("Lista", tasks);

  function handleCreateNewTask() {
    const newTask = {
      id: Math.random() * 10,
      description: taskDescription,
      isComplete: false,
    };

    setTasks((oldTasks) => [...oldTasks, newTask]);
    setTaskDescription("");
  }

  function handleCompletedTask(id: number) {
    const taskCompleted = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isComplete: !task.isComplete,
        };
      } else {
        return task;
      }
    });

    setTasks(taskCompleted);

    const countTasksCompleted = taskCompleted.filter((task) => {
      return task.isComplete;
    });

    setCountTasksCompleted(countTasksCompleted.length);
  }

  function handleTaskDeleted(id: number) {
    console.log("iD Task selected", id);

    const newListTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    console.log("Lista", tasks);
    console.log("Deletado", newListTasks);

    setTasks(newListTasks);
  }

  return (
    <div className={styles.container}>
      <FormAddTask
        taskDescription={taskDescription}
        isTaskDescription={setTaskDescription}
        handleCreateNewTask={handleCreateNewTask}
      />

      <header>
        <span className={styles.createdTasks}>
          Tarefas criadas <span>{tasks.length}</span>
        </span>
        <span className={styles.completedTasks}>
          Concluídas{" "}
          <span>
            {countTasksCompleted} de {tasks.length}
          </span>
        </span>
      </header>

      {tasks.length === 0 ? (
        <div className={styles.tasksEmpty}>
          <Clipboard size={56} />
          <span>Você ainda não tem tarefas cadastradas</span>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      ) : (
        tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            description={task.description}
            status={task.isComplete}
            onTaskCompleted={handleCompletedTask}
            onTaskDeleted={handleTaskDeleted}
          />
        ))
      )}
    </div>
  );
}
