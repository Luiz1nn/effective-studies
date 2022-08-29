import { ITask } from '../../../types/task'
import style from '../List.module.scss'

interface IProps extends ITask {
  selectTask: (selectedTask: ITask) => void
}

export default function Item ({ id, task, time, selected, completed, selectTask }: IProps) {
  return (
    <li 
      className={ style.item }
      onClick={ () => selectTask({ id, task, time, selected, completed}) }
    >
      <h3>{ task }</h3>
      <span>{ time }</span>
    </li>
  )
}
