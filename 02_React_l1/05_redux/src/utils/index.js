import { PureComponent } from 'react'

import StoreContext from './context'

export function connect (mapStateToProps, mapDispatchToProps) {

  return function enhanceHOC (WarpComponent) {
    class EnhandceComponent extends PureComponent {

      constructor (props, context) {
        super(props);
        this.state = {
          storeState: mapStateToProps(context.getState())
        }
      }

      componentDidMount () {
        this.unsubscribue = this.context.subscribe(() => {
          this.setState({
            storeState: mapStateToProps(this.context.getState())
          })
        })
      }

      componentWillUnmount () {
        this.unsubscribue()
      }

      render () {
        return <WarpComponent {...this.props}
                              {...mapStateToProps(this.context.getState())}
                              {...mapDispatchToProps(this.context.dispatch)}/>
      }
    }

    EnhandceComponent.contextType = StoreContext

    return EnhandceComponent
  }
}
