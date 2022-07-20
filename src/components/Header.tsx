import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.container}>
      <img src="images/logo.svg" alt="Logo" />
      <strong>
        to<strong>do</strong>
      </strong>
    </header>
  );
}
