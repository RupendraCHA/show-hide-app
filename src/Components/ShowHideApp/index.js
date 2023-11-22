import {Component} from 'react'
import "./index.css"

class ShowHideApp extends Component{
    state = {isHiddenFirstName: false, isHiddenLastName: false}
    showFirstName = () => {
        this.setState(prevState => (
            ({isHiddenFirstName: !prevState.isHiddenFirstName})
        ))
    }

    showLastName = () => {
        this.setState(prevState => (
            ({isHiddenLastName: !prevState.isHiddenLastName})
        ))
    }
    render(){
        const {isHiddenFirstName,isHiddenLastName} = this.state 

        const firstName = isHiddenFirstName ? <p className="name">Joe</p>: null
        const lastName = isHiddenLastName ? <p className="name">Jonas</p>: null
        return (
            <div className="app-container">
                <h1 className="heading">Show/Hide</h1>
                <div className="buttons-container">
                    <div className="first-name">
                        <button onClick={this.showFirstName}>Show/Hide Firstname</button>
                        {firstName}
                    </div>
                    
                    <div className="last-name">
                        <button onClick={this.showLastName}>Show/Hide Lastname</button>
                        {lastName}
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowHideApp