import React from 'react'

const Spinner = props => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.message}</div>
        </div>
    )
}

// if props.message is not passed default will be loaded
Spinner.defaultProps = {
    message: 'Waiting...'
}


export default Spinner