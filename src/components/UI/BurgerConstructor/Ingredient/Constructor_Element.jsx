import React from 'react'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import contructor_element from "./Constructor_Element.module.css"

export default function Constructor_Element({ ing_data, type }) {

    return (
        <div className={contructor_element.flex_container}>
            {!type ? <DragIcon /> : null}
            <div style={{ width: "500px" }}>
                <ConstructorElement
                    text={ing_data.name}
                    price={ing_data.price}
                    thumbnail={ing_data.image}
                    type={type}
                />
            </div>
        </div>
    )

    return (
        <ConstructorElement
            text={ing_data.name}
            price={ing_data.price}
            thumbnail={ing_data.image}
            type={type}
        />
    )
}
