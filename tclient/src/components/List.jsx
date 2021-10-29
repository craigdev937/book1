import React from "react";
import { Col, Card, Typography, message } from "";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { TodoAPI } from "../global/TodoAPI";

export const List = ({ todo }) => {
    const { Title, Paragraph } = Typography;
    const history = useHistory();
    const [deleteTodo, { isLoading, isSuccess }] = 
        TodoAPI.useDeleteTodoMutation();

    React.useEffect(() => {
        if (isLoading) {
            message.loading({ content: "deleting..." });
        };
        if (isSuccess) {
            message.success({ 
                content: "Todo was Deleted", duration: 2
            });
        };
    }, [isLoading, isSuccess]);

    return (
        <React.Fragment>
            <Col span={6} key={id}>
                <Card
                    hoverable={true}
                    bordered={false}
                    actions={[
                        <EyeOutlined 
                            key="view"
                            onClick={() => history.push(`/${id}`)}
                        />,
                        <EditOutlined 
                            key="edit"
                            onClick={() => history.push(`/edit/${id}`)}
                        />,
                        <DeleteOutlined 
                            key="setting"  
                            onClick={() => deleteTodo(id)}
                        />,
                    ]}>
                        <main className="student-info">
                            <Title level={5}>{todo.title}</Title>
                            <Paragraph>{todo.author}</Paragraph>
                            <Paragraph>{todo.info}</Paragraph>
                            <Paragraph>{todo.amount}</Paragraph>
                            <Paragraph>{todo.published}</Paragraph>
                        </main>
                </Card>
            </Col>            
        </React.Fragment>
    );
};




