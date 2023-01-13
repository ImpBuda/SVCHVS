import React from "react";
import styles from "../../Cards.module.css";


export function ModalDelete({onClose, onDelete}) {
    return (
        <div className={styles.item_form}>
            <div className={styles.form_wrapp}>
                <div className={styles.form_content}>
                    Точно удалить?
                </div>
                <div className={styles.form_buttons}>
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