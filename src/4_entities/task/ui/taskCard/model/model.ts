"use server";
import {ITask, task, toggleTask, Status} from '@/src/4_entities/task/model'
import {prisma} from "@/src/5_shared/services/prisma";
import {revalidatePath} from "next/cache";



export const status = async (task: any) =>{
    if(task.complete)
        return Status.completed;
    else if(!task.complete && task.endDate < Date.now())
        return Status.late;
    return Status.incomplete;
}

export const trim = async (text: string, size: number) : Promise<string> => {
    if (text.length > size)
        text = text.slice(0, size).trim() + "...";
    return text
}

export async function toggle(task: any){
    await toggleTask(task);
    // task.complete = !task.complete;
    // setStatus(status(task));
}


export async function updateTodoAction(
    task: any,
    path: string
) {
    await toggleTask(task);
    revalidatePath(path);
}