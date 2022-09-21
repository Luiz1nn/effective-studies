import { ITask } from '../../../types/task'
import style from './Item.module.scss'

interface IProps extends ITask {
  selectTask: (selectedTask: ITask) => void
}

export default function Item({ id, task, time, selected, completed, selectTask }: IProps) {
  return (
    <li
      className={`${style.item} ${selected ? style.item_selected : ''} ${completed ? style.item_completed : ''}`}
      onClick={() => !completed && selectTask({ id, task, time, selected, completed })}
    >
      <h3>{task}</h3>
      <span>{time}</span>
      {completed && <span className={style.completed} aria-label="tarefa completada"></span>}
    </li>
  )
}
