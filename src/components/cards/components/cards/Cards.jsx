import React, {useEffect, useState} from "react";
import "../../Cards.css";
import {ADD_ITEM} from "../../../../store/actions";
import {useAddProductMutation, useGetProductsQuery} from "../../../../store/product/product.api";
import {CardArea} from "../card-area/CardArea";
import {ItemForm} from "../item-form/ItemForm";

export const Cards = () => {
    const {isLoading: areProductsLoading, isFetching, data: products} = useGetProductsQuery();

    const [show, setShow] = useState(false)

    const [action, setAction] = useState()

    return (
        <div className='board'>
            <div className="wrapper">
                {(areProductsLoading || isFetching) && <p className="text-center">Loading...</p>}
                {(!areProductsLoading && !isFetching) && products.map((item) =>
                    <CardArea
                        key={item.id}
                        id={item.id}
                        img={item.img}
                        name={item.name}
                        price={item.price}
                        count={item.count}
                    />
                )}

            </div>

            <ItemForm
                action={action}
                show={show}
                onClose={() => {
                    setShow(false)
                }}
            />
            <div className='button'>
                <button className="add"
                    onClick={() => {
                        setShow(true)
                        setAction(ADD_ITEM)
                    }}
                >
                    Добавить
                </button>
            </div>
        </div>
    )
}