// components/Wizard.tsx
import { ReactElement, useState } from "react";
import Step1 from "./steps/Step1";
import FinalStep from "./steps/FinalStep";
import { FaUserSecret, FaShieldVirus, FaLock, FaCamera } from "react-icons/fa";
import styles from '../styles/Icons.module.css';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import STEPMOCK from "@/MOCKDATA/STEPMOCK";

function Wizard() {
    const totalSteps = STEPMOCK.length;
    const [step, setStep] = useState(1);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [completedSteps, setCompletedSteps] = useState<number[]>([]);
    const [oldStates, setOldStates] = useState([0, 0, 0, 0]); // set this to remeber what the user has chosen on every step
    const stepIcons: Record<number, ReactElement> = {
        1: <FaUserSecret size={32} />,
        2: <FaShieldVirus size={32} />,
        3: <FaLock size={32} />,
        4: <FaCamera size={32} />,
    };


    const steps = [
        {
            title: `Step ${step}`,
            component: <Step1 setCompletedSteps={setCompletedSteps}
                completedSteps={completedSteps}
                content={STEPMOCK[step - 1]}
                step={step} />,
        },
        {
            title: "Final Step",
            component: <FinalStep />,
        },
    ];
    const isStepCompleted = (stepNumber: any) => completedSteps.includes(stepNumber);


    const handleStepCompletion = () => {
        if (step === totalSteps) {
            // Open the dialog when it's the last step
            setIsDialogOpen(true);
        } else {
            // Otherwise, proceed to the next step
            setStep(step + 1);
        }
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    return (
        <div>
                      
            <div className={styles.hero}>
                <h1>
                    <span className={styles.title1}>F O R Sikker Virksomhet Automatisert Respons</span>
                    </h1>
                    </div>


        <div className="steps">
            {isDialogOpen && (
                <div className={styles.backdrop}></div>
            )}
        {isDialogOpen && (
                <dialog open>
                    <h2>Gratulerer</h2>
                    <p>Du har tatt deg igjennom sikkerhetskollen og har fått: X poeng. 
                    </p>
                    <p>Ditt beste område er: </p>
                    <p>Ditt område med mest forbedringspotensiale er: </p>
                    <button onClick={closeDialog}>Close</button>
                </dialog>
            )}
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
                <div className={styles.stepContentInner}>
                <TransitionGroup component={null}>
                    <CSSTransition
                        key={step}
                        classNames={{
                            enter: styles["step-enter"],
                            enterActive: styles["step-enter-active"],
                            exit: styles["step-exit"],
                            exitActive: styles["step-exit-active"],
                        }}
                        timeout={500}>
                        {steps[0].component}
                    </CSSTransition>
                </TransitionGroup>
                </div>
                <button className={styles.button61} role="button" disabled={!isStepCompleted(step)}
                    onClick={handleStepCompletion}>Neste</button>
            </div>
 {/**           <div>
                {completedSteps},{step}, {isStepCompleted(step).toString()}
            </div>
*/}
        </div>
        <footer className={styles.footer}>
    <div className={styles.footerContainer}>
        
            <p className={styles.footerLeadText}>Denne siden er laget for å hjelpe norske bedrifter med å være oppmerksomme på trusler og hvordan man best kan tilpasse sin sikkerhetsstrategi for å motvirke dem.</p>
            <div className={styles.footerContent}>
      
        <div className={styles.footerLogoContainer}>
            <img src="nsm.png" alt="NSM" width="100px"/>
        </div>                   


        <div className={styles.footerLinks}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
            <a href="#">Link 4</a>
        </div>
        </div>

    </div>
</footer>
        </div>
    );
}

export default Wizard;
