import styles from './Galery.css'
import React, {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'

///////////////////// reboot //////////////////////

// let testfunc = () => {
//     localStorage.removeItem("items")
//     var data = require('./items.json')
//     localStorage.setItem("items", JSON.stringify(data))
//     console.log(data)
// }

// testfunc()

const GaleryArea = (props) => {
    return (
        <NavLink to='/'>
            <div className='galery_item__wrapper'>
                <div className='img'>
                    <img src={`${props.img}`} alt=""/>
                </div>
                <div className='name'>
                    {props.name}
                </div>
            </div>
        </NavLink>
    )
}

const Galery = () => {

    var state = JSON.parse(localStorage.getItem("items"))
    let [itemsData, setItemsData] = useState([])
    useEffect(() => {
        setTimeout(() => {
            setItemsData(JSON.parse(localStorage.getItem("items")).map((item) =>
                <GaleryArea
                    key={item.id}
                    img={item.img}
                    name={item.name}
                />
            ))
        }, 1)
    }, [state])

    return (
        <div className='content'>
            {itemsData}
        </div>
    )
}

export default Galery