import React from 'react'
import ReactDOM from 'react-dom'
import GroovyComponent from './js/GroovyComponent'
import Button from './Button'

function App() {
  return (
    <div style={{ background: 'skyblue', padding: '20px' }}>
      <Button style={{ marginBottom: '20px' }}>This is a button rendered in React</Button>
      <GroovyComponent/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))
