import type {Todo} from "../types/todos.ts";

interface TodoSummaryProps{
    todos:Todo[];
    deleteAllCompleted: () => void;
}

export default function TodoSummary({
    todos,
    deleteAllCompleted
    }:TodoSummaryProps){
    const completedTodos =todos.filter(todo => todo.completed);


    return(
        <div className="text-center space-y-2">
            <p className="text-sm font-medium">
                {completedTodos.length}/{todos.length} todos completed
            </p>

            {completedTodos.length > 0 && (
                <button onClick={deleteAllCompleted}
                className="text-red-500 hover:unerline text-sm font-medium"
                >
                    Delete
                </button>
            )}

        </div>
    )
}