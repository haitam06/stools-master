import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import './footer.css'
import "../variables.css"
export default function Footer() {
    return (
        <>
            <div className="footer-wrap">
                <footer>
                    <div className="ftext">
                        <h1 className='ft'>STools Hub</h1>
                        <h2 className='ft2'>Make your tasks effortlessly achievable</h2>
                    </div>
                    <div className="social">
                        <h2 className='ft'>Github</h2>
                        <div className="accs">
                            <div className="icons">
                                <FontAwesomeIcon icon={faGithub} />
                            </div>
                            <div className="users">
                                <a href='https://github.com/ftouuh/stools' target='_blank' className='a'>click here</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}
