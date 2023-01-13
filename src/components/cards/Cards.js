import './Cards.css'
import React, { createRef, useEffect, useState } from 'react'
import ClickAwayListener from '@mui/base/ClickAwayListener';
import dataJSON from "./items.json";

 let getData = () => {
     localStorage.removeItem("items")
     localStorage.setItem("items", JSON.stringify(dataJSON))
 }

 getData()

const ADD_ITEM = 'ADD-ITEM'
const UPDATE_ITEM = 'UPDATE-ITEM'
const DELETE_ITEM = 'DELETE-ITEM'

const ItemForm = (props) => {

    let items = JSON.parse(localStorage.getItem("items"))
    let addItemNameRef = React.createRef()
    let addItemPriceRef = React.createRef()
    let addItemImgRef = React.createRef()
    let addItemCountRef = React.createRef()

    const [disabled, setDisabled] = useState(true)

    const [data, setData] = useState({
        name: '',
        isNameValid: false,
        price: '',
        isPriceValid: false,
        img: '',
        isImgValid: false,
        count: '',
        isCountValid: false
    })
    const [getId, setId] = useState(items.length)

    let validateStringValue = (value) => {
        return typeof value === "string" && value !== "";
    }

    let validateIntValue = (value) => {
        value = parseInt(value)
        return Number.isInteger(value);
    }

    let validateUrl = (value) => {
        let httpRegex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/; console.log(httpRegex.test(value))
        return httpRegex.test(value);
    }
    let checkButtonForValidate = () => {
        if (data.isNameValid && data.isPriceValid
            && data.isCountValid && data.isImgValid) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }

    let addItem = () => {
        setId(getId => getId + 1)
        items.push({
            "id": getId,
            "name": `${data.name}`,
            "price": data.price,
            "img": `${data.img}`,
            "count": data.count
        })
        localStorage.setItem("items", JSON.stringify(items))
        setData({
            name: '',
            isNameValid: false,
            price: '',
            isPriceValid: false,
            img: '',
            isImgValid: false,
            count: '',
            isCountValid: false
        })
    }

    let updateItem = (id) => {
        for (let i = 0; i < items.length; i++) {
            if (items[i].id === id) {
                items[i] = {
                    "id": id,
                    "name": `${data.name}`,
                    "price": data.price,
                    "img": `${data.img}`,
                    "count": data.count
                }
                localStorage.setItem("items", JSON.stringify(items))
                break;
            }
        }
        setData({
            name: '',
            isNameValid: false,
            price: '',
            isPriceValid: false,
            img: '',
            isImgValid: false,
            count: '',
            isCountValid: false
        })
    }


    if (!props.show) {
        return null;
    }
    else {
        switch (props.action) {
            case ADD_ITEM: {
                return (
                    <div className='item_form'>
                        <div className='form_wrapp'>
                            <div className='form_content'>
                                <input type="text"
                                    placeholder='Название'
                                    ref={addItemNameRef}
                                    onChange={() => {
                                        let value = addItemNameRef.current.value
                                        if (validateStringValue(value)) {
                                            data.name = value
                                            data.isNameValid = true
                                        }
                                        else {
                                            data.isNameValid = false
                                        }
                                        checkButtonForValidate()
                                    }}
                                />

                                <input type="text"
                                    placeholder='Цена'
                                    ref={addItemPriceRef}
                                    onChange={() => {
                                        let value = addItemPriceRef.current.value
                                        if (validateIntValue(value)) {
                                            data.price = value
                                            data.isPriceValid = true
                                        }
                                        else {
                                            data.isPriceValid = false
                                        }
                                        checkButtonForValidate()
                                    }}
                                />

                                <input type="text"
                                    placeholder='Ссылка на фото'
                                    ref={addItemImgRef}
                                    onChange={() => {
                                        let value = addItemImgRef.current.value
                                        if (validateUrl(value)) {
                                            data.img = value
                                            data.isImgValid = true
                                        }
                                        else {
                                            data.isImgValid = false
                                        }
                                        checkButtonForValidate()
                                    }}
                                />

                                <input type="text"
                                    placeholder='Количество'
                                    ref={addItemCountRef}
                                    onChange={() => {
                                        let value = addItemCountRef.current.value
                                        if (validateIntValue(value)) {
                                            data.count = value
                                            data.isCountValid = true
                                        }
                                        else {
                                            data.isCountValid = false
                                        }
                                        checkButtonForValidate()
                                    }}
                                />
                            </div>
                            <div className='form_buttons'>
                                <button
                                    disabled={disabled}
                                    onClick={() => {
                                        addItem()
                                        setDisabled(true)
                                        props.onClose()
                                    }}
                                >
                                    Добавить
                                </button>
                                <button onClick={props.onClose}>Отмена</button>
                            </div>
                        </div>
                    </div>
                )
            }

            case UPDATE_ITEM: {
                return (
                    <div className='item_form'>
                        <div className='form_wrapp'>
                            <div className='form_content'>
                                <input type="text"
                                    placeholder='Название'
                                    ref={addItemNameRef}
                                    onChange={() => {
                                        let value = addItemNameRef.current.value
                                        if (validateStringValue(value)) {
                                            data.name = value
                                            data.isNameValid = true
                                        }
                                        else {
                                            data.isNameValid = false
                                        }
                                        checkButtonForValidate()
                                    }}
                                    onClick={() => {
                                        if (addItemNameRef.current.value === '') {
                                            addItemNameRef.current.value = items[props.id].name
                                            if (validateStringValue(addItemNameRef.current.value)) {
                                                data.name = addItemNameRef.current.value
                                                data.isNameValid = true
                                            }
                                        }
                                        checkButtonForValidate()
                                    }}
                                />

                                <input type="text"
                                    placeholder='Цена'
                                    ref={addItemPriceRef}
                                    onChange={() => {
                                        let value = addItemPriceRef.current.value
                                        if (validateIntValue(value)) {
                                            data.price = value
                                            data.isPriceValid = true
                                        }
                                        else {
                                            data.isPriceValid = false
                                        }
                                        checkButtonForValidate()
                                    }}
                                    onClick={() => {
                                        if (addItemPriceRef.current.value === '') {
                                            addItemPriceRef.current.value = items[props.id].price
                                            if (validateIntValue(addItemPriceRef.current.value)) {
                                                data.price = addItemPriceRef.current.value
                                                data.isPriceValid = true
                                            }
                                        }
                                        checkButtonForValidate()
                                    }}
                                />

                                <input type="text"
                                    placeholder='Ссылка на фото'
                                    ref={addItemImgRef}
                                    onChange={() => {
                                        let value = addItemImgRef.current.value
                                        if (validateUrl(value)) {
                                            data.img = value
                                            data.isImgValid = true
                                        }
                                        else {
                                            data.isImgValid = false
                                        }
                                        checkButtonForValidate()
                                    }}
                                    onClick={() => {
                                        if (addItemImgRef.current.value === '') {
                                            addItemImgRef.current.value = items[props.id].img
                                            if (validateUrl(addItemImgRef.current.value)) {
                                                data.img = addItemImgRef.current.value
                                                data.isImgValid = true
                                            }
                                        }
                                        checkButtonForValidate()
                                    }}
                                />

                                <input type="text"
                                    placeholder='Количество'
                                    ref={addItemCountRef}
                                    onChange={() => {
                                        var value = addItemCountRef.current.value
                                        if (validateIntValue(value)) {
                                            data.count = value
                                            data.isCountValid = true
                                        }
                                        else {
                                            data.isCountValid = false
                                        }
                                        checkButtonForValidate()
                                    }}
                                    onClick={() => {
                                        if (addItemCountRef.current.value === '') {
                                            addItemCountRef.current.value = items[props.id].count
                                            if (validateIntValue(addItemCountRef.current.value)) {
                                                data.count = addItemCountRef.current.value
                                                data.isCountValid = true
                                            }
                                        }
                                        checkButtonForValidate()
                                    }}
                                />
                            </div>
                            <div className='form_buttons'>
                                <button
                                    disabled={disabled}
                                    onClick={() => {
                                        updateItem(props.id)
                                        setDisabled(true)
                                        props.onClose()
                                    }}
                                >
                                    Подтвердить
                                </button>
                                <button onClick={props.onClose}>
                                    Отмена
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }

            case DELETE_ITEM: {

                let onClickFunc = () => {
                    props.deleteItem()
                    props.onClose()
                }
                return (
                    <div className='item_form'>
                        <div className='form_wrapp'>
                            <div className='form_content'>
                              Вы точно хотите удалить?
                            </div>
                            <div className='form_buttons'>
                                <button
                                    onClick={onClickFunc}
                                >
                                    Удалить
                                </button>
                                <button onClick={props.onClose}>
                                    Отмена
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }

            default: {
                return (
                    <div>
                        oops
                    </div>
                )
            }
        }
    }
}

const CardArea = (props) => {
    const [show, setShow] = useState(false)

    const [action, setAction] = useState()

    const HIGHLIGHTVALUE = '0px 0px 8px 8px rgba(255, 157, 0, 0.2)'
    const rectRef = createRef()

    const [highlightItem, setHighlightItem] = useState({
        id: 0,
        boxShadow: 'none',
        isActive: false
    })
    const rectStyle = { boxShadow: `${highlightItem.boxShadow}` }

    const changeHighlightOnClick = (valueId) => {

        if (highlightItem.boxShadow === 'none' && !highlightItem.isActive) {
            setHighlightItem({
                id: valueId,
                boxShadow: HIGHLIGHTVALUE,
                isActive: true
            })
        }
        if (highlightItem.boxShadow !== 'none' && highlightItem.isActive) {
            setHighlightItem({
                id: valueId,
                boxShadow: 'none',
                isActive: false
            })
        }
    }

    let deleteItem = (id) => {
        let state = JSON.parse(localStorage.getItem("items"))
        for (let i = 0; i < state.length; i++) {
            if (state[i].id === id) {
                state.splice(i, 1)
                break;
            }
        }
        localStorage.setItem("items", JSON.stringify(state))
    }

    return (
            <div
                ref={rectRef}
                style={rectStyle}
                className='rect'
                onClick={() => {
                    changeHighlightOnClick(props.id)
                }}
            >
                    <ClickAwayListener onClickAway={() => {
                        setHighlightItem({
                            id: props.id,
                            boxShadow: 'none',
                            isActive: false
                        })
                    }}>
                    <div className='grid_wrapp'>
                        <div className='img'>
                            <img src={`${props.img}`} alt="" />
                        </div>
                        <div className='text_content'>
                            <div className='title'>
                                Название: {props.name}
                            </div>
                            <div className='price'>
                                Цена: {props.price}
                            </div>
                            <div className='count'>
                                Количество: {props.count}
                            </div>
                        </div>
                        <div className='item_buttons'>
                            <button className='item_butt'
                                onClick={() => {
                                    setShow(true)
                                    setAction(UPDATE_ITEM)
                                }}
                            >
                                Обновить
                            </button>
                            <button className='item_butt'
                                onClick={() => {
                                    setShow(true)
                                    setAction(DELETE_ITEM)
                                }}
                            >
                                Удалить
                            </button>
                        </div>
                    </div>
            </ClickAwayListener>
            <ItemForm
                action={action}
                show={show}
                id={props.id}
                deleteItem={() => { deleteItem(props.id) }}
                onClose={() => { setShow(false) }}
            />
        </div>
    )
}

const Cards = () => {
    let state = JSON.parse(localStorage.getItem("items"))
    const [show, setShow] = useState(false)
    const [action, setAction] = useState()

    let [itemsData, setItemsData] = useState([])
    useEffect(() => {
        setTimeout(() => {
            setItemsData(JSON.parse(localStorage.getItem("items")).map((item) =>
                <CardArea
                    key={item.id}
                    id={item.id}
                    img={item.img}
                    name={item.name}
                    price={item.price}
                    count={item.count}
                />
            ))
        }, 1)
    }, [state])

    return (
        <div className="board">
        <div className="wrapper">
            {itemsData}
            <div className='button'>

            </div>
            <ItemForm
                action={action}
                show={show}
                onClose={() => { setShow(false) }}
            />
        </div>
            <button className="add"
                onClick={() => {
                    setShow(true)
                    setAction(ADD_ITEM)
                }}
            >
                Добавить
            </button>
        </div>
    )
}

export default Cards