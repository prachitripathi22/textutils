import React ,{useState} from 'react'

export default function TextForm(props) {
  const [text,setText]= useState ("Enter the text here"); 
  // text ="new text" wrong way to update text
  // setText("gvcdbcd"); right way
  const handleUpclick = () =>{
    //  console.log("Upper case was clicked");
     let newtext=text.toUpperCase();
     setText(newtext);
  }

  //this onhachange function will let us write text in the textform.
  const handleOnchange = (event) =>{
    // console.log("on change");
    setText(event.target.value);   
  }

  const handleLoclick =()=>{
    setText(text.toLowerCase());
  }

  // const handleCamelclick=()=>{
    
  // }
  const handleClearclick=() =>{
   setText("");
  }
  const handleCopyclick=()=>{
    var text=document.getElementById("myBox")
    text.select();
    // text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
  }
  
  
  return (
    <>      
    <div className= "container" style={{color : props.mode==='dark'?'white':'black'}}>
      <h1 >{props.heading}</h1>
      <div className= "mb-3">
      <textarea class="form-control" id="myBox" rows="8" value={text} style={{backgroundColor: props.mode==='dark'?'#073981':'white',
    color:props.mode==='dark'?'white':'black'}} onChange={handleOnchange}></textarea>
      </div>
      <button type="button" class="btn btn-primary mx-1" onClick={handleUpclick}>Convert to uppercase</button>    
      <button type="button" class="btn btn-primary mx-1" onClick={handleLoclick}>Convert to lowercase</button>
      {/* <button type="button" class="btn btn-primary" onClick={handleCamelclick}>Convert to Camelcase</button>  */}
      <button type="button" class="btn btn-primary mx-1" onClick={handleClearclick}>Clear text</button>
      <button type="button" class="btn btn-primary mx-1" onClick={handleCopyclick}>Copy text</button>
      
      
    </div>
    <div className='container my-3' style={{color : props.mode==='dark'?'white':'black'}} >
      <h1> 
        Your Text Summary
      </h1>
      <p> {text.split(" ").length} words and {text.split("").length} characters</p>
      <h3>Preview</h3>
      {text }
    </div> 
    </>
   )
}
