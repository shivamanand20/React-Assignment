import { useState ,useEffect } from "react";

export default function CreateUseStateCounter() {
    var [counter, setCounter] = useState(0);

    
    useEffect(() => {
        console.log("Hello All");
    }, [])

    useEffect(() => {
        console.log("Hello All 1");
    })
    // debugger;

    // function incrementCounter() {
    //     setCounter(counter + 1);
    //     console.log(counter);
    // }

    // setInterval(incrementCounter,1000)

    setTimeout(()=>{
        setCounter (counter+1);
    } ,1000);

    return (
        <div>
            <h1>Counter Value is: {counter}</h1>
            {/* /* <input type="button" onClick={incrementCounter} value="Increment Counter" /> */}
        </div>
    )
}