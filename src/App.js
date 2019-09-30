import React, { Component } from 'react'


import './index.less'
 

const testHOC = (wrappedComponent) => {
    return class HOCComponent extends Component {
        render () {
            return (
                <div>
                    <wrappedComponent></wrappedComponent>
                    <div>这个是高阶组件</div>
                </div>
            )
        }
    }
};
@testHOC
class App extends React.Component {
    render() {
        return (
            <h1 className="add">1111</h1>
        )
    }
}

export default App