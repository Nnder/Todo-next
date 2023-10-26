"use client";
import React, {useEffect, useState} from 'react';
import styles from './styles.module.css';

type data = {
    title: string,
    body: string,
    date: Date | null
}

const FormInputs = () => {
    const [formData, setFormData] = useState<data>(
        {
            title: "",
            body: "",
            date: null,
        }
    )

    useEffect(()=>{
        console.log(formData);
    }, [formData])

    return (
        <div className={styles.formItems}>
            <div className={styles.formItem}>
                <input type="text" name="title" placeholder="Title" required={true} className={styles.formInput}
                       onChange={(e)=>
                    setFormData(prevState => ({...prevState, "title": e.target.value})) }/>
            </div>

            <div className={styles.formItem}>
                <textarea name="body" placeholder="Body" required={true} className={styles.formTextarea}
                          onChange={(e)=>
                    setFormData(prevState => ({...prevState, "body": e.target.value})) }
                ></textarea>
            </div>

            <div className={styles.formItem}>
                <input type="date" name="endDate" required={true} className={styles.formInput}
                       onChange={(e)=>
                    setFormData(prevState => ({...prevState, "date": new Date(e.target.value)})) }/>
            </div>
        </div>
    );
};

export default FormInputs;