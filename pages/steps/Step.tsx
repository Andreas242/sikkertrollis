import React, { useEffect, useMemo } from "react";
import { useState } from "react";
import styles from "../../styles/Icons.module.css";

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

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
    if (!completedSteps.includes(step)) {
      setCompletedSteps((oldArray) => [...oldArray, step]);
    }
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
                    checked={selectedOption === option.id.toString()}
                    onChange={handleOptionChange}
                  />
                  <span className={styles.stepOptions}>{option.label}</span>
                  </label>
                </div>
              ))}
            </div>
            {!selectedOption && <div className={styles.emptyrecommendation}></div>}
            {selectedOption && <div className={styles.recommendation}>
              <h3>Rekommendasjon</h3>
              {selectedOption === "1" && <div>Ni har en del at jobbe med fremover</div>}
              {selectedOption === "2"  && <div>Ni har en del at jobbe med fremover</div>}
              {selectedOption === "3" && <div>Bra at ni startet med tiltak, men det finnes mer at jobbe med</div>}
              {selectedOption >= "4" && <div>Suverent! Ni er vel forberedde for dette trussel</div>}
              {selectedOption === "5" && <div></div>}
              <div>
                Poeng: {selectedOption}
              </div>
            </div>
            }
          </div>
        </div>
      }
    </div>
  );
};

export default Step;
