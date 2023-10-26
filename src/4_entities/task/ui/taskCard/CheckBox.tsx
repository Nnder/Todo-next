"use client";

// import { updateTodoAction } from "@/app/_action";
import { useTransition } from "react";
import {updateTodoAction} from "@/src/4_entities/task/ui/taskCard/model/model";

export default function CheckBox({ todo, defaultChecked }: any) {
    const [isPending, startTransition] = useTransition();

    return (
        <input
            type="checkbox"
            // checked={todo.completed}
            defaultChecked={defaultChecked}
            // checked={defaultChecked}
            name="completed"
            onChange={() =>
                startTransition(() =>
                    updateTodoAction(
                        todo,
                        "/"
                    )
                )
            }
            disabled={isPending}
            className="h-6 w-6 border-gray-300 disabled:bg-gray-300 disabled:border-gray-300 disabled:cursor-not-allowed"
        />
    );
}