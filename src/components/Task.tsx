import { Circle, Trash } from "phosphor-react";
import { CheckIcon } from "./CheckIcon";
import styles from "./Task.module.scss";

interface TaskProps {
  id: number;
  description: string;
  status: boolean;
  onTaskCompleted: (id: number) => void;
  onTaskDeleted: (id: number) => void;
}

export default function Task({
  id,
  description,
  status,
  onTaskCompleted,
  onTaskDeleted,
}: TaskProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <button
          onClick={() => onTaskCompleted(id)}
          className={styles.buttonCompletedTask}
        >
          {status ? <CheckIcon /> : <Circle size={18} color="#4EA8DE" />}
        </button>
        <span
          className={
            status ? styles.descriptionTaskCompleted : styles.descriptionTask
          }
        >
          {description}
        </span>
      </div>
      <button
        type="button"
        onClick={() => onTaskDeleted(id)}
        className={styles.buttonTrash}
      >
        <Trash color="#5E60CE" size={18} />
      </button>
    </div>
  );
}
