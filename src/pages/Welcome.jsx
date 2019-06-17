import React from 'react';
import { Form, Input } from 'antd'

@Form.create()
export default class Welcome extends React.Component {
  render () {
    const { form: { getFieldDecorator, getFieldValue } } = this.props
    const getName = () => {
      console.log(getFieldValue('name'))
    };

    return (
      <Form.Item label="名称">
        {getFieldDecorator('name')(<Input onChange={getName} />)}
      </Form.Item>
    )
  }
}
