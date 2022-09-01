import React, { Component } from 'react';

// stateless function component 无状态函数组件
const Navbar = (props) => {
    return ( <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar
                        <span>Boxescount: {props.boxesCount}</span>
                    </a>
                </div>
            </nav> 
            );
}
 
export default Navbar;

