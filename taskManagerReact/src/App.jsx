import React from 'react'
import Taskform from './components/Taskform'
import './App.css'


const App = () => {
  return (
    <div className='app'>
      <Taskform />
      <main className='app_main'>
        <section className='task_column'>Section 1</section>
        <section className='task_column'>Section 2</section>
        <section className='task_column'>Section 3</section>
      </main>
    </div>
  )
}

export default App
