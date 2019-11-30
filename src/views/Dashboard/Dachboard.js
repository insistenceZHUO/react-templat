import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'

import { markNotifications } from './../../actions/notifications'

const mapState = state => {
    return {
        list: state.notifications.list
    }
}
@connect(mapState, { markNotifications })
class Dachboard extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Dachboard</h1>
                <Button onClick={this.props.markNotifications.bind(this, 1111)}>+1111</Button>
                <ul>
                    {this.props.list.map((item, index)=>{
                     return <li key={index}>1111</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Dachboard