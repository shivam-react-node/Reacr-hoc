import React from 'react'
import hoc from './hoc'


const componentfun = props => (
  <div className="btn_class"
     style={{
       color: props.black ? 'red' : 'lightblue',
       backgroundColor: props.hovered ? 'yellow' : 'purple',
    }}
  ><h1>
      Hover me and out, I am changing!
      I can change my text color if you click me
    </h1></div>
)
export default hoc(componentfun)