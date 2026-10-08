import React, { useEffect, useState } from "react";
import us from "./us.png"
import us2 from "./us2.png"
import us3 from "./us3.png"
import "./about.css"
import "../variables.css"
import Header from "../header/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Loader from "../loader/loader";
export default function About() {
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 1350);
    }, []);

    const [allaboutOFF, setAllAbout] = useState(false)
    const [ima5iOFF, setIma5i] = useState(true)

    

    const flip = () => {
        const img = document.querySelector('.ima5i');
        const img2 = document.querySelector('.ima5i-off');
        if (!allaboutOFF && ima5iOFF) {
            img2.style.display = 'flex';
            setAllAbout(!allaboutOFF);
            setTimeout(() => {
                setIma5i(!ima5iOFF);
            }, 50);
        }
        if (allaboutOFF && !ima5iOFF) {
            setIma5i(!ima5iOFF);
            setAllAbout(!allaboutOFF);
            setTimeout(() => {
                img.style.display = 'none';
            },100);
        }
        

        // setTimeout(() => {
        //   if (img && img.style.display !== 'none') {}
        //     img.style.display = 'none';
        //   }
        // }, 300);
        // if (img2 && img2.style.display === 'none') {
            
        //   }
      };
    
    return (
        <>
            {loader ? <Loader /> :
                <>
                    <Header />
                    <div className="absection">
                        <div className={allaboutOFF ? 'allabout-off' : 'allabout'}>
                            <div className="title">
                                <h1 className="abtitls">About Us</h1>
                                {/* <h2 className="abtitls">Who are we</h2> */}
                            </div>
                            <div className="about">
                                <p>Welcome to STools Hub, a collaborative project crafted by Jihad Bourbab, Rida Elklie, and Zayd Ftouh—three individuals driven by a shared passion for development. Our project encompasses three distinct tools, each designed to streamline various tasks. Rida's inventive spirit is evident in the creation of a QR code generator, while Jihad's contribution materializes in an image-to-PDF converter tool. Zayd's expertise takes center stage with a text extractor tool. As friends who initially met in our development class at ISMO school, we envisioned STools Hub as a means to simplify everyday processes. Our mission is to make your tasks effortlessly achievable through innovative tools that blend functionality and user-friendly design. Join us on this exciting journey of simplification and efficiency!</p>
                            </div>
                        </div>
                        <div className={ima5iOFF ? 'ima5i-off' : 'ima5i'}>
                            <img src={window.innerWidth >= 850 ? us : (window.innerWidth >= 580 && window.innerWidth <= 850 ? us3 : us2)} alt="" />
                        </div>
                        <button className={ima5iOFF ? 'flip' : 'flip-photo'} onClick={flip}><FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>
                </>
            }

        </>
    )
}