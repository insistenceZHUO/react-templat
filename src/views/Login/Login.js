import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox, Card } from 'antd';
import axios from 'axios'

import { connect } from 'react-redux'

import './Login.less'
const wrapperCol = {
    xs: {
        span: 24
    },
    md: {
        span: 12,
        offset: 6
    }
}
@Form.create()
@connect()
class Login extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      };
      componentDidMount () {
        axios({
          method: 'post',
          url: 'http://rap2api.taobao.org/app/mock/232745//mock',
          data: {
            pageNo: 1,
          }
        }).then(res => {
          console.log(res)
        });
      }
      render() {
        console.log(this.props)
        const { getFieldDecorator } = this.props.form;
        return (
            <Card title="登陆"  className="qf-login-wrapper">
            <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: '必须输入用户名' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '必须输入密码'  }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(<Checkbox>记住密码</Checkbox>)}
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
            </Form.Item>
          </Form>
            </Card>
         );
      }
}
export default Login