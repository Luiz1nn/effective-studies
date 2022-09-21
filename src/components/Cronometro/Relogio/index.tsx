import style from './Relogio.module.scss'

interface Props {
  time: number | undefined
}

export default function Relogio({ time = 0 }: Props) {
  const minutes = Math.floor(time / 60)
  const seconds = time % 60
  const [minutesDezena, minutesUnidade] = String(minutes).padStart(2, '0')
  const [secondsDezena, secondsUnidade] = String(seconds).padStart(2, '0')

  return (
    <>
      <span className={style.relogio_number}>{minutesDezena}</span>
      <span className={style.relogio_number}>{minutesUnidade}</span>
      <span className={style.relogio_division}>:</span>
      <span className={style.relogio_number}>{secondsDezena}</span>
      <span className={style.relogio_number}>{secondsUnidade}</span>
    </>
  )
}