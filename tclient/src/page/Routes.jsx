import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
const { Header, Content } = Layout;
import { BrowserRouter, Switch, Route, 
    Link } from "react-router-dom";
import { List } from "../components/List";
import { Add } from "../components/Add";
import { Edit } from "../components/Edit";
import { Todos } from "../containers/Todos";

export const Routes = () => (
    <BrowserRouter>
        <Layout className="layout-wrapper">
            <Header style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
            }}>
                <Link className="ant-btn" to="/todos/add">
                    Add Todo
                </Link>
            </Header>
            <Content className="content-wrapper" style={{ padding: "20px 50px" }}>
                <Switch>
                    <Route exact path="/" component={Todos} />
                    <Route exact path="/todos/add" component={Add} />
                    <Route exact path="/todos/:id" component={List} />
                    <Route exact path="/todos/edit/:id" component={Edit} />
                </Switch>
            </Content>
        </Layout>
    </BrowserRouter>
);


