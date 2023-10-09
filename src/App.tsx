import { useCounter } from './hooks/useCounter'
import './App.css'
import * as functionsList from './funtions'
import {useEffect} from 'react'
import React from 'react'

function App() {
  const { count, increment, sumParam } = useCounter()
  useEffect(()=>{functionsList.sumOnload(sumParam); console.log(sumParam, count)},[sumParam,count])
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React!</p>
        <p>
          <button
            type="button"
            onClick={()=>functionsList.alertFun("Ibex")}
          >alert click
            
          </button>

          <button
            type="button"
            onClick={()=>increment(10)}
          >
  count is: {count}
          </button>
        </p>
      
      
        <h1>The exported Sum function {functionsList.sum(5)}</h1>
      {count>30&&"greater than 30"}
      </header>
    </div>
  )
}

export default App
