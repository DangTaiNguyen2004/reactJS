import React from 'react'
import DtnuseState from './components/DtnuseState'
import DtnuseEffect from './components/DtnuseEffect'
import DtnuseContext from './components/DtnuseContext'
import './App.css'

export default function App() {
  return (
    <div className='container border mt-3'>
      <h1 className='text-center'>Dang Tai Nguyen - Hook</h1>
      <hr/>
      <DtnuseState/>
      <hr/>
      <DtnuseEffect/>
      <hr/>
      <DtnuseContext/>
    </div>
  )
}
