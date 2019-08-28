import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  handleToTest = () => {
    Taro.navigateTo({ url: '/pages/test/test' })
  }

  render() {
    return (
      <View className='index'>
        <Button onClick={this.handleToTest}>跳转到第二个界面</Button>
      </View>
    )
  }
}
