import React from "react";
import { Row, Col, Card, Descriptions, Spin } from "antd";
import { TodoAPI } from "../global/TodoAPI";

export const Todos = ({ match }) => {
    const { data } = TodoAPI.useFetchAllTodosQuery(undefined, {
        selectFromResult: ({ data }) => ({
            data: data?.find(
                (element) => element.id === match.params.id
            ),
        }),
    });

    return (
        <React.Fragment>
            {data == undefined ? (
                <aside className="spinner-wrapper">
                    <Spin size="large" />
                </aside>
            ) : (
                <Card>
                    <Row gutter={[0, 20]}>
                        <Col span={16}>
                            <Descriptions 
                                title={data?.title} 
                                layout="vertical">
                                <Descriptions.Item label="Title">
                                    {data?.title}
                                </Descriptions.Item>
                                <Descriptions.Item label="Author">
                                    {data?.author}
                                </Descriptions.Item>
                                <Descriptions.Item label="Age">
                                    {data?.amount}
                                </Descriptions.Item>
                                <Descriptions.Item label="Info">
                                    {data?.info}
                                </Descriptions.Item>
                                <Descriptions.Item label="Published">
                                    {data?.published}
                                </Descriptions.Item>
                            </Descriptions>
                        </Col>
                    </Row>
                </Card>
            )}
        </React.Fragment>
    );
};




