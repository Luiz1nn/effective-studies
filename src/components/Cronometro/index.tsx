import { useState } from 'react'
import { timeToSeconds } from '../../common/utils/time'
import { ITask } from '../../types/task'
import Button from '../Button'
import style from './Cronometro.module.scss'
import Relogio from './Relogio'

interface IProps {
  selected: ITask | undefined
}

export default function Cronometro ({ selected } : IProps) {
  const [ time, setTime ] = useState<number>()

  if (selected?.time) {
    setTime(timeToSeconds(selected?.time))
  }

  return (
    <div className={ style.cronometro }>
      <p className={ style.title }>Escolha um card e inicie o Cronômetro</p>
      Tempo: { time }
      <div className={ style.relogio_wrapper }>
        <Relogio/>
      </div>
      <Button>
        Começar!
      </Button>
    </div>
  )
}
