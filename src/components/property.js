
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ImageProperty from './image';
import '../style/property.css';
import { FaBed } from 'react-icons/fa';
import { FaBath } from 'react-icons/fa';
import { FaCar } from 'react-icons/fa';

const PropertyItem = (props) => {

    return(
        
        <li className="item border-top border-bottom row m-0">
            <ImageProperty imagen={props.imagen} />
            <div className="col-xl-8 col-lg-8 col-md-7 col-8" >
                <span className="font-weight-bold pt-2 row ml-xl-5 pl-xl-5 ml-lg-3 pl-lg-3 ml-md-2 pl-md-2 ml-3 pl-3"><p className="code ml-xl-4 ml-lg-4 ml-md-4 text-secondary mr-1">Codigo: </p> <p className="code">{props.codigo}</p></span>
                <p className="ubication mb-0"> {props.colonia}, {props.municipio}</p>
                <p className="description mb-0">{props.construccion}m² <FaBed /> {props.habitaciones} <FaBath /> {props.banos} <FaCar /> {props.estacionamiento}</p>
                <p className="price font-weight-bold  text-primary">{props.precio} {props.moneda}</p>
            </div>
        </li>
    )
}

export default PropertyItem;