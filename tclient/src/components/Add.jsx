import React from "react";
import { Input, Row, Col, Button, Card, message } from "antd";
import { TodoAPI } from "../global/TodoAPI";

export const Add = ({ history }) => {
    const [addTodo, { isLoading, isSuccess }] = 
        TodoAPI.useAddTodoMutation();

    const [data, setData] = React.useState({
        title: "", author: "", info: "",
        amount: 0, published: false
    });

    const handleChange = (event) => {
        setData({...data, 
            [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await addTodo(data);
        // After submitting
        setData({
            title: "", author: "", info: "",
            amount: 0, published: false
        });
        history.push("/");
    };

    React.useEffect(() => {
        if (isLoading) {
            message.loading({ content: "Creating Todo" });
        };
        if (isSuccess) {
            message.success({
                content: "Todo successfully created!",
                duration: 3,
            })
        };
    }, [isLoading, isSuccess]);

    return (
        <form onSubmit={handleSubmit}>
            <Card title="Create a new Todo">
                <Row gutter={[0, 20]}>
                    <Col span={24}>
                        <Input
                            disabled={isLoading}
                            size="large"
                            placeholder="Title"
                            name="title"
                            value={data.title}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col span={24}>
                        <Input
                            disabled={isLoading}
                            size="large"
                            placeholder="Author"
                            name="author"
                            value={data.author}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col span={24}>
                        <Input
                            disabled={isLoading}
                            size="large"
                            placeholder="Age"
                            name="age"
                            value={data.age}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col span={24}>
                        <Input
                            disabled={isLoading}
                            size="large"
                            placeholder="Info"
                            name="info"
                            value={data.info}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col span={24}>
                        <Input
                            disabled={isLoading}
                            size="large"
                            placeholder="Published"
                            name="published"
                            value={data.published}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col span={25}>
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={isLoading}
                            >Add Todo
                        </Button>
                    </Col>
                </Row>
            </Card>            
        </form>
    );
};




