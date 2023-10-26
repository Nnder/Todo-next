import React from 'react';
import {createTask} from "@/src/4_entities/task/model";
import FormInputs from "@/app/create/FormInputs";

import styles from './styles.module.css';

const Page = async () => {
    async function create(formData: FormData){
        "use server";
        const title = formData.get("title");
        const body = formData.get("body");
        // @ts-ignore
        const endDate = new Date(formData.get("endDate"));
        await createTask({title, body, complete: false, endDate})
    }

    // {title, body, complete, endDate}

    return (
        <div>
            <form action={create} className={styles.form}>
                <FormInputs/>
                <button type="submit" className={styles.formButton}>Create</button>
            </form>
        </div>
    );
};

export default Page;