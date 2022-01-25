import React, { useState } from 'react'  //state & handling event

export default function TextForm(props) {//props


    const handleUpCaseClick = () => {
        // console.log("Uppcase click" + text);
        const newCase = text.toUpperCase();
        setText(newCase);
        props.showAlert('Uppercase Succesfull', 'success')
    }

    const handleLowCaseClick = () => {
        // console.log("Uppcase click" + text);
        const newCase = text.toLowerCase();
        setText(newCase);
        props.showAlert('Lowcase Succesfull', 'success')
    }

    const handleLowClearClick = () => {
        // console.log("Uppcase click" + text);
        const newCase = ("");
        setText(newCase);
        props.showAlert('Text Clear', 'warning')
    }

    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value);
    }



    const [text, setText] = useState("Enter the Text");
    //state

    return (
        <>
            <div className='container' style={{ backgroundColor: props.Mode === 'dark' ? '#052846' : 'white', color: props.Mode === 'dark' ? 'white' : '#052846' }}>
                <h1>{props.heading}</h1>
                <div >
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.Mode === 'dark' ? '#052846' : 'white', color: props.Mode === 'dark' ? 'white' : '#052846' }} onChange={handleOnChange} id="myBox" rows="8" ></textarea>
                </div>
                <button disabled={text.length === 0} type="button" className="btn btn-danger my-2" onClick={handleUpCaseClick}>UpperCase</button>
                <button disabled={text.length === 0} type="button" className="btn btn-dark my-2 mx-2" onClick={handleLowCaseClick}>LowerCase</button>
                <button disabled={text.length === 0} type="button" className="btn btn-primary my-2 mx-2" onClick={handleLowClearClick}>Clear Text</button>

            </div>
            <div className="container" style={{ backgroundColor: props.Mode === 'dark' ? '#052846' : 'white', color: props.Mode === 'dark' ? 'white' : '#052846' }}>
                <hr />
                <h3>Your Summary</h3>
                <hr />
                <p><b> {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} </b>words are <b> {text.length} </b> characters</p>
                <p><b> {0.08 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} </b> minute to read</p>
                <hr />
                <h2>Preview</h2>
                <hr />
                <p>{text.length > 0 ? text : "Enter some text to preview"}</p>
            </div>
        </>
    )

}

