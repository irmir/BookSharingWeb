import React from 'react'
import { connect } from 'react-redux'

const DescriptionComponent = ({descriptionSite}) => {

    return (
        <p>{descriptionSite}</p>
    )
}

export const Description = connect(
    (state) => ({
        descriptionSite: state.site.descriptionSite
    })
)(DescriptionComponent)