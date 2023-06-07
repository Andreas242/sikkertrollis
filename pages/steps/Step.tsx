import React, { useEffect, useMemo, useContext } from "react";
import { useState } from "react";
import styles from "../../styles/Icons.module.css";
import { WizardContext } from "../index";
import { Anbefaling } from "@/components/Anbefaling";

interface Option {
  id: number;
  label: string;
}

interface StepProps {
  setCompletedSteps: React.Dispatch<React.SetStateAction<number[]>>;
  completedSteps: number[];
  content: {
    HEADING: string;
    RESPONSES: Option[];
  };
  step: number;
}

const Step: React.FC<StepProps> = ({
  setCompletedSteps,
  completedSteps,
  content,
  step,
}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const options = useMemo(() => content?.RESPONSES.map((element) => element), [
    content?.RESPONSES,
  ]);

  const { state, dispatch } = useContext(WizardContext);

  const handleOptionChange = (event: { target: { value: any; }; }) => {
    dispatch({ type: 'UPDATE_STEP', step, response: event.target.value });
  };

  return (
    <div>
      {content &&
        <div key={step}>
          <h2>{content.HEADING}</h2>
          <div className={styles.responseContainer}>
            <div className={styles.responseContent}>
              {options.map((option) => (
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
            {!selectedOption && <div className={styles.emptyrecommendation}></div>}
            {selectedOption &&
              <Anbefaling />
            }
          </div>
        </div>
      }
    </div>
  );
};

export default Step;
