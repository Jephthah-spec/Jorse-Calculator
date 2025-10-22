import React from "react";
import { useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";

export function Calculator() {
    const [input, setInput] = useState("")
    let result = localStorage.getItem("history");

    const showInput = (value) =>{
        setInput((prev)=> prev + value)
    }
    const clearInput = ()=>{
        setInput("")
    }

    const calculate = () =>{
        if (setInput("")) {
            alert("Input a value")
        }
        try {
            setInput(eval(input))
            localStorage.setItem("history", input)
            
        } catch (error) {
            setInput(error)
        }
    }
    const Del = ()=>{
        setInput(input.slice(0, -1))
    }

    return(
        <div className="Calculator">
            <div className="OutputCont">

                <div className="Output" onClick={()=>{
                    setInput("");
                    showInput(result)
                    if (!result) {
                        showInput("History Cleared")
                    }
                }}>
                 {result} 
                </div>
                <button className="Clear" onClick={
                    ()=>{
                        document.querySelector(".Output").innerHTML = "";
                        localStorage.clear()     
                    }
                 }>Clear history</button>
                 <input type="text" className="Input" value={input} id="input" readOnly/>
            </div>
            <div className="InputCont">
                <button 
                    className="btn"onClick={() =>showInput("1")}
                    style={{gridColumn: "1/1", gridRow: "1/1"}}
                >1
                </button>
                <button 
                    className="btn" onClick={() =>showInput("2")}
                    style={{gridColumn: "2/2", gridRow: "1/1"}}
                >2
                </button>
                <button 
                    className="btn" onClick={() =>showInput("3")}
                    style={{gridColumn: "3/3", gridRow: "1/1"}}
                >3
                </button>
                <button
                    className="btn" onClick={() =>calculate()}
                    style={{gridColumn: "4/4", gridRow: "1/1"}}
                >=
                </button>
                <button 
                    className="btn" onClick={() =>showInput("4")}
                    style={{gridColumn: "1/1", gridRow: "2/2"}}
                >4
                </button>
                <button 
                    className="btn" onClick={() =>showInput("5")}
                    style={{gridColumn: "2/2", gridRow: "2/2"}}
                >5
                </button>
                <button 
                    className="btn" onClick={() =>showInput("6")}
                    style={{gridColumn: "3/3", gridRow: "2/2"}}
                >6
                </button>
                <button 
                    className="btn" onClick={() =>clearInput()}
                    style={{gridColumn: "4/4", gridRow: "2/2", color: "red"}}
                >C
                </button>
                <button 
                    className="btn" onClick={() =>showInput("7")}
                    style={{gridColumn: "1/1", gridRow: "3/3"}}
                >7
                </button>
                <button 
                    className="btn" onClick={() =>showInput("8")}
                    style={{gridColumn: "2/2", gridRow: "3/3"}}
                >8
                </button>
                <button 
                    className="btn" onClick={() =>showInput("9")}
                    style={{gridColumn: "3/3", gridRow: "3/3"}}
                >9
                </button>
                <button 
                    className="btn" onClick={() =>Del()}
                    style={{gridColumn: "4/4", gridRow: "3/3"}}
                ><FaDeleteLeft color="red"/>
                </button>
                <button 
                    className="btn" onClick={() =>showInput("0")}
                    style={{gridColumn: "2/4", gridRow: "4/4"}}
                >0
                </button>
                <button 
                    className="btn" onClick={() =>showInput(".")}
                    style={{gridColumn: "4/4", gridRow: "6/6"}}
                >.
                </button>
                <button 
                    className="btn" onClick={() =>showInput("+")}
                    style={{gridColumn: "1/1", gridRow: "5/5"}}
                >+
                </button>
                <button 
                    className="btn" onClick={() =>showInput("-")}
                    style={{gridColumn: "2/2", gridRow: "5/5"}}
                >-
                </button>
                <button 
                    className="btn" onClick={() =>showInput("*")}
                    style={{gridColumn: "3/3", gridRow: "5/5"}}
                >x
                </button>
                <button 
                    className="btn" onClick={() =>showInput("/")}
                    style={{gridColumn: "4/4", gridRow: "5/5"}}
                >/
                </button>
                <button 
                    className="btn" onClick={()=> showInput("(")}
                    style={{gridColumn: "1/2", gridRow: "6/6"}}
                >(
                </button>
                <button 
                    className="btn" onClick={()=> showInput(")")}
                    style={{gridColumn: "2/3", gridRow: "6/6"}}
                >)
                </button>
                <button 
                    className="btn" onClick={()=> showInput("%")}
                    style={{gridColumn: "3/4", gridRow: "6/6"}}
                >%
                </button>
            </div>
        </div>
    )
}