// components/Wizard.tsx
import { ReactElement, useState, useContext, useCallback } from "react";
import Step from "./steps/Category";
import FinalStep from "./steps/FinalStep";
import { FaUserSecret, FaShieldVirus, FaLock, FaCamera } from "react-icons/fa";
import styles from "../styles/Icons.module.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import STEPMOCK from "@/MOCKDATA/STEPMOCK";
import { WizardContext } from "./index";
import { Dialog } from "@/components/Dialog";
import { Footer } from "@/components/Footer";
import { Categoryicons } from "@/components/Categoryicons";


const stepIcons: Record<number, { icon: ReactElement; title: string }> = {
    1: { icon: <FaUserSecret size={32} />, title: "Oversikt" },
    2: { icon: <FaShieldVirus size={32} />, title: "Sikker konfigurasjon av nettverk" },
    3: { icon: <FaLock size={32} />, title: "Sikker konfigurasjon av servere og klienter" },
    4: { icon: <FaCamera size={32} />, title: "Hendelsesberedskap" },
};

const Wizard = () => {
    const totalSteps = STEPMOCK.length;
    const [step, setStep] = useState(1);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [completedSteps, setCompletedSteps] = useState<number[]>([]);
    const { state } = useContext(WizardContext);
    const steps = [
        {
            title: `Step ${step}`,
            component: (
                <Step
                    setCompletedSteps={setCompletedSteps}
                    completedSteps={completedSteps}
                    content={STEPMOCK[step - 1]}
                    step={step}
                />
            ),
        },
        {
            title: "Final Step",
            component: <FinalStep />,
        },
    ];

    const handleStepCompletion = useCallback(() => {
        if (step === totalSteps) {
            setIsDialogOpen(true);
            setStep(1);
        } else {
            setStep(step + 1);
        }
    }, [step, totalSteps]);

    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    return (
        <div>
            <div className={styles.hero}>
                <h1>
                    <span className={styles.title1}>C y b e r s j e k k</span>
                </h1>
            </div>
            <div className="steps">
                {isDialogOpen && <div className={styles.backdrop}></div>}
                {isDialogOpen && (
                    <Dialog closeDialog={closeDialog} />
                )}
                <Categoryicons step={step} stepIcons={stepIcons} completedSteps={completedSteps} setStep={setStep} />
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
                                timeout={500}
                            >
                                {steps[0].component}
                            </CSSTransition>
                        </TransitionGroup>
                    </div>
                    <div className={styles.buttonArea}>
                        <button
                            className={styles.button61}
                            role="button"
                            disabled={!state[step]}
                            onClick={handleStepCompletion}
                        >
                            <span>{step === totalSteps ? 'Avslutt' : 'Neste'}</span>
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Wizard;
