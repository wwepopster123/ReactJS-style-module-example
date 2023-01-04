import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.category}>
        <h1>Buttons</h1>
        <button className={styles.acceptButton}>Add</button>
        <button className={styles.cancleButton}>Cancle</button>
      </div>
      <div className={styles.category}>
        <h1>Card</h1>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <p>Personal card</p>
          </div>
          <div className={styles.cardBody}>
            <div>Name: Retardo</div>
            <div>Position: Handyman</div>
            <div>Age: 27 years</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
