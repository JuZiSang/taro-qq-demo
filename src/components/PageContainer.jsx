import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

export default class PageContainer extends Component {
  render() {
    return <View>{this.props.children}</View>
  }
}
