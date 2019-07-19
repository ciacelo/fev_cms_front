import React from 'react';
import { LayoutComp, MenuComp, IconComp, BreadcrumbComp, AffixComp } from '../../../components/components';
import ChildrenRouter from '../../../router/children.router';
import { MenuSider, MenuHeader } from '../components/menu-dashboard.component';

const { Header, Content, Footer, Sider } = LayoutComp;

class DashboardContainer extends  React.Component {

    state = {
        collapsed: false,
      };
    
    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        return (
            <div>
                <LayoutComp style={{ minHeight: '100vh' }}>
                    <AffixComp>
                        <Header style={{ zIndex: 0, width: '100%' }}>
                            <div className="logo" />
                            <MenuHeader/>
                        </Header>
                    </AffixComp>
                
                <LayoutComp className="body">
                    <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo"/>
                        <MenuSider />
                    </Sider>
                    <Content className="content">
                        <div style={{ padding: 24, background: '#fff', minHeight: 3600 }}>
                            <ChildrenRouter parent="dashboard" />
                        </div>
                        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Content>
                </LayoutComp>
              </LayoutComp>
            </div>
            );
    }
}

export default DashboardContainer; 