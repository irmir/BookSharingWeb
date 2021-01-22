import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
// import { bindActionCreators } from 'redux'

// import {Menu} from './Menu.js'


const MenuComponent = ({menuItems}) => {
    // debugger
    return (
            <nav>
                <ul>
                    {
                        menuItems.map((item) => (
                            <li>
                                <NavLink to={item.url}>
                                    {item.name}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </nav>        
    )
} 

export const Menu = connect(
    (state) => ({
        menuItems: state.site.menuItems
    }))(MenuComponent)