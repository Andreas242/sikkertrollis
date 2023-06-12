// components/Wizard.tsx
import { ReactElement, useState, useContext, useCallback } from "react";
import Category from "@/components/Category";
import FinalStep from "./FinalStep";
import { FaUserSecret, FaShieldVirus, FaLock, FaCamera } from "react-icons/fa";
import styles from "../styles/Icons.module.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import STEPMOCK from "@/MOCKDATA/STEPMOCK";
import { CategoryContext } from "./index";
import { Dialog } from "@/components/Dialog";
import { Footer } from "@/components/Footer";
import { Categoryicons } from "@/components/Categoryicons";
import { IconBaseProps, IconType } from "react-icons";


interface IconComponents {
    [key: string]: IconType;
}

interface StepIcons {
    [key: number]: {
        icon: React.ReactElement<IconBaseProps>;
        title: string;
    };
}

const iconComponents: IconComponents = {
    FaUserSecret: FaUserSecret,
    FaShieldVirus: FaShieldVirus,
    FaLock: FaLock,
    FaCamera: FaCamera,
    // TODO: ADD THE REST
};



const stepIcons: StepIcons = STEPMOCK.reduce((icons, step, index) => {
    const IconComponent = iconComponents[step.ICONNAME];
    icons[index + 1] = {
        icon: <IconComponent size={32} />,
        title: step.NAME,
    };
    return icons;
}, {} as StepIcons);




const CategoryWizard = () => {
    const totalSteps = STEPMOCK.length;
    const [step, setStep] = useState(1);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [completedSteps, setCompletedSteps] = useState<number[]>([]);
    const [question, setQuestion] = useState(1);
    const { state } = useContext(CategoryContext);
    const [questionIndex, setQuestionIndex] = useState(0);
    const { dispatch } = useContext(CategoryContext);
    const steps = [
        {
            title: `Step ${step}`,
            component: (
                <Category
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
        const currentCategory = STEPMOCK[step - 1];

        if (questionIndex < currentCategory.CATEGORYQUESTIONS.length - 1) {
            // If we haven't reached the last question in the current category, advance to the next question.
            setQuestionIndex(questionIndex + 1);
        } else if (step < totalSteps) {
            dispatch({ type: 'CLEAR_STEP', step });  // Clear the previous step
            setStep(step + 1);
            setQuestionIndex(0);
        } else {
            // If we have reached the last question in the last category, open the dialog and reset the step and question indices.
            setIsDialogOpen(true);
            setStep(1);
            setQuestionIndex(0);
        }
    }, [step, questionIndex, totalSteps]);

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
 {/*                    <div className={styles.buttonArea}>
                        <button
                            className={styles.button61}
                            role="button"
                            disabled={!state[step]}
                            onClick={handleStepCompletion}
                        >
                            <span>{step === totalSteps ? 'Avslutt' : 'Neste'}</span>
                        </button>
                    </div> */}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CategoryWizard;
