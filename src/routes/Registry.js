import React, {useState,useEffect} from "react"
import {Link} from "react-router-dom"

function Registry(){
    const [items,setItem] = useState([])
    const [textInput,setTextInput] = useState("")
    const [error,setError] = useState(false)

    const addItem = (e) => {
        e.preventDefault();
        if(error) return

        
        const temp = [...items]
        temp.push(textInput)
        setItem(temp)
        setTextInput("")
        console.log(temp)
    }
    
    useEffect(() => {
        setError(textInput.length > 10);
    },[textInput])
    
    const removeItem = (index) => {
        let temp = [...items]
        temp.splice(index,1)
        setItem(temp)
    }

    const editItem = (index) => {
        if(error) return

        let temp = [...items]
        temp[index] = textInput
        setItem(temp)

    }

    return (
        <div>
            <h1>Registry</h1>
            <Link to="/home">Click here to go to home</Link>
            <form onSubmit={addItem}>
                <label>name:
                    <input type="text" value={textInput} onChange={(e) => setTextInput(e.target.value)}/>
                </label>
                <button type="submit" >Add to registry</button>
            </form>
            {error? <span style={{color:"Red"}}>Error occured</span>:null}

            {
                items.map((item, index) => {
                    return (
                        <li key={index}>{item} <button onClick={() => editItem(index)}>Edit</button><button onClick={() => removeItem(index)}>remove</button></li>
                    )
                })
            }
        </div>
    )
}
export default Registry;