import React, { Component } from 'react';
import Navbar from './navbar';
import Boxes from './boxes';
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
    // 为了能够使得boxes的数据传给navbar 就讲数据放到了最近公共祖先里
    state = { 
        boxes:[
            {key: 0, x: 0},
            {key: 1, x: 1},
            {key: 2, x: 2},
            {key: 3, x: 3},
        ]
     } 
     handleDelete = (BoxId) => {
        const boxes = this.state.boxes.filter(b => b.key !== BoxId);
        this.setState({
            boxes:boxes,
        });
     }
     handleReset = () => {
        const boxes = this.state.boxes.map(b => {
            return {
                key:b.key,
                x: 0,
            };
        })
        this.setState({
            boxes:boxes
        });
        console.log('reset');
     }
     
     handleLeftClick = (box) => {
        const boxes = [...this.state.boxes]   // 不要直接用state修改boxes的值
        const k = boxes.indexOf(box);   // 找到box的索引
        boxes[k] = {...boxes[k]};
        boxes[k].x--;
        this.setState({
            boxes: boxes
        })
    };

    handleRightClick = (box) => {
        const boxes = [...this.state.boxes];
        const k = boxes.indexOf(box);
        boxes[k] = {...boxes[k]};
        boxes[k].x ++;
        this.setState({
            boxes: boxes
        })
    };

    render() { 
        return (
            <React.Fragment>
                <Navbar boxesCount={this.state.boxes.filter(b => b.x !==0 ).length} />
                <div className='container'>
                    <Boxes
                        boxes={this.state.boxes}
                        onReset={this.handleReset}
                        onDelete={this.handleDelete}
                        onClickRight={this.handleRightClick}
                        onClickLeft={this.handleLeftClick}
                    />
                </div>
            </React.Fragment>
        );
    }
}
 
export default App;