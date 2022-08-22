import style from './List.module.scss'
import Item from './Item'

function List () {
  const tarefas = [
    {
      task: 'React',
      time: '02:00:00'
    },
    {
      task: 'Javascript',
      time: '01:00:00'
    },
    {
      task: 'Typescript',
      time: '03:00:00'
    }
  ]

  return (
    <aside className={style.list_tasks}>
      <h2>Estudos do dia</h2>
      <ul>
        {
          tarefas.map((item, index) => (
            <Item
              key={ index }
              { ...item }
            />            
          ))
        }
      </ul>
    </aside>
  )
}

export default List