
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../style/image.css';

const ImageProperty = (props) => {
    return (
        <div className="image_container  h-100 col-xl-4 col-lg-4 col-md-5 m-md-0 col-4">
            <img className="image w-100 h-100"  src={props.imagen} alt={props.codigo} />
        </div>
    );
}

export default ImageProperty;