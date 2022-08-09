function TodoIcon({id, isComplete,onComplete}) {
    console.log(isComplete);
    const markDone = () => {
        onComplete(id);
    }
    if (!isComplete) {
        return (
            <button className="button is-success is-centered is-normal" onClick={markDone}>Complete</button>
        );
    } else {
        return (
            <button className="button is-success is-centered is-normal" disabled>Done!</button>
        );
    }
}

function Todo({ text, isComplete, id, onComplete}) {
    // include the text and Icon in a column
    console.log(text);
    return (
        <div className="columns is-vcentered">
            <div className="column is-5 is-offset-2">
                <div className="box">
                    {text}
                </div>
            </div>
            <div className="column is-1">
                <TodoIcon id={id} isComplete={isComplete} onComplete={onComplete}></TodoIcon>
            </div>
        </div>
    );
}

export default function ToDoList({ data, onComplete }) {
    return (
        <ul>
            {data.map(todo => (
                <li key={todo.id}>
                    <div className="block">
                        <Todo text={todo.text} isComplete={todo.isComplete} id={todo.id} onComplete={onComplete}></Todo>
                    </div>
                </li>
            ))}
        </ul>
    );
}