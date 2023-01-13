import React, {useEffect, useState} from "react";
import styles from "../../Cards.module.css";
import {validateIntValue, validateStringValue, validateUrl} from "./Validation";

export function ModalForm({product, onClose, afterClickSubmitButton, buttonText}) {
    const [inputName, setInputName] = useState("");
    const [isNameValid, setIsNameValid] = useState(false);

    const [inputPrice, setInputPrice] = useState("");
    const [isPriceValid, setIsPriceValid] = useState(false);

    const [inputImg, setInputImg] = useState("");
    const [isImgValid, setIsImgValid] = useState(false);

    const [inputCount, setInputCount] = useState("");
    const [isCountValid, setIsCountValid] = useState(false);

    useEffect(() => {
        if (product) {
            setInputName(product.name)
            setInputPrice(product.price.toString())
            setInputImg(product.img)
            setInputCount(product.count.toString())

            setIsNameValid(true);
            setIsPriceValid(true);
            setIsImgValid(true);
            setIsCountValid(true);
        }

    }, [])

    const clickSubmit = () => {
        const item = {
            id: product?.id ?? 0,
            name: inputName,
            price: parseInt(inputPrice),
            img: inputImg,
            count: parseInt(inputCount)
        }

        afterClickSubmitButton(item);
        onClose();
    }


    return (
        <div className={styles.item_form}>
            <div className={styles.form_wrapp}>
                <div className={styles.form_content}>
                    <input type="text"
                           placeholder='Название'
                           value={inputName}
                           onChange={(event) => {
                               event.preventDefault();
                               setInputName(event.target.value)
                               setIsNameValid(validateStringValue(event.target.value))
                           }}
                    />

                    <input type="text"
                           placeholder='Цена'
                           value={inputPrice}
                           onChange={(event) => {
                               event.preventDefault();
                               setInputPrice(event.target.value)
                               setIsPriceValid(validateIntValue(event.target.value))
                           }}
                    />

                    <input type="text"
                           placeholder='Ссылка на фото'
                           value={inputImg}
                           onChange={(event) => {
                               event.preventDefault();
                               setInputImg(event.target.value)
                               setIsImgValid(validateUrl(event.target.value))
                           }}
                    />

                    <input type="text"
                           placeholder='Количество'
                           value={inputCount}
                           onChange={(event) => {
                               event.preventDefault();
                               setInputCount(event.target.value)
                               setIsCountValid(validateIntValue(event.target.value))
                           }}
                    />
                </div>
                <div className={styles.form_buttons}>
                    <button
                        disabled={!isNameValid || !isPriceValid || !isImgValid || !isCountValid}
                        onClick={clickSubmit}
                    >
                        {buttonText}
                    </button>
                    <button onClick={onClose}>Отмена</button>
                </div>
            </div>
        </div>
    );
}