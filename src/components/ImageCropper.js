import React, { useState } from "react";
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import './ImageCropper.css';

const Cropper = () => {
    const [crop, setCrop] = useState({ aspect: 16/9 });
    return (
        <ReactCrop crop={crop} onChange={c => setCrop(c)}>
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
        </ReactCrop>
    )
}

export default Cropper;