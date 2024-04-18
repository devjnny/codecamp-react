import { Component } from 'react'
import Router from 'next/router'

export default class ClassCounterPage extends Component {
  state = {
    count: 0,
  }

  componentDidMount(): void {
    console.log('render 후 실행')
  }

  componentDidUpdate(): void {
    console.log('상태 변경 후 실행')
  }

  componentWillUnmount(): void {
    console.log('사라지기 전 실행')
  }

  onClickCountUp = () => {
    console.log(this.state.count)
    this.setState({
      count: this.state.count + 1,
    })
  }

  onClickMove = () => {
    void Router.push('/')
  }

  render(): JSX.Element {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.onClickCountUp}>카운트 UP</button>
        <button onClick={this.onClickMove}>나가기</button>
      </>
    )
  }
}
