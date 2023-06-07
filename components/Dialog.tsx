import styles from "../styles/Icons.module.css";

export const Dialog = (props: any) => (
    <dialog open>
    <h2>Gratulerer</h2>
    <p>
    Du har kommet gjennom sikkerhetskontrollen og har fått: 10 poeng.
    </p>
    <p>
      Ditt beste område er:{" "}
      <span className={styles.areasofinterest}>Sikker konfigurasjon av nettverk</span>
    </p>
    <p>
    Ditt område med størst potensial for forbedring er:{" "}
      <span className={styles.areasofinterest}>Sikker konfigurasjon av servere og klienter</span>
    </p>
    <p>
    Du kan lese mer om hvordan du kan forberede virksomheten din 
      <a href="https://nsm.no"> -her-</a>
    </p>
    <button className={styles.button62} onClick={props.closeDialog}>
      Lukk
    </button>
  </dialog>
)

