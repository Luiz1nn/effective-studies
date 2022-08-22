import React, { ReactNode } from 'react'
import style from './Button.module.scss'

class Button extends React.Component<{ children?: ReactNode }> {
  render () {
    return (
      <button className={style.button}>
        {this.props.children}
      </button>
    )
  }
}

export default Button