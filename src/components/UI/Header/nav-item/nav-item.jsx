import React from 'react'
import navitem from "./nav-item.module.css"
import PropTypes from 'prop-types';

export default function NavItem({ Icon, text }) {
    return (
        <div className={navitem.nav_item}>
            <Icon />
            <p className="text text_type_main-default text_color_inactive">
                {text}
            </p>
        </div>
    )
}

NavItem.propTypes = {
    Icon: PropTypes.element,
    text: PropTypes.string
}