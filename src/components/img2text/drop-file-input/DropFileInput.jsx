import React, { useRef, useState } from 'react';


import './drop-file-input.css';

import { ImageConfig } from './config/ImageConfig';
import "../../variables.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const DropFileInput = ({ handleImageChange }) => {

    const wrapperRef = useRef(null);

    const [fileList, setFileList] = useState([]);

    const onDragEnter = () => wrapperRef.current.classList.add('dragover');

    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');

    const onDrop = () => wrapperRef.current.classList.remove('dragover');

    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        if (newFile) {
            const updatedList = [newFile];
            setFileList(updatedList);
            handleImageChange(e);
        }

    }



    return (
        <>
            <div className="container">
                <div
                    ref={wrapperRef}
                    className="drop-file-input"
                    onDragEnter={onDragEnter}
                    onDragLeave={onDragLeave}
                    onDrop={onDrop}
                >
                    <div className="drop-file-input__label">
                        <FontAwesomeIcon icon={faPlus} />
                        <p>Drag file here or click to browse</p>
                    </div>
                    <input type="file" value="" onChange={onFileDrop} accept="image/jpeg, image/png, image/gif, image/webp" />
                </div>
                {
                    fileList.length > 0 ? (
                        <div className="drop-file-preview">

                            {
                                fileList.map((item, index) => (
                                    <div key={index} className="drop-file-preview__item">
                                        <img src={ImageConfig[item.type.split('/')[1]] || ImageConfig['default']} alt="" />
                                        <div className="drop-file-preview__item__info">
                                            <p>{item.name}</p>
                                        </div>

                                    </div>
                                ))
                            }
                        </div>
                    ) : null
                }
            </div>
        </>
    );
}



export default DropFileInput;