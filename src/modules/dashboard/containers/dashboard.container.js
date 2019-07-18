import React from 'react';
import { LayoutComp, MenuComp, IconComp, BreadcrumbComp, AffixComp } from '../../../components/components';

const { Header, Content, Footer, Sider } = LayoutComp;
const { SubMenu } = MenuComp;

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
                        <Header style={{ position: 'fixed', zIndex: 0, width: '100%' }}>
                            <div className="logo" />
                            <MenuComp
                                theme="dark"
                                mode="horizontal"
                                defaultSelectedKeys={['2']}
                                style={{ lineHeight: '64px', textAlign: 'end' }}
                            >
                                <MenuComp.Item key="1">nav 1</MenuComp.Item>
                                <MenuComp.Item key="2">nav 2</MenuComp.Item>
                                <MenuComp.Item key="3">nav 3</MenuComp.Item>
                            </MenuComp>
                        </Header>
                    </AffixComp>
                
                <LayoutComp className="body">
                    <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" style={{ height: '4rem' }}/>
                        <MenuComp theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <MenuComp.Item key="1">
                            <IconComp type="pie-chart" />
                            <span>Slider Home</span>
                            </MenuComp.Item>
                            <MenuComp.Item key="2">
                            <IconComp type="desktop" />
                            <span>Sobre evento</span>
                            </MenuComp.Item>
                            {/*<SubMenu
                            key="sub1"
                            title={
                                <span>
                                <IconComp type="user" />
                                <span>User</span>
                                </span>
                            }
                            >
                            <MenuComp.Item key="3">Tom</MenuComp.Item>
                            <MenuComp.Item key="4">Bill</MenuComp.Item>
                            <MenuComp.Item key="5">Alex</MenuComp.Item>
                            </SubMenu>
                            <SubMenu
                            key="sub2"
                            title={
                                <span>
                                <IconComp type="team" />
                                <span>Team</span>
                                </span>
                            }
                            >
                            <MenuComp.Item key="6">Team 1</MenuComp.Item>
                            <MenuComp.Item key="8">Team 2</MenuComp.Item>
                            </SubMenu>*/}
                            <MenuComp.Item key="3">
                            <IconComp type="file" />
                            <span>Palestrantes</span>
                            </MenuComp.Item>
                            <MenuComp.Item key="4">
                            <IconComp type="file" />
                            <span>Parceiros</span>
                            </MenuComp.Item>
                            <MenuComp.Item key="5">
                            <IconComp type="file" />
                            <span>Contato</span>
                            </MenuComp.Item>
                            <MenuComp.Item key="6">
                            <IconComp type="file" />
                            <span>Configurações</span>
                            </MenuComp.Item>
                            <MenuComp.Item key="7">
                            <IconComp type="file" />
                            <span>Produção científica</span>
                            </MenuComp.Item>
                            <MenuComp.Item key="8">
                            <IconComp type="file" />
                            <span>Passos</span>
                            </MenuComp.Item>
                        </MenuComp>
                    </Sider>
                    <Content className="content">
                        <div style={{ padding: 24, background: '#fff', minHeight: 3600 }}>Bill is a cat.</div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </LayoutComp>
              </LayoutComp>
            </div>
            );
    }
}

export default DashboardContainer; 