import React, {createRef, useEffect, useState} from "react";
import styles from "../../Cards.module.css";
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
        <div className={styles.content}>
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
                    className={styles.rect}
                    onClick={() => {
                        changeHighlightOnClick(props.id)
                    }}
                >
                    <div className={styles.grid_wrapp}>
                        <div className={styles.img}>
                            <img src={`${props.img}`} alt=""/>
                        </div>
                        <div className={styles.text_content}>
                            <div className={styles.title}>
                                Название: {props.name}
                            </div>
                            <div className={styles.price}>
                                Цена: {props.price}
                            </div>
                            <div className={styles.count}>
                                Количество: {props.count}
                            </div>
                        </div>
                        <div className={styles.item_buttons}>
                            <button className={styles.item_butt}
                                    onClick={() => {
                                        setShow(true)
                                        setAction(UPDATE_ITEM)
                                    }}
                            >
                                Обновить
                            </button>
                            <button className={styles.item_butt}
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