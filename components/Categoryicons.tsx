import styles from "../styles/Icons.module.css";

export const Categoryicons = (props : any) => (

<div className={styles.stepsContainer}>
{Object.keys(props.stepIcons).map((key) => {
  const numKey = parseInt(key, 10);
  const isActive = numKey === props.step;
  const isCompleted = props.completedSteps.includes(numKey);
  return (
    <div
      key={numKey}
      className={`${styles["step-icon"]} ${
        isActive ? styles.active : ""
      } ${isCompleted ? styles.completed : ""}`}
      onClick={() => props.setStep(numKey)}
      title={props.stepIcons[numKey].title} // Add the title attribute here
    >
      {props.stepIcons[numKey].icon}
    </div>
  );
})}
</div>
)