// components/Wizard.tsx
import { ReactElement, useState } from "react";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import FinalStep from "./steps/FinalStep";
import { FaJsfiddle, FaJediOrder, FaHive, FaAddressBook } from "react-icons/fa";
import styles from '../styles/Icons.module.css';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import STEPMOCK from "@/MOCKDATA/STEPMOCK";

function Wizard() {
    const [step, setStep] = useState(1);
    const [completedSteps, setCompletedSteps] = useState([]);
    const [oldStates, setOldStates] = useState([0, 0, 0, 0]); // set this to remeber what the user has chosen on every step
   const stepIcons: Record<number, ReactElement> = {
  1: <FaJsfiddle size={32} />,
  2: <FaJediOrder size={32} />,
  3: <FaHive size={32} />,
  4: <FaAddressBook size={32} />,
};


    const steps = [
        {
            title: `Step ${step}`,
            component: <Step1 setCompletedSteps={setCompletedSteps}
                completedSteps={completedSteps}
                content={STEPMOCK[step-1]}
                step={step} />,               
        },
        {
            title: "Final Step",
            component: <FinalStep />,
        },
    ];
    const isStepCompleted = (stepNumber: any) => completedSteps.includes(stepNumber);


    const handleStepCompletion = () => {
        // setCompletedSteps([...completedSteps, step]);
        setStep(step + 1);
    };

    return (
        <div className="steps">
            <div className={styles.stepsContainer}>
                {Object.keys(stepIcons).map((key) => {
                    const numKey = parseInt(key, 10);
                    const isActive = numKey === step;
                    const isCompleted = completedSteps.includes(numKey);
                    return (

                        <div
                            key={numKey}
                            className={`${styles['step-icon']} ${isActive ? styles.active : ""} ${isCompleted ? styles.completed : ""
                                }`}
                            onClick={() => setStep(numKey)}
                        >
                            {stepIcons[numKey]}
                        </div>

                    );
                })}
            </div>
            <div className={styles.stepContent}>
                <TransitionGroup component={null}>
                    <CSSTransition
                        key={step}
                        classNames={{
                            enter: styles["step-enter"],
                            enterActive: styles["step-enter-active"],
                            exit: styles["step-exit"],
                            exitActive: styles["step-exit-active"],
                        }}
                        timeout={300}>
                       {/** {steps[step - 1].component}  */}
                       {steps[0].component}
                    </CSSTransition>
                </TransitionGroup>
                {step < steps.length && (
                    <button
                        disabled={!isStepCompleted(step.toString())}
                        onClick={handleStepCompletion}
                    >
                        Next
                    </button>
                )}
            </div>
            <div>
                {completedSteps},{step}, {isStepCompleted(step).toString()}
            </div>
        </div>
    );
}

export default Wizard;
