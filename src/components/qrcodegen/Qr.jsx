import React, { useState, useRef, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import * as htmlToImage from 'html-to-image';
import './Qr.css';
import Header from '../header/header';
import Loader from '../loader/loader';

const Qr = () => {
    const [qrValue, setQrValue] = useState('');
    const [activeType, setActiveType] = useState('text');
    const qrCodeRef = useRef(null);

    const handleButtonClick = (type) => {
        setActiveType(type);
        setQrValue('');

    };

    const handleChange = (e) => {
        setQrValue(e.target.value);
    };
    const handleDownload = () => {
        if (qrCodeRef.current) {
            htmlToImage.toPng(qrCodeRef.current)
                .then((dataUrl) => {
                    const link = document.createElement('a');
                    link.href = dataUrl;
                    link.download = 'qrcode.png';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                })
                .catch((error) => {
                    console.error('Error converting SVG to PNG:', error);
                });
        }
    };
    const [loader, setLoader] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        setLoader(false);
      }, 1350);
        
    }, []);
    return (
        <>
            {loader ? <Loader/> : <>
            <Header/>
            <div className="qrsection">
                <div className='alll'>
                    <div className="title">
                        <h1 className='qrtitls'>
                            QrCode Generator Tool
                        </h1>
                        <h2 className='qrtitls2'>
                            Make your Qr-code
                        </h2>
                    </div>

                    <div className="sides">
                        <div className="show">
                            <textarea
                                className="text"
                                onChange={(e) => handleChange(e)}
                                placeholder='Type your URL'
                            />


                        </div>
                        <div className="qrs">
                            <div className='qrcode' ref={qrCodeRef}>
                                {!qrValue ? (
                                    <div className='qr' style={{ opacity: 0.2 }}>
                                        <QRCodeSVG value={qrValue} />
                                    </div>
                                ) : (
                                    <div className='qr' style={{ opacity: 1 }}>
                                        <QRCodeSVG value={qrValue} />
                                    </div>
                                )}

                            </div>
                            <button onClick={handleDownload} disabled={qrValue.length === 0}>
                                Download
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>}    
    </>
        

    );
};

export default Qr;