import React from 'react'
import NumberPlate from './NumberPlate.jsx'

export default class Rect extends React.Component {

  static defaultProps = {
    num: 0,
    bgcolor: '#808080',
  }

  constructor(props) {
    super(props)
    this.state = { num: this.props.num }
    console.log('constructor')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return true
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', prevState)
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  countUp() {
    this.setState({ num: this.state.num + 1 })
  }

  render(props) {
    const { bgcolor } = this.props

    const rectStyle = {
      background: bgcolor,
      display: 'table-cell',
      border: '1px #000 solid',
      fontSize: 20,
      width: 30,
      height: 30,
      textAlign: 'center',
      verticalAlign: 'center'
    }

    return (
      <div style={rectStyle} onClick={(e) => this.countUp()}>
        <NumberPlate><i>{this.state.num}</i></NumberPlate>
      </div>
    )
  }
}
