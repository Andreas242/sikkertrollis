
import styles from '@/styles/Home.module.css'
import Wizard from './wizard'

const steps = [{ id: 'step1', label: 'Step 1', icon: 'icon1' },
{ id: 'step2', label: 'Step 2', icon: 'icon2' },
// Add dynamic steps 
{ id: 'final', label: 'Final Step', icon: 'iconFinal' },
];

export default function Home() {
  return (
    <>
      <div className={'wrapper'}>
        <Wizard steps={steps} />
      </div>
    </>
  )
}
