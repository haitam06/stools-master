import React from 'react'
import logo from './logo4.png';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './header.css';
import "../variables.css"
export default function Header() {
    const [isactive, setisactive] = useState(false)
    const change = () => {
        setisactive(!isactive);
        if (isTools) {
            setisTools(!isTools);
        }
    }
    const [isTools, setisTools] = useState(false);
    const showTools = (e) => {
        e.preventDefault();
        setisTools(!isTools);
    }
    return (
        <>
            <header>
                <div className="head">
                    <Link to='/'>
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                    </Link>
                    <div className="infos">
                        <Link to='/'><p className='a'>Home</p></Link>
                        <Link to='/about'><p className='a'>About</p></Link>
                        <a href="" className='a aa' onClick={showTools}>Tools <div className={isTools ? 'arroww' : 'arrow'}><FontAwesomeIcon icon={faCaretDown} /></div></a>
                        <a href='https://www.buymeacoffee.com/stools' target='_blank'
                            className='donate'>Donate</a>
                    </div>
                    <button className={`hamburger ${isactive ? 'is-active' : ''}`} onClick={change}>
                        <div className='bar'></div>
                    </button>
                </div>
                <div className="tools-wrap">
                    <div className={isTools ? 'tools' : 'toolss'}>
                        <Link to='/qrcode-generator'><p className='aa'>QrCode Generator</p></Link>
                        <Link to='/text-extractor'><p className='aa'>Image Text Extractor</p></Link>
                        <Link to='/image-to-pdf'><p className='aa'>Images PDF Converter</p></Link>
                    </div>
                </div>
            </header>

            <div className={`infos-mobile ${isactive ? 'is-active' : ''}`}>
                <a href="/" className='a'>Home</a>
                <a href="about" className='a'>About</a>
                <a href="" className='aa' onClick={showTools}>Tools <div className={isTools ? 'arroww' : 'arrow'}><FontAwesomeIcon icon={faCaretDown} /></div></a>
                <a href='https://www.buymeacoffee.com/stools' target='_blank'
                    className='donate'>Donate</a>
            </div>
        </>
    )
}