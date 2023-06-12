import CategoryWizard from './CategoryWizard'
import { ChangeEvent, Dispatch } from 'react'
import Head from 'next/head'
import { useReducer, createContext } from 'react'

interface CategoryState {
  [step: number]: {
    [question: number]: string;
  };
}

type CategoryAction = {
  type: string;
  step: number;
  question?: number;
  response?: string;
}


const initialState: CategoryState = {};

export const CategoryContext = createContext<{
  state: CategoryState;
  dispatch: Dispatch<CategoryAction>;
}>({
  state: initialState, 
  dispatch: () => null
});

// Update the wizardReducer function.
const wizardReducer = (state: CategoryState, action: CategoryAction) => {
  switch (action.type) {
    case "UPDATE_STEP":
      return {
        ...state,
        [action.step]: {
          ...(state[action.step] || {}),
          [action.question]: action.response,
        },
      };
    case "CLEAR_STEP":
      const newState = {...state};
      delete newState[action.step];
      return newState;
    default:
      throw new Error();
  }
};



export default function Home() {
  const [state, dispatch] = useReducer(wizardReducer, {});
  return (
    <>
    <Head>
      <title>CyberSjekk</title>
    </Head>
      <div className={'wrapper'}>
        <CategoryContext.Provider value={{ state, dispatch }}>
        <CategoryWizard/>
        </CategoryContext.Provider>
      </div>
    </>
  )
}
