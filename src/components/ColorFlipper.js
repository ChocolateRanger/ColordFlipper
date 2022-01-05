import React from 'react'

export default function ColorFlipper() {
    const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    function OnClickColorToggle() {
        const btn = document.getElementById('colorid');
        let colors = "#";
        for (let i = 0; i < 6; i++) {
            colors += hex[getRandomNumber()];
        }
        document.body.style.backgroundColor = colors;
        btn.innerText = colors;
        btn.style.color = colors;
        
        

    }

    function getRandomNumber() {
        return (Math.floor(Math.random() * hex.length))
    }


    return (
        <>
            <div>
                <h1>
                    Color Flipper
                </h1>
            </div>
            <div className='box'>
                <div className='colorName'>
                    <h2>
                        Color Code:
                        <span id='colorid'>
                            #FFFFFF
                        </span>
                    </h2>
                </div>
                <div>
                    <button id='btn-change' onClick={OnClickColorToggle}>Click to change Color</button>
                </div>


            </div>
        </>
    )
}
