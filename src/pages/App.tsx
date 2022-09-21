import Form from '../components/Form'
import List from '../components/List'
import style from './App.module.scss'
import Cronometro from '../components/Cronometro'
import { useState } from 'react'
import { ITask } from '../types/task'

function App() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [selected, setSelected] = useState<ITask>()

  function selectTask(selectedTask: ITask): void {
    setSelected(selectedTask)
    setTasks(tasks => tasks.map(task => ({
      ...task,
      selected: task.id === selectedTask.id ? true : false
    })))
  }

  function finishTask() {
    if (selected) {
      setSelected(undefined)
      setTasks(tasks => tasks.map(task => {
        if (task.id === selected.id) {
          return {
            ...task,
            selected: false,
            completed: true
          }
        }
        return task
      }))
    }
  }

  return (
    <div className={style.app}>
      <Form setTasks={setTasks} />
      <List
        tasks={tasks}
        selectTask={selectTask}
      />
      <Cronometro selected={selected} finishTask={finishTask} />
    </div>
  )
}

export default App
