import {prisma} from "@/src/5_shared/services/prisma";

export interface task {
    id: number
    title: string
    body: string
    complete: boolean
    endDate: Date
    createdAt: Date
    updated: Date
}

export interface ITask {
    // task: Partial<task>
    id: number
    title: string
    body: string
    complete: boolean
    endDate: Date
    createdAt: Date
    updated: Date
}

export enum Status {
    completed = "completed",
    incomplete = "incomplete",
    late = "late",
}

export async function createTask({title, body, complete, endDate} : any){
    await prisma.task.create({data: {title, body, complete, endDate}});
}

export async function deleteTask({id} : any){
    await prisma.task.delete(id);
}

export async function updateTask({id, title, body, complete, endDate}: any){
    await prisma.task.update({where: {id}, data:{title, body, complete, endDate}});
}

export async function toggleTask({id, complete}: any){
    await prisma.task.update({where: {id},  data: {complete: !complete }});
}


export async function getTask({id}: any){
    return prisma.task.findFirst({where: {id}});
}

export async function getTasks(where = {}){
    return prisma.task.findMany(where);
}