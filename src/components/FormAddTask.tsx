import styles from "./FormAddTask.module.scss";
import { PlusCircle } from "phosphor-react";
import { FormEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormAddTaskProps {
  taskDescription: string;
  handleCreateNewTask: () => void;
  isTaskDescription: (description: string) => void;
}

export default function FormAddTask({
  taskDescription,
  isTaskDescription,
  handleCreateNewTask,
}: FormAddTaskProps) {
  function handleSubmitCreateNewTask(event: FormEvent) {
    event.preventDefault();

    if (taskDescription) {
      handleCreateNewTask();
    } else {
      toast("😅 Informe uma descrição para a tarefa!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        bodyStyle: {
          color: "var(--white)",
        },
        style: {
          background: "var(--gray-500)",
        },
      });
    }
  }

  return (
    <form className={styles.container} onSubmit={handleSubmitCreateNewTask}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={taskDescription}
        onChange={(event) => isTaskDescription(event.target.value)}
      />
      <ToastContainer />
      <button type="submit">
        Criar <PlusCircle size={16} weight="bold" />
      </button>
    </form>
  );
}
