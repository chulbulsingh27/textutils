import React, { useState } from 'react'
export default function TextForm(props) {
    const [text, setText] = useState('Enter your text here');
    const handleUpClick = () => {
        // console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to uppercase", "success");
    }
    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value);
    }
    const handleLoClick = () => {
        // console.log("uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to lowercase", "success");
    }
    const handleClearClick = () => {
        // let newText = text.toLowerCase();
        setText('');
        props.showAlert("Text has been cleared from textarea ", "success");
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text has been copied from textarea", "success");
    }
    const handleSpaces = () => {
        var newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces has been removed from textarea", "success");
    }
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
                </div>
                <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick} >Convert to uppercase</button>
                <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick} >Convert to lowercase</button>
                <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick} >Clear text</button>
                <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleCopy} >Copy text</button>
                <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleSpaces} >Remove spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element) => {return element.length !== 0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    )
}
