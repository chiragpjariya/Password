import { useState, useCallback, useRef, useEffect } from 'react'
import './App.css'

function App() {
  let [Password, SetPassword] = useState("");
  let [Number, SetNumber] = useState(false);
  let [Characters, SetCharcter] = useState(false);
  let [Legths, SetLegths] = useState(8);
  let [Show, SetShow] = useState(false);
  let passref = useRef(null);

  //password show/hide
  let ShowPassword = useCallback(() => {
    if (Show) {
      document.querySelector('input').type = "text";
    }
    else {
      document.querySelector('input').type = "password";
    }
  }, [Show])


  //password -showing and hidding
  useEffect(() => {
    ShowPassword();
  }, [Show])


  //password copy function
  let PassworCopy = useCallback(() => {
    window.navigator.clipboard.writeText(Password)
    passref?.current.select()
  }, [Password])


  //password generator
  let PasswordGenerater = useCallback(() => {

    let pass = "";
    let str = "ASDFGHJKLMNBVCXZQWERTYUIOP";

    if (Number) {
      str += '123547896';
      console.log("check")
    }
    if (Characters) {
      str += '!@#$%^&*';
    }


    for (let index = 0; index <= Legths; index++) {
      pass += str[Math.floor(Math.random() * str.length)]
    }

    SetPassword(pass)
  }, [SetPassword, Number, Characters, Legths])

  //password generator function calling
  useEffect(() => {
    PasswordGenerater();

  }, [Legths, Number, Characters])

  return (
    <>
      <div className="conatainer">

        <div className='one-box'>
          <input type="text" className='inputbox inputbox-height' value={Password} ref={passref} />
          <button className='copy-btn btn-copys' onClick={PassworCopy}>copy</button>
        </div>

        <div className='two-box'>
          <label htmlFor="range" id='rangelabel'>range:{Legths}</label>
          <input type="range" className='range' min={8} max={15} defaultValue={length} onChange={(e) => SetLegths(e.target.value)} />
        </div>

        <div className='third-box  '>
          <div className="check-one">
            <label htmlFor="hide-show" className='labels'>hide-show:-</label>
            <input type="checkbox" className='hide-show checkbox' onClick={() => {
              SetShow((pre) => !pre)
            }} />
          </div>
          <div className="check-two">
            <label htmlFor="number" className='labels'>number:-</label>
            <input type="checkbox" className='number checkbox' onClick={() => {
              SetNumber((pre) => !pre)
            }} />
          </div>
          <div className="check-third">
            <label htmlFor="char" className='labels'>character:-</label>
            <input type="checkbox" className='char checkbox' onClick={() => {
              SetCharcter((pre) => !pre)
            }} />
          </div>
        </div>

      </div>
    </>
  )
}

export default App
