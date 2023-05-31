
import styles from '@/styles/Home.module.css'
import Wizard from './wizard'
import { useState } from 'react'



export default function Home() {

  const [score, setScore] = useState(0);
  const [oldStates, setOldStates] = useState([0, 0, 0, 0]); // set this to remeber what the user has chosen on every step
  return (
    <>
      <div className={'wrapper'}>
        <Wizard/>
      </div>
    </>
  )
}
