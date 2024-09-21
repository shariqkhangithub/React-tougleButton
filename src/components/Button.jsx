import React from 'react'
import { useState } from 'react'

function Button() {
  const [count, setCount] = useState(1)
  const [advice, setadvice] = useState('')


  function nextHandler() {
    setCount(count + 1)


  }

  function previousHandler() {
    setCount(count - 1)

  }

  return (
    <div style={{ backgroundColor: "#e6e6e6", height: '250px', width: '600px', }}>
      <div style={{ width: '100%', height: '35%', display: 'flex', justifyContent: 'center', alignItems: 'center', justifyContent: 'space-evenly' }}>
        <div style={{ backgroundColor: count === 1 ? '#126E82' : 'white', color: count === 1 ? 'white' : '#126E82', height: '50px', width: '50px', borderRadius: '50%', textAlign: 'center', alignContent: 'center', fontSize: '20px' }}> 1</div>

        <div style={{ backgroundColor: count === 2 ? '#126E82' : 'white', color: count === 2 ? 'white' : '#126E82', height: '50px', width: '50px', borderRadius: '50%', textAlign: 'center', alignContent: 'center', fontSize: '20px' }}>2</div>
      
        <div style={{ backgroundColor: count === 3 ? '#126E82' : 'white', color: count === 3 ? 'white' : '#126E82', height: '50px', width: '50px', borderRadius: '50%', textAlign: 'center', alignContent: 'center', fontSize: '20px' }}>3</div>
      </div>
      <h3>step:<span>{count} </span>{count == 1 ? "Learn React" : ''}{count == 2 ? "Explore its fundamental" : ''}{count == 3 ? "Invest your income" : ''}</h3>
      <div style={{ display: 'flex', width: '100%', height: '35%', justifyContent: 'space-around', alignItems: 'center' }}>
        <div><button onClick={previousHandler} style={{ backgroundColor: '#126E82', color: 'white' }}>Previous</button></div>
        <div><button onClick={nextHandler} style={{ backgroundColor: '#126E82', color: 'white' }}>Next</button></div>
      </div>

    </div>
  )
}
export default Button