// components/Wizard.tsx
import { ReactElement, useState, useContext } from "react";
import Step from "./steps/Step";
import FinalStep from "./steps/FinalStep";
import { FaUserSecret, FaShieldVirus, FaLock, FaCamera } from "react-icons/fa";
import styles from "../styles/Icons.module.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import STEPMOCK from "@/MOCKDATA/STEPMOCK";
import { WizardContext } from "./index";

const Wizard = (props: any) => {
  const totalSteps = STEPMOCK.length;
  const [step, setStep] = useState(1);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const stepIcons: Record<number, { icon: ReactElement; title: string }> = {
    1: { icon: <FaUserSecret size={32} />, title: "Oversikt" },
    2: { icon: <FaShieldVirus size={32} />, title: "Sikker konfigurasjon av nettverk" },
    3: { icon: <FaLock size={32} />, title: "Sikker konfigurasjon av servere og klienter" },
    4: { icon: <FaCamera size={32} />, title: "Hendelsesberedskap" },
  };
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
  
  const handleStepCompletion = () => {
    if (step === totalSteps) {
      setIsDialogOpen(true);
      setStep(1);
    } else {
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
          <span className={styles.title1}>C y b e r s j e k k</span>
        </h1>
      </div>
      <div className="steps">
        {isDialogOpen && <div className={styles.backdrop}></div>}
        {isDialogOpen && (
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
            <button className={styles.button62} onClick={closeDialog}>
              Lukk
            </button>
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
                className={`${styles["step-icon"]} ${
                  isActive ? styles.active : ""
                } ${isCompleted ? styles.completed : ""}`}
                onClick={() => setStep(numKey)}
                title={stepIcons[numKey].title} // Add the title attribute here
              >
                {stepIcons[numKey].icon}
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
                {step === totalSteps  && <span>Avslutt</span>}
                {step !== totalSteps  && <span>Neste</span>}              
            </button>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <p className={styles.footerLeadText}>
            Denne siden er laget for å hjelpe norske virksomheter med å være
            oppmerksomme på trusler og hvordan man best kan tilpasse sin
            sikkerhetsstrategi for å motvirke dem.
          </p>
          <div className={styles.footerContent}>
            <div className={styles.footerLogoContainer}>
              <a href="http://www.nsm.no">
                <img src="nsm.png" alt="NSM" width="100px" />
              </a>
            </div>

            <div className={styles.footerLinks}>
              <a href="https://nsm.no/getfile.php/136606-1625054194/NSM/Filer/Bildegalleri/Bilder%20til%20grunnprinsipper/Vedlegg-%20Mal%20for%20risikovurdring%20IKT-systemer.xlsx">
                NSM Risikovurdering av IKT-systemer
              </a>
              <a href="https://nettvett.no/sikkerhetssjekk-for-virksomheter/">
                Nettvett.no
              </a>
              <a href="https://www.msb.se/sv/amnesomraden/informationssakerhet-cybersakerhet-och-sakra-kommunikationer/systematiskt-informationssakerhetsarbete/infosakkollen/">
                Sveriges infosäkkollen
              </a>
              <a href="https://cybermaturity.dnv.com/">
                DNV og Gjensidige sin Modenhetsvurdering
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Wizard;
