import {prisma} from "@/src/5_shared/services/prisma";

type task = {
    id: number
    title: string
    body: string
    complete: string
    endDate: Date
    createdAt: Date
    updated: Date
}

interface ITask {
    task: Partial<task>
}

export function createTask({title, body, complete, endDate} : ITask){
    prisma.task.create({data: {title, body, complete, endDate}});
}

export function deleteTask({id} : ITask){
    prisma.task.delete(id);
}

export function updateTask({id, title, body, complete, endDate}: ITask){
    prisma.task.update({where: id, data:{title, body, complete, endDate}});
}

export function toggleTask({id, complete}: ITask){
    prisma.task.update({where: id, data:{complete}});
}

export function getTask({id}: ITask){
    return prisma.task.findFirst({where: id});
}

export function getTasks(){
    return prisma.task.findMany();
}