import React from 'react'
import PropTypes from 'prop-types'
import assign from 'object-assign'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
const { Header, Content, Footer, Sider } = Layout
const SubMenu = Menu.SubMenu
// import Header from '../../components/Header'
import './CoreLayout.scss'
import '../../styles/core.scss'

class CoreLayout extends React.Component {
  constructor (props) {
    super(props)
    this.state = assign({}, props, {
      collapsed: false,
      mode: 'inline'
    })
  }
  onHandleToggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render() {
    return (
      <Layout className="sentry-layout">
        <Sider
          className="sentry-sider"
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <div className="menu-controler" onClick={this.onHandleToggle}>
            <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
          </div>
          <Menu
            className="sentry-menu"
            theme="dark"
            mode="inline"
            inlineIndent={16}
          >
            <SubMenu
              className="menu-sub"
              key="sub1"
              title={<span><Icon type="caret-down" /><span className="nav-text">前端监控室</span></span>}
            >
              <Menu.Item className="menu-item" key="1">Issues</Menu.Item>
              <Menu.Item className="menu-item" key="2">Overview</Menu.Item>
              <Menu.Item className="menu-item" key="3">UserFeedback</Menu.Item>
              <Menu.Item className="menu-item" key="4">Releases</Menu.Item>
            </SubMenu>
            <SubMenu
              className="menu-sub"
              key="sub2"
              title={<span><Icon type="caret-down" /><span className="nav-text">Team</span></span>}
            >
              <Menu.Item key="6">
                <span>
                  <Icon type="file" />
                  <span className="nav-text">File</span>
                </span>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Content className="sentry-header">
            <Breadcrumb className="header-breadcrumb">
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
          </Content>
          <Content style={{ margin: '0 16px' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

CoreLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default CoreLayout
