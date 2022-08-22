import style from './Relogio.module.scss'

export default function Relogio () {
  return (
    <>
      <span className={style.relogio_number}>0</span>
      <span className={style.relogio_number}>0</span>
      <span className={style.relogio_div}>:</span>
      <span className={style.relogio_number}>0</span>
      <span className={style.relogio_number}>0</span>
    </>
  )
}