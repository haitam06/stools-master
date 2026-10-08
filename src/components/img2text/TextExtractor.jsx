import React, { useEffect, useRef, useState } from 'react';
import Tesseract from 'tesseract.js';
import './img2text.css'
import "../variables.css"
import DropFileInput from './drop-file-input/DropFileInput';
import Loader from '../loader/loader';
import Header from '../header/header';
const TextExtractor = () => {
  const [image, setImage] = useState('');
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState('eng');
  const textAreaRef = useRef(null);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1350);
  }, []);
  const handleImageChange = (event) => {
    if (event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const extractTextFromImage = () => {
    setIsLoading(true);
    Tesseract.recognize(
      image,
      language,
      { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
      setText(text);
      setIsLoading(false);
    });
  };
  const copyTextToClipboard = () => {
    textAreaRef.current.select();
    document.execCommand('copy');
  };

  return (
    <>
      {loader ? <Loader /> : <>
        <Header />
        <div className="section">
          <div className='textall'>
            <div className="top">
              <div className="title">
                <h1 className='txttitls'>
                  Image Text Extractor Tool
                </h1>
                <h2 className='txttitls2'>
                  Extract text from an image
                </h2>
              </div>
              <div className="upload-ext">
                <DropFileInput handleImageChange={handleImageChange} />
                <div className="options">
                  <select value={language} onChange={handleLanguageChange}>
                    <option value="eng">English</option>
                    <option value="ara">Arabic</option>
                    <option value="spa">Spanish</option>
                    <option value="fra">French</option>
                    <option value="deu">German</option>
                    <option value="rus">Russian</option>
                    <option value="chi_sim">Chinese (Simplified)</option>
                    <option value="jpn">Japanese</option>
                  </select>
                  <button onClick={extractTextFromImage} disabled={!image || isLoading}>
                    {isLoading ? 'Extracting...' : 'Extract'}
                  </button>
                </div>
              </div>
            </div>
            <div className="btm">

              <div className="txtshow">
                <textarea
                  ref={textAreaRef}
                  className="exText"
                  value={text}
                  readOnly
                />
                <button onClick={copyTextToClipboard} disabled={!text} className='copy'>
                  Copy Text
                </button>
              </div>
            </div>
          </div>
        </div>
      </>}

    </>
  );
};

export default TextExtractor;
