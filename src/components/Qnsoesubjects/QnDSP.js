import React, { useState } from 'react';
import DSPSEMP1 from '../QnImgs/DSP-SEM-P1.jpg';
import DSPMID1 from '../QnImgs/DSP-MID1-P1.jpg';
import DSPMID2 from '../QnImgs/DSP-MID2-P1.jpg';
import "../css/qnpagerightcon.css"

export default function QnDSP() {
  const [showImagesSem, setShowImagesSem] = useState(false);
  const [showImagesMid1, setShowImagesMid1] = useState(false);
  const [showImagesMid2, setShowImagesMid2] = useState(false);

  const handleButtonClickSem = () => {
    setShowImagesSem(!showImagesSem);
  };
  const handleButtonClickMid1 = () => {
    setShowImagesMid1(!showImagesMid1);
  };
  const handleButtonClickMid2 = () => {
    setShowImagesMid2(!showImagesMid2);
  };
  
  return (
    <div className='rightcon-img-1'>
      <button onClick={handleButtonClickSem} className="qnbtn-toload">
        DSP SEM 
        {/* {showImages ? 'Hide Images' : 'Show Images'} */}
      </button>
      {showImagesSem && (
        <div>
          <img className="qnpaperimg" src={DSPSEMP1} alt="P&S Question Paper 1" />
        </div>
      )}

<button onClick={handleButtonClickMid1} className="qnbtn-toload">
        DSP MID-1 
      </button>
      {showImagesMid1 && (
        <div>
          <img className="qnpaperimg" src={DSPMID1} alt="P&S Question Paper 1" />
        </div>
      )}

<button onClick={handleButtonClickMid2} className="qnbtn-toload">
        DSP MID-2
      </button>
      {showImagesMid2 && (
        <div>
          <img className="qnpaperimg" src={DSPMID2} alt="P&S Question Paper 1" />
        </div>
      )}
    </div>
  );
}
