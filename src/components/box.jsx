import React, { Component } from 'react';

class Box extends Component {
   

    
   
    

    render() { 
        return (
            <React.Fragment>
            {this.props.children[0]}
            <div style={this.getStyles()}>{this.toString()}</div>
            <button onClick={this.props.onLeft} className='btn btn-primary m-2'>左边</button>
            <button  onClick={this.props.onRight} className='btn btn-danger m-2'>右边 </button>
            <button onClick={() => this.props.onDelete(this.props.id)} className='btn btn-danger m-2'>删除</button>
            {/* {this.box.colors.map(x => {
                 return <div key={x}>{x}</div>
             })} */}

            {this.props.children[1]}
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
            marginLeft: this.props.box.x
        };

        if (this.props.box.x === 0 ) {
            styles.backgroundColor = "orange";
        }
        return styles;
    }
    toString() {
        const {x} = this.props.box;
        return `${x}`;
    }
}
 
export default Box;
