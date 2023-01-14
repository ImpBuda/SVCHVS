import React, {createRef, useEffect, useState} from "react";
import "../../Cards.css";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import {DELETE_ITEM, UPDATE_ITEM} from "../../../../store/actions";
import {ItemForm} from "../item-form/ItemForm";
import {useRemoveProductMutation} from "../../../../store/product/product.api";

export const CardArea = (props) => {
    const [show, setShow] = useState(false)
    const [removeProduct] = useRemoveProductMutation();

    const [action, setAction] = useState()

    const HIGHLIGHTVALUE = '0px 0px 8px 8px rgba(255, 157, 0, 0.2)'
    const rectRef = createRef()

    const [highlightItem, setHighlightItem] = useState({
        id: 0,
        boxShadow: 'none',
        isActive: false
    })
    const rectStyle = {boxShadow: `${highlightItem.boxShadow}`}

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
        removeProduct(id)
    }

    return (
        <div className='content'>
            <ClickAwayListener onClickAway={() => {
                setHighlightItem({
                    id: props.id,
                    boxShadow: 'none',
                    isActive: false
                })
            }}>
                <div
                    ref={rectRef}
                    style={rectStyle}
                    className='rect'
                    onClick={() => {
                        changeHighlightOnClick(props.id)
                    }}
                >
                    <div className='grid_wrapp'>
                        <div className='img'>
                            <img src={`${props.img}`} alt=""/>
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
                </div>
            </ClickAwayListener>
            <ItemForm
                action={action}
                show={show}
                deleteItem={() => {
                    deleteItem(props.id)
                }}
                onClose={() => {
                    setShow(false)
                }}
                product={props}
            />
        </div>
    )
}