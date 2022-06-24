import React, { useState } from "react";
import { Button } from 'reactstrap';

import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const Cropper = (props) => {
    const [cropConfig, setCropConfig] = useState(
        // default crop config
        {
            // unit: "%",
            // width: 20,
            // height: 20,
            aspect: 1 / 1
        }
    );
    const [imageRef, setImageRef] = useState();
    const cropImage = (crop) => {
        if (imageRef && crop.width && crop.height) {
            const croppedImage =  getCroppedImage(
                imageRef,
                crop,
                "croppedImage.jpeg" // destination filename
            );
    
            // calling the props function to expose
            // croppedImage to the parent component
            props.setCroppedImage(croppedImage);
        }
    }

    const getCroppedImage = (sourceImage, cropConfig, fileName) => {
        // creating the cropped image from the source image
        const canvas = document.createElement("canvas");
        const scaleX = sourceImage.naturalWidth / sourceImage.width;
        const scaleY = sourceImage.naturalHeight / sourceImage.height;
        canvas.width = cropConfig.width;
        canvas.height = cropConfig.height;
        const ctx = canvas.getContext("2d");
    
        ctx.drawImage(
            sourceImage,
            cropConfig.x * scaleX,
            cropConfig.y * scaleY,
            cropConfig.width * scaleX,
            cropConfig.height * scaleY,
            0,
            0,
            cropConfig.width,
            cropConfig.height
        );

        const base64Image = canvas.toDataURL('image/jpeg');
        return base64Image;
    }

    return (
        <>
            <p>Click and drag cursor to crop</p>
            <ReactCrop
                src={props.src}
                crop={cropConfig}
                circularCrop={props.circleCrop}
                ruleOfThirds
                onImageLoaded={(imageRef) => setImageRef(imageRef)}
                onComplete={cropImage(cropConfig)}
                onChange={(cropConfig) => setCropConfig(cropConfig)}
                crossorigin="anonymous"  // to avoid CORS-related problems
            />
        </>
    )
}

export default Cropper;