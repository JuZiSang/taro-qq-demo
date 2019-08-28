import Taro, { Component } from '@tarojs/taro'
import { View, Input } from '@tarojs/components'
import PageContainer from '../../components/PageContainer'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '测试'
  }

  render() {
    return (
      <PageContainer>
        <Input placeholder='请输入Test1' focus={true} type='text'></Input>
        <Input placeholder='请输入Test2' focus={true} type='text'></Input>
        <Input placeholder='请输入Test3' focus={true} type='text'></Input>
      </PageContainer>
    )
  }
}
