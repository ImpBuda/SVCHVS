import React, {useEffect, useState} from "react";
import {ADD_ITEM, DELETE_ITEM, UPDATE_ITEM} from "../../../../store/actions";
import {useAddProductMutation, useUpdateProductMutation} from "../../../../store/product/product.api";
import {ModalForm} from "../modal-form/ModalForm";
import {ModalDelete} from "../modal-delete/ModalDelete";

export const ItemForm = (props) => {
    const [addProduct] = useAddProductMutation();
    const [updateProduct] = useUpdateProductMutation();

    const updateProductAfterSubmit = (product) => {
        updateProduct(product);
    }

    const addProductAfterSubmit = (product) => {
        addProduct(product);
    }

    const onClickFuncs = () => {
        props.deleteItem()
        props.onClose()
    }


    if (!props.show) {
        return null;
    } else {
        switch (props.action) {
            case ADD_ITEM: {
                return (
                    <ModalForm buttonText={"Добавить"}
                               product={props.product}
                               onClose={props.onClose}
                               afterClickSubmitButton={addProductAfterSubmit}/>
                )
            }

            case UPDATE_ITEM: {
                return (
                    <ModalForm buttonText={"Подтвердить"}
                               product={props.product}
                               onClose={props.onClose}
                               afterClickSubmitButton={updateProductAfterSubmit}/>
                )
            }

            case DELETE_ITEM: {
                return (
                    <ModalDelete onClose={props.onClose}
                                 onDelete={onClickFuncs}/>
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