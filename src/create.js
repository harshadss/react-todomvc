import { useRef } from "react"

export default function CreateToDo({adder}) {
    let inputText = useRef();
    const addTodo = () => {
        adder(`${inputText.current.value}`);
        // clear out the text
        inputText.current.value = ""
    }
    return (
        <div className="columns">
            <div className="column is-5 is-offset-2">
                <input className="input is-primary" type="text" placeholder="What do you want to track?" ref={inputText}></input>
            </div>
            <div className="column is-1">
                <button className="button is-primary" onClick={addTodo}>Add TODO</button>
            </div>

        </div>
    )
}