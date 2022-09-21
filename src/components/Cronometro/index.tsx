import { useEffect, useState } from 'react'
import { timeToSeconds } from '../../common/utils/time'
import { ITask } from '../../types/task'
import Button from '../Button'
import style from './Cronometro.module.scss'
import Relogio from './Relogio'

interface Props {
  selected: ITask | undefined
  finishTask: () => void
}

export default function Cronometro({ selected, finishTask }: Props) {
  const [time, setTime] = useState<number>()

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time))
    }
  }, [selected])

  function regressive(count: number = 0) {
    setTimeout(() => {
      if (count > 0) {
        setTime(count - 1)
        return regressive(count - 1)
      }
      finishTask()
    }, 1000)
  }

  return (
    <div className={style.cronometro}>
      <p className={style.title}>Escolha um card e inicie o Cronômetro</p>
      <div className={style.relogio_wrapper}>
        <Relogio time={time} />
      </div>
      <Button onClick={() => regressive(time)}>
        Começar!
      </Button>
    </div>
  )
}
