import { useState } from "react";

const FilterComponent=(props)=>{

    const [input, setInput] = useState("")

    const inputHandler = (e) => {
        setInput(e.target.value);
        props.onFilter(e.target.value);
    }

    return (
        <form>
            <label>Please Search here :</label>
            <input type="text" placeholder="Search" onChange={inputHandler} value={input}></input>
        </form>
    )
}

export default FilterComponent