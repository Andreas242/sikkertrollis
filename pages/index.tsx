
import styles from '@/styles/Home.module.css'
import Wizard from './wizard'
import { useState } from 'react'
import Head from 'next/head'
import { useReducer, createContext } from 'react'

export const WizardContext = createContext({}) as React.Context<any>;

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
