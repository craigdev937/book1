import React from "react";
import { Input, Row, Col, Button, Card, message } from "antd";
import { TodoAPI } from "../global/TodoAPI";

export const Edit = ({ history, match }) => {
    const [data, setData] = React.useState({
        title: "", author: "", info: "",
        amount: 0, published: false
    });

    const [updateTodo, { isLoading, isSuccess }] = 
        TodoAPI.useUpdateTodoMutation();

    const { data: todoData } = 
    TodoAPI.useFetchAllTodosQuery(undefined, {
        selectFromResult: ({ data }) => ({
            data: data?.find((element) => 
                element.id == match.params.id),
        }),
    });

    React.useEffect(() => {
        if (isLoading) {
            message.loading({ content: "Updating student" });
        };
        if (isSuccess) {
            message.success({
                content: "Todo was Updated!",
                duration: 3,
            });
        };
    }, [isLoading, isSuccess]);

    React.useEffect(() => {
        if (todoData) {
            setData(todoData);
        }
    }, [todoData]);

    const handleChange = (event) => {
        setData({...data, [event.target.name]: 
            event.target.value});
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await updateTodo(data);
        // After submit.
        setData({
            title: "", author: "", info: "",
            amount: 0, published: false
        });
        history.push("/");
    };

    console.log(Object.values(data)
    .every((element) => element == ""));

    return (
        <form onSubmit={handleSubmit}>
            <Card title="Edit the Todo">
                <Row gutter={[0, 20]}>
                    <Col span={24}>
                        <Input 
                            disabled={isLoading || !data.title}
                            size="large"
                            placeholder="Title"
                            name="title"
                            value={data.title}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col span={24}>
                        <Input 
                            disabled={isLoading || !data.author}
                            size="large"
                            placeholder="Author"
                            name="author"
                            value={data.author}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col span={24}>
                        <Input 
                            disabled={isLoading || !data.info}
                            size="large"
                            placeholder="Info"
                            name="info"
                            value={data.info}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col span={24}>
                        <Input 
                            disabled={isLoading || !data.age}
                            size="large"
                            placeholder="Age"
                            name="age"
                            value={data.age}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col span={24}>
                        <Button
                            type="primary"
                            loading={isLoading}
                            htmlType="submit"
                            disabled={isLoading || Object.values(data).every((el) => el == "")}
                            >Update Todo
                        </Button>
                    </Col>
                </Row>
            </Card>
        </form>
    );
};




