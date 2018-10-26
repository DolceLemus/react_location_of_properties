import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import PropertyItem from './property';
import '../style/properties.css';

const PropertiesList = (props) => {
    return (
        <form className="container_list p-0 col-xl-4 col-lg-5 col-md-6 col-12" >
            <ul className="list m-0 p-0">
                {props.list.map((properties) => {
                        return <PropertyItem codigo={properties.id}
                                             municipio={properties.municipio}
                                             colonia={properties.colonia}
                                             construccion={properties.construccion}
                                             habitaciones={properties.habitaciones}
                                             banos={properties.banos}
                                             estacionamiento={properties.estacionamiento}
                                             precio={new Intl.NumberFormat('en-MX', { 
                                                minimumFractionDigits: 0, 
                                                maximumFractionDigits: 0 
                                                }).format(properties.precio)}
                                             moneda={properties.moneda}
                                             imagen={properties.imagen}
                                              />
                    })
                }
            </ul>
        </form>
    )
}

export default PropertiesList;