import Form from '../components/Form'
import List from '../components/List'
import style from './App.module.scss'
import Cronometro from '../components/Cronometro'
import { useState } from 'react'
import { ITask } from '../types/task'

function App () {
  const [tasks, setTasks] = useState<ITask[]>([])

  return (
    <div className={style.app}>
      <Form setTasks={ setTasks } />
      <List tasks={ tasks } />
      <Cronometro/>
    </div>
  )
}

export default App
