import React,{useState} from 'react'
import '../css/ppprgm.css'
import copyicon from '../images/copyicon.png'
export default function Copybtnpp({text}) {
    const [copyStatus, setCopyStatus] = useState(null);
  
    const handleCopy = () => {
      navigator.clipboard.writeText(text);
      setCopyStatus('Copied!');
      setTimeout(() => setCopyStatus(null), 2000); // clear the message after 2 seconds
    };
  return (
   <>
   {copyStatus && <p style={{color:"green"}} id="copybtn">{copyStatus}</p>}
    <p onClick={handleCopy} id="copybtn"><img src={copyicon} alt="copybtn"/>Copy Code</p>
   </>
  )
}
