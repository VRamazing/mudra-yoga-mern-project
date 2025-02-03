import React from 'react'
import PropTypes from 'prop-types'
import MudraItem from './MudraItem'

export default function MudraList({mudras}) {
    if(mudras && mudras.length === 0){
        return (<p>No mudras found. Add a mudra</p>)
    }
    return (
        <div>
            { mudras.map(mudra => <MudraItem {...mudra} />) }
        </div>
    )
 
}

MudraList.propTypes = {
    mudras: PropTypes.object
}