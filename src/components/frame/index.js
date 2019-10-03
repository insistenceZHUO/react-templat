/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { withRouter } from 'react-router-dom'

import { Layout, Menu, Breadcrumb, Icon } from "antd";
// import  { adminRouter } from '../../routes'
// import Logo from "./Logo.png";
import "./frame.less";
/*
  使用antd制作的路由菜单
 */
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
@withRouter

class Frame extends Component {
  onMenuClick = ({ item, key, keyPath, domEvent }) => {
    this.props.history.push(key)
  }
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    const { adminRouter, location } = this.props;
    return (
        <Layout style={{height: '100%'}}>
          <Header className="header qf-header" style={{ background: "#fff" }}>
            <div className="qf-logo"></div>
          </Header>
          <Layout>
            <Sider width={200} style={{ background: "#fff" }}>
              <Menu
                mode="inline"
                onClick={this.onMenuClick}
                selectedKeys={[location.pathname]}
                style={{ height: "100%", borderRight: 0 }}
              >
                {adminRouter.map(item => {
                  if (item.children) {
                    // eslint-disable-next-line no-unused-expressions
                  return (
                    <SubMenu
                    key="item.pathname"
                    title={
                      <span>
                      <Icon type={item.icon} />
                        {item.title}
                      </span>
                    }
                  >
                   {
                    item.children.map(children => {
                      return (<Menu.Item key={children.pathname}>{children.title}</Menu.Item>);
                    })
                   } 
                  </SubMenu>
                  )
                  } else {
                    // eslint-disable-next-line no-undef
                    return (<Menu.Item key={item.pathname}>
                      <Icon type={item.icon} /> 
                      {item.title}
                      </Menu.Item>);
                  }
                })}
              </Menu>
            </Sider>
            <Layout style={{ padding: "0 12px 12px" }}>
              <Breadcrumb style={{ margin: "5px 0" }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Content
                style={{
                  background: "#fff",
                  padding: 24,
                  margin: 0,
                  minHeight: 280
                }}
              >
                {this.props.children}
              </Content>
            </Layout>
          </Layout>
        </Layout>
    );
  }
}

export default Frame;
