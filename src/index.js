import React from 'react'
import ReactDOM from 'react-dom'
import SeasonsDisplay from './SeasonsDisplay'
import Spinner from './Spinner'


/**
 * - In every Component
 * - (1) constructor is called
 * - (2) render is called
 * - (3) componentDidMount is called
 * - (4) render is called again if setState is used
 * - (5) componentDidUpdate is called
 */
class App extends React.Component {

    state = { 
        lat: null,
        errorMessage: '' 
    }

    componentDidMount() {
        console.log('Component Mounted')
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        )
    }

    componentDidUpdate() {
        console.log('Component Update')
    }

    renderContent() {
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }else if(!this.state.errorMessage && this.state.lat){
            return <SeasonsDisplay lat={this.state.lat}/>
        }

        return <Spinner message="Please allow location..."/>
    }

    render() {
        console.log('Render Called')
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'))
