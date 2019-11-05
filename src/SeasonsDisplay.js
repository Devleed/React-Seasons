import './SeasonDisplay.css'
import React from 'react'

const seasonConfig = {
    summer: {
        text: 'let\'s hit the beach',
        iconName: 'sun'
    },
    winter: {
        text: 'bruh, its chilly',
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if(month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter'
    }else{
        return lat > 0 ? 'winter' : 'summer'
    }
}

const SeasonsDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth())
    
    const {text, iconName} = seasonConfig[season]

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}></i>
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`}></i>
        </div>
    )
}

export default SeasonsDisplay