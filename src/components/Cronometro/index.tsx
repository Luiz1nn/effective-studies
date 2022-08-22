import Button from "../Button"
import style from './Cronometro.module.scss'
import Relogio from "./Relogio"

export default function Cronometro () {
  return (
    <div className={style.cronometro}>
      <p className={style.title}>Escolha um card e inicie o Cronômetro</p>
      <div className={style.relogio_wrapper}>
        <Relogio/>
      </div>
      <Button>
        Começar!
      </Button>
    </div>
  )
}
