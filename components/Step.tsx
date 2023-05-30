import StepForm from './StepForm';
import Feedback from './Feedback';

const Step = ({ step, onNext }) => {
  const handleSubmit = (data) => {
    // Handle form data and move to the next step
    onNext();
  };

  return (
    <div>
      <StepForm onSubmit={handleSubmit} />
      <Feedback input={/* Pass the user input */} />
    </div>
  );
};

export default Step;