import styles from "../styles/Icons.module.css";

export const Anbefaling = (props: any) => (
    <div className={styles.recommendation}>
        <h3>Anbefaling</h3>
        {props.selectedOption === "1" && <div>Dere har en del å jobbe med fremover</div>}
        {props.selectedOption === "2" && <div>Dere har en del å jobbe med fremover</div>}
        {props.selectedOption === "3" && <div>Bra at dere har startet med tiltak, men det er mer å jobbe med</div>}
        {props.selectedOption >= "4" && <div>Suverent! Dere er godt forberedt på denne trusselen</div>}
        {props.selectedOption === "5" && <div></div>}
        <div>
            Poeng: {props.selectedOption}
        </div>
    </div>
)