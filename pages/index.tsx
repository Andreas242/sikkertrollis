import CategoryWizard from './CategoryWizard'
import { Dispatch } from 'react'
import Head from 'next/head'
import { useReducer, createContext } from 'react'

interface CategoryState {
  [step: string]: string; 
}
type CategoryAction = {
  type: string;
  step: number;
  response: string;
}

const initialState: CategoryState = {};

export const CategoryContext = createContext<{
  state: CategoryState;
  dispatch: Dispatch<CategoryAction>;
}>({
  state: initialState, 
  dispatch: () => null
});

const wizardReducer = (state: any, action: { type: any; step: any; response: any }) => {
  switch (action.type) {
    case "UPDATE_STEP":
      return { ...state, [action.step]: action.response };
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
