import React, { useEffect, useState } from 'react'
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf, faImage, faQrcode } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Loader from '../loader/loader';
import Header from '../header/header';
import "../variables.css"
import Footer from '../footer/footer';

const Home = () => {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            const sensitivity = 100;
            const deltaX = ((clientX-10) - (centerX-10)) / sensitivity;
            const deltaY = ((clientY-10) - (centerY-10)) / sensitivity;

            setRotation({ x: deltaY, y: deltaX });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);



    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1350);
    }, []);

    const above700pxStyles = window.innerWidth > 700
    ? {
        transform: `perspective(600px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transformOrigin: 'center',
      }
    : {};

    return (
        <>

            {isLoading ? <Loader /> :
                <>
                    <Header />
                    <section>
                        <div className='containerr' style={above700pxStyles}>
                            <Link to={'/qrcode-generator'}>
                                <div className="tool">

                                    <span>
                                        <FontAwesomeIcon icon={faQrcode} />
                                    </span>
                                    <p>
                                        Qr Code Generator
                                    </p>


                                </div>
                            </Link>
                            <Link to={'/text-extractor'}>
                                <div className='tool'>
                                    <span>
                                        <FontAwesomeIcon icon={faImage} />
                                    </span>
                                    <p>
                                        Image Text Extractor
                                    </p>
                                </div>
                            </Link>
                            <Link to={'/image-to-pdf'}>
                                <div className='tool'>
                                    <span>
                                        <FontAwesomeIcon icon={faFilePdf} />                </span>
                                    <p>
                                        Image  PDF Converter

                                    </p>
                                </div>
                            </Link>
                            <div className='coming-soon'>
                                <p style={{ opacity: .5 }}>Coming soon</p>
                            </div>
                            <div className='coming-soon'>
                                <p style={{ opacity: .5 }}>Coming soon</p>
                            </div>
                            <div className='coming-soon'>
                                <p style={{ opacity: .5 }}>Coming soon</p>
                            </div>

                        </div>
                        
                    </section>
                    <Footer/>
                </>
            }

        </>

    )
}

export default Home