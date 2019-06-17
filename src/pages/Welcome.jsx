import React from 'react';
import { Form, Input } from 'antd'

@Form.create()
export default class Welcome extends React.Component {
  render () {
    const { form: { getFieldDecorator, getFieldValue } } = this.props;
    const getName = () => {
      // 此处获取的值是onChange的前一个值，输入1获取到的是undefine，再输入2时获取到的是1, 再输入2时获取到的是12
      console.log('name=', getFieldValue('name'))
    };

    const getName2 = () => {
      // 此处获取的值是当前值
      console.log('name2=', getFieldValue('name2'))
    };

    return (
      <div>
        <Form.Item label="名称">
          {getFieldDecorator('name')(<Input onChange={getName} />)}
        </Form.Item>

        <Form.Item label="名称2">
          {getFieldDecorator('name2')(<Input onChange={() => {
            setTimeout(() => {
              getName2()
            })
          }} />)}
        </Form.Item>
      </div>
    )
  }
}
