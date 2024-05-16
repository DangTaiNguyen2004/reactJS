import React, { useContext } from 'react'
import { ThemeContext } from './DtnuseContext'

export default function DtnuseContext2() {
    const theme = useContext(ThemeContext);
  return (
    <div className={theme + 'm-3'} >
      <h2>DtnuseContext2</h2>
      <p>
        <b>2210900052</b>
        <b>Dang Tai Nguyen</b>
        <i>k22cnt4</i>

      </p>
    </div>
  )
}
