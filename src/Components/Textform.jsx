import React,{useState} from 'react'

export default function Textform(props) {
    const [text, setText] = useState("Input Your text");
    // setText("Entrer Your Text");

    const handleOnChange = (event) => {
      setText(event.target.value)
    }

    const handleUpChange = () => {
      let newText =  text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to UpperCase","success")
    }

    const handleLowChange = () =>   {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to   LowerCase","success")

    }
    const handleSpeak = () => {
      let newText = new SpeechSynthesisUtterance();
      newText.text = text;
      window.speechSynthesis.speak(newText);

    }
    const handleClear = () => {
      let newText = "";
      setText(newText);
      props.showAlert("Converted to Clear","success")

    }
    const handleCopyText  = () => {
      navigator.clipboard.writeText(text);
      props.showAlert("Copy on ClipBoard","success")

      // setText
      

    }

    const handleRemoveExtraSpace = () => {
      let newText = text.split(/[ ] + /);
      setText(newText.join(" "));
      props.showAlert("Converted to RemoveExtraSpace","success")

    }
  return (
    <div className='mb-3 mx-5 my-5'>
        <h1>{props.heading}</h1>
    
  <textarea className={`form-control bg-${props.mode === 'light' ? 'light':'dark'} text-${props.mode === 'light' ? 'dark': 'light'}`} id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
  <button className='btn btn-outline-info my-2' disabled={text.length === 0 } onClick={handleUpChange}>Convert to Upper Case</button>
  <button className='btn btn-outline-info my-2 mx-3' disabled={text.length === 0 } onClick={handleLowChange}>Convert to Lower Case</button>
  <button className='btn btn-outline-info my-2 mx-3' disabled={text.length === 0 } onClick={handleSpeak}>Speak</button>
  <button className='btn btn-outline-info my-2 mx-3' disabled={text.length === 0 } onClick={handleClear}>Clear</button>
  <button className='btn btn-outline-info my-2 mx-3' disabled={text.length === 0 } onClick={handleCopyText}>Copy Text</button>
  <button className='btn btn-outline-info my-2 mx-3' disabled={text.length === 0 } onClick={handleRemoveExtraSpace}>Remove Extra Space</button>

  <div className='container'>
    <h2>Your Text Summary</h2>
    <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} Words</p>
    <p>{text.length} Characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Reading Time</p>
    <h3>Preview</h3>
    <p>{text.length>0 ? text : "Nothing to Preview !"}</p>
  </div>
</div>
  )
}
