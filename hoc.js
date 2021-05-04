//testing thrugh vs cdeo to github

import React, { Component } from 'react'
const hoc = BaseComponent =>
  class Wrapper extends Component {
    state = {
      hovered: false,
      black: true
    }
    changeColor(){
        this.setState({black: !this.state.black})
    }
    updateHoverState = nextHoverState =>
      this.setState({ hovered: nextHoverState })
    render() {
        
      return (
        <div
          onMouseEnter={() => this.updateHoverState(true)}
          onMouseLeave={() => this.updateHoverState(false)}
          onClick={()=>this.changeColor(true)}
        >
          <BaseComponent
            {...this.props}
            hovered={this.state.hovered}
            black={this.state.black}
          />
        </div>
      )
    }
  }
export default hoc