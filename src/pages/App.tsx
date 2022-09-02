import Form from '../components/Form'
import List from '../components/List'
import style from './App.module.scss'
import Cronometro from '../components/Cronometro'
import { useState } from 'react'
import { ITask } from '../types/task'

function App () {
  const [ tasks, setTasks ] = useState<ITask[]>([])
  const [ selected, setSelected ] = useState<ITask>()

  function selectTask (selectedTask: ITask): void {
    setSelected(selectedTask)
    setTasks(tasks => tasks.map(task => ({
      ...task,
      selected: task.id === selectedTask.id ? true : false
    })))
  }

  return (
    <div className={ style.app }>
      <Form setTasks={ setTasks } />
      <List
        tasks={ tasks }
        selectTask={ selectTask }
      />
      <Cronometro selected={ selected }/>
    </div>
  )
}

export default App
