import React from 'react'
import withHoverBasicHOC from './withHoverBasicHOC'

//let btn_class = this.state.black ? "blackButton" : "whiteButton";
const ComposedBasicHoverExample = props => (
  <div className="btn_class"
     style={{
       color: props.black ? 'red' : 'lightblue',
       backgroundColor: props.hovered ? 'yellow' : 'purple',
    }}
  ><h1>
      hover me and out, i am changing!
      i can change my text color if you click me
    </h1></div>
)
export default withHoverBasicHOC(ComposedBasicHoverExample)