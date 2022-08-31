import React, { Component } from 'react';

class Box extends Component {
    state = { 
        x:0,
        colors: [],
     };

    handleLeftClick = (step) => {
        this.setState({
            x: this.state.x  - step,
        })
        console.log('left', this);
    };

    handleRightClick = (step) => {
        this.setState({
            x: this.state.x  + step,
        })
        console.log('right', this);
    };
    handleRightClickTmp = () =>  {
        return this.handleRightClick(10);
    };
    

    render() { 
        return (
            <React.Fragment>
            <div style={this.getStyles()}>{this.toString()}</div>
            <button onClick={() => this.handleLeftClick(10)} className='btn btn-primary m-2'>左边</button>
            <button onClick={this.handleRightClickTmp} className='btn btn-danger m-2'>右边 </button>
            {this.state.colors.map(x => {
                 return <div key={x}>{x}</div>
             })}
            </React.Fragment>
        );
    };

    getStyles() {
        let styles = {
            width:"100px",
            height:"100px",
            backgroundColor:"lightblue",
            color:"white",
            lineHeight:"100px",
            textAlign:"center",
            marginLeft: this.state.x
        };

        if (this.state.x === 0 ) {
            styles.backgroundColor = "orange";
        }
        return styles;
    }
    toString() {
        const {x} = this.state;
        return `${x}`;
    }
}
 
export default Box;
