import React, { useEffect, useContext, ChangeEvent } from "react";
import styles from "../styles/Icons.module.css";
import { CategoryContext } from "../pages/index";
import { Anbefaling } from "@/components/Anbefaling";

interface Option {
  id: number;
  label: string;
}

interface QuestionProps {
  content: {
    HEADING: string;
    RESPONSES: Option[];
    id: number;
  };
  step: number;
  handleNextQuestion: any;
}

const Question: React.FC<QuestionProps> = ({
  content,
  step,
  handleNextQuestion,
}) => {
  const { state, dispatch } = useContext(CategoryContext);

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      handleNextQuestion(); // call the function on Enter or Space key press
    }
    dispatch({ type: 'UPDATE_STEP', step, question: content.id, response: event.target.value });
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
                  checked={state[step]?.[content.id] === option.id.toString()}
                  onChange={handleOptionChange}
                  onKeyDown={handleOptionChange} 
                />
                <span className={styles.stepOptions}>{option.label}</span>
              </label>
            </div>
          ))}
        </div>
        {state[step]?.[content.id] ?
  <Anbefaling selectedOption={state[step]?.[content.id]} />
  :
  <div className={styles.emptyrecommendation}></div>
}
      </div>
    </div>
  );
};

export default Question;
