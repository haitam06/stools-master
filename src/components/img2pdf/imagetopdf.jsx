import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { jsPDF } from 'jspdf';
import './imagetopdf.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Loader from '../loader/loader';
import Header from '../header/header';
import "../variables.css"

export default function Imagetopdf() {
  const [images, setImages] = useState([]);

  const handleImageUpload = (acceptedFiles) => {
    setImages(acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/jpeg , image/jpg , image/png , image/webp',
    onDrop: handleImageUpload,
  });

  const addtopdf = async () => {
    const doc = new jsPDF();

    const getImageData = (image) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => {
          resolve(reader.result);
        };
        reader.readAsDataURL(image);
      });
    };

    for (let index = 0; index < images.length; index++) {
      const image = images[index];
      const imgData = await getImageData(image);

      if (index > 0) {
        doc.addPage();
      }

      doc.addImage(imgData, 'PNG', 5, 10, 200, 200); // Adjust the coordinates and size as needed

      if (index === images.length - 1) {
        doc.save('convertedpdf.pdf');
      }
    }
  };
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1350);
    },[]);
  return (
    <>
    
    { isLoading ? <Loader/> : <>    
    <Header/>
    <div className='section'>
      <div className='all'>
        <div className='title'>
          <h1 className='pdftitls'>Images To PDF Converter Tool</h1>
          <h2 className='pdftitls2'>Convert Your Images To A PDF File</h2>
        </div>
        <div className='dnd'{...getRootProps()} >
          <div className='dndc'>
            <FontAwesomeIcon icon={faPlus} />
            <p>Drag file(s) here or click to browse</p>
          </div>
          <input {...getInputProps()} type='file' accept='image/jpeg , image/jpg , image/png , image/webp' />
        </div>


        <div className='upload'>
          <div className='imagesuploaded'>
            {images.length === 0 ? <div className="uptxt"><p>No Images Uploaded</p></div> : <></>}
            {images.lenght}
            {images.map((image, index) => (
              <div className='imagecont' key={index}>
                <img
                  src={URL.createObjectURL(image)}
                  alt={`uploaded-${index}`}
                  style={{ width: '100px', height: '100px', marginRight: '10px' }}
                />
              </div>
            ))}
          </div>

          <button onClick={addtopdf} disabled={images.length === 0} className='download'><span></span><p>Download PDF</p></button>


        </div>
      </div>
    </div>
    </>
}
    </>

  );
}
