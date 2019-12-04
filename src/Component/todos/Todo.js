import React, {Component} from 'react';
import {List, Icon, Modal, Form, Input, Checkbox} from 'antd';
import _ from 'lodash';
import './todo.scss';

class Todo extends Component {
    state = {
        visible: false,
    };

    showModal = () => {
        this.setState({visible: true});
    };

    handleOk = (() => {
        const {addTodo} = this.props;
        const {validateFields} = this.props.form;

        validateFields((err, values) => {
            if (err) {
                return
            }

            addTodo(values);
            this.setState({visible: false});

        });
    });

    handleCancel = () => {
        this.setState({visible: false});
    };

    onFilterEvent = (checkedValues) => {
        const {filterSelected} = this.props;

        const completedIndex = _.findIndex(checkedValues, (o) => o === 'completed');
        const uncompletedIndex =  _.findIndex(checkedValues, (o) => o === 'uncompleted');

        if (checkedValues.length === 0 || checkedValues.length === 2) {
            filterSelected('all');
        } else if (checkedValues.length === 1 && completedIndex > -1) {
            filterSelected('completed');
        }else if (checkedValues.length === 1 && uncompletedIndex > -1) {
            filterSelected('uncompleted');
        }

    };

    render() {
        const { todoList, toggleTodo } = this.props;
        const {visible} = this.state;
        const {getFieldDecorator} = this.props.form;
        const filterOpt = [
            {label: '已完成', value: 'completed'},
            {label: '未完成', value: 'uncompleted'},
        ];
        return (
            <div className="todo-list">
                <Modal
                    title="添加待办项"
                    visible={visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Item>
                            {getFieldDecorator('name', {
                                rules: [{required: true, message: '请添加待办项名称!'}],
                            })(
                                <Input placeholder="待办项名称"/>,
                            )}
                        </Form.Item>
                    </Form>
                </Modal>
                <List
                    size="small"
                    header={
                        <div className="todo-header">待办项
                            <div className="operate-btn">
                                <Checkbox.Group
                                    options={filterOpt}
                                    defaultValue={[]}
                                    onChange={this.onFilterEvent}
                                />
                                <Icon type="zoom-in" onClick={this.showModal}/>
                            </div>
                        </div>}
                    bordered
                    dataSource={todoList}
                    renderItem={item => (
                        <List.Item
                            className={item.completed ? 'completed' : ''}
                            key={item.id}
                            name={item.name}
                            onClick={() => toggleTodo(item)}
                        >
                            {item.name}
                        </List.Item>
                    )}
                />
            </div>
        );
    }


}

export default Form.create()(Todo);