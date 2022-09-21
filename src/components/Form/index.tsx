import React, { useState } from 'react'
import { ITask } from '../../types/task'
import Button from '../Button'
import style from './Form.module.scss'
import { v4 as uuidv4 } from 'uuid'

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

function Form({ setTasks }: Props) {
  const [task, setTask] = useState("")
  const [time, setTime] = useState("00:00")

  function addTask(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    setTasks(tasks =>
      [
        ...tasks,
        {
          task,
          time,
          selected: false,
          completed: false,
          id: uuidv4()
        }
      ]
    )
    setTask("")
    setTime("00:00")
  }

  return (
    <form className={style.new_task} onSubmit={addTask}>
      <div className={style.input_container}>
        <label htmlFor="tarefa">Adicione uma tarefa</label>
        <input
          type="text"
          name="tarefa"
          value={task}
          onChange={event => setTask(event.target.value)}
          id="tarefa"
          placeholder="O que você quer estudar ?"
          required
        />
      </div>
      <div className={style.input_container}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          value={time}
          onChange={event => setTime(event.target.value)}
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button type="submit">
        Adicionar
      </Button>
    </form>
  )
}

export default Form