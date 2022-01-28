import React, { useContext, useEffect, useState } from "react";
import { Button, TextInput } from "@mantine/core"
import { Todo } from '../utils/Interfaces'
import { GlobalContext } from "../context/GlobalState"

const NewTodoInput = () => {
    const { dispatch } = useContext(GlobalContext);
    const [todo, setTodo] = useState<string>("");

    const submitTodo = (e: React.FormEvent) => {
        e.preventDefault();
        const newTodo = {
            id: JSON.stringify(Math.floor(Math.random() * 1000)),
            text: todo,
            completed: false
        }

        dispatch({
            type: "ADD_TRANSACTION", payload: newTodo
        });

        setTodo("");
    }

    return (
        <div>
            <form onSubmit={submitTodo} className="input">
                <TextInput
                    label="Add a Todo"
                    variant="filled"
                    placeholder="Take out the trash"
                    value={todo}
                    onChange={(e) => { setTodo(e.target.value) }}
                />
                <Button
                    variant="light"
                    color="teal"
                    type="submit"
                    size="sm"
                    styles={(theme) => ({
                        root: {
                            width: 45,
                            padding: 0,
                            alignSelf: "flex-end",
                        }
                    })}
                    {...(!todo && { disabled: true })}
                >+</Button>
            </form>
        </div>
    );
};

export default NewTodoInput;
