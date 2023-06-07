
import Wizard from './wizard'
import { Dispatch } from 'react'
import Head from 'next/head'
import { useReducer, createContext } from 'react'

interface WizardState {
  [step: string]: string; 
}
type WizardAction = {
  type: string;
  step: number;
  response: string;
}

const initialState: WizardState = {};

export const WizardContext = createContext<{
  state: WizardState;
  dispatch: Dispatch<WizardAction>;
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
        <WizardContext.Provider value={{ state, dispatch }}>
        <Wizard/>
        </WizardContext.Provider>
      </div>
    </>
  )
}
