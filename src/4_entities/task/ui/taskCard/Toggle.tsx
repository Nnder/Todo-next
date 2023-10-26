import React from 'react';
import styles from "@/src/4_entities/task/ui/taskCard/styles.module.css";
import {toggle} from './model/model';
import {revalidateTag} from "next/cache";
import {Status} from "@/src/4_entities/task/model";
import CheckBox from "@/src/4_entities/task/ui/taskCard/CheckBox";

const Toggle = async ({task, status} : any) => {
    async function upTask(formData: FormData){
        "use server";
        // formData.get("toggle");
        // await toggle(task);
        // revalidateTag('/');
    }


    // submit при изменении input

    // варианты переделать button и сделать из него checkbox но с type=submit
    // найти решение моей проблемы чтобы при изменении input форма отправлялась
    return (
        <form action={upTask}>
            {/*<input type="checkbox" name="toggle"  className={styles.checkbox} defaultChecked={status === Status.completed}/>*/}
            <CheckBox todo={task} defaultChecked={status === Status.completed}/>
            {/*<button type="submit">Отправить</button>*/}
        </form>
    );

    // export async function updateTodoAction(
    //     id: string,
    //     update: { tilte?: string; completed?: boolean },
    //     path: string
    // ) {
    //     await updateTodo(id, update);
    //     revalidatePath(path);
    // }

};

export default Toggle;