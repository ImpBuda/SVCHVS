import React from "react";
import "../../Cards.css";


export function ModalDelete({onClose, onDelete}) {
    return (
        <div className='item_form'>
            <div className='form_wrapp'>
                <div className='form_content'>
                   Вы точно хотите удалить?
                </div>
                <div className='form_buttons'>
                    <button
                        onClick={onDelete}
                    >
                        Удалить
                    </button>
                    <button onClick={onClose}>
                        Отмена
                    </button>
                </div>
            </div>
        </div>
    );
}