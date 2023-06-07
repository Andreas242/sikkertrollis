import React, { useEffect, useContext, ChangeEvent } from "react";
import styles from "../../styles/Icons.module.css";
import { WizardContext } from "../index";
import { Anbefaling } from "@/components/Anbefaling";

interface Option {
  id: number;
  label: string;
}

interface StepProps {
  // setCompletedSteps is not implemented - needs to show different icons - use context instead
  setCompletedSteps: React.Dispatch<React.SetStateAction<number[]>>;
  completedSteps: number[];
  content: {
    HEADING: string;
    RESPONSES: Option[];
  };
  step: number;
}

const Step: React.FC<StepProps> = ({
  content,
  step,
}) => {
  const { state, dispatch } = useContext(WizardContext);

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'UPDATE_STEP', step, response: event.target.value });
  };

  return (
    content &&
    <div key={step}>
      <h2>{content.HEADING}</h2>
      <div className={styles.responseContainer}>
        <div className={styles.responseContent}>
          {content.RESPONSES.map((option) => (
            <div key={option.id} className={styles.responseOption}>
              <label>
                <input
                  type="radio"
                  value={option.id}
                  checked={state[step] === option.id.toString()}
                  onChange={handleOptionChange}
                />
                <span className={styles.stepOptions}>{option.label}</span>
              </label>
            </div>
          ))}
        </div>
        {state[step] ?
          <Anbefaling selectedOption={state[step]} />
          :
          <div className={styles.emptyrecommendation}></div>
        }
      </div>
    </div>
  );
};

export default Step;
