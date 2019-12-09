import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {Layout, Menu} from 'antd';
import reducers from "./Reducers";
import * as Routes from './Routes';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './app.scss';

const { Sider, Content } = Layout;

export default function App() {
    const store = createStore(reducers);
    return (
        <Provider store={store}>
            <Router>
                <Layout className="layout">
                    <Sider>
                        <Menu>
                            <Menu.Item><Link to="/count">计数器</Link></Menu.Item>
                            <Menu.Item><Link to="/todo">待办项</Link></Menu.Item>
                            <Menu.Item><Link to="/WebRTC">WebRTC</Link></Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Content>
                            <Switch>
                                <Route path="/count" component={Routes.CountApp}/>
                                <Route path="/todo" component={Routes.TodoApp}/>
                                <Route path="/WebRTC" component={Routes.WebRTCAPP}/>
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </Router>
        </Provider>
    )
}
