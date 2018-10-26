
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import axios from 'axios';
import '../style/map.css';
import PropertyItem from './property';
import ReactDOMServer from 'react-dom/server';

class Map extends React.Component {

    state = {
        points: []
    }

    componentDidMount() {
        this.getPoints()
    }

    renderMap = () => {
        loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyA17CN5naVrG0zR2c50CP5496lDkgRxXV0&callback=initMap') //key
        window.initMap = this.initMap
    }

    //https://desarrolloweb.com/articulos/axios-ajax-cliente-http-javascript.html
    //https://www.arquitecturajava.com/axios-js-una-libreria-de-promesas/
    getPoints = () => {
        const endPoint = 'https://whcyt.herokuapp.com/propiedades'
        axios.get(endPoint, {
            responseType: 'json'
        })
            .then(response => {
                this.setState({
                    points: response.data.propiedades
                }, this.renderMap())
            })
            .catch(error => {
                console.log("Error!! " + error);
            })
    }

    initMap = () => {
        let map = new window.google.maps.Map(document.getElementById('map'), { 
            center: { lat: 20.66, lng: -103.34 }, // agua azul park coords
            zoom: 12
        });


        this.state.points.map(point => {
            let latPoint = parseFloat(point.lat);
            let lngPoint = parseFloat(point.lng);

            let windowInformation = ReactDOMServer.renderToString(<PropertyItem codigo={point.id}//https://stackoverflow.com/questions/39481484/how-to-use-a-reactjs-component-as-content-string-for-google-maps-api-infowindow?rq=1
                municipio={point.municipio}
                colonia={point.colonia}
                construccion={point.construccion}
                habitaciones={point.habitaciones}
                banos={point.banos}
                estacionamiento={point.estacionamiento}
                precio={new Intl.NumberFormat('en-MX', { 
                    minimumFractionDigits: 0, 
                    maximumFractionDigits: 0 
                }).format(point.precio)} //https://www.carlrippon.com/formatting-dates-and-numbers-in-react/
                moneda={point.moneda}
                imagen={point.imagen}
            />);            

            let infowindow = new window.google.maps.InfoWindow({
                content: windowInformation
            });


            let marker = new window.google.maps.Marker({
                position: { lat: latPoint, lng: lngPoint },
                map: map,
                title: point.colonia,
                icon: './images/ubicacion.png',
                animation: window.google.maps.Animation.DROP
            });
            marker.addListener('click', function () {
                infowindow.open(map, marker);
            });
        })

    }

    render() {
        return (
            <main className="col-xl-8 col-lg-7 col-md-6 col-sm-0 p-0" >
                <div id="map"></div>
            </main>
        )
    }
}

{/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA17CN5naVrG0zR2c50CP5496lDkgRxXV0&callback=initMap"
    async defer></script> */}

//https://www.klaasnotfound.com/2016/11/06/making-google-maps-work-with-react/

function loadScript(url) {
    var index = window.document.getElementsByTagName("script")[0] //the first tag
    var script = window.document.createElement("script")
    script.src = url
    script.async = true
    script.defer = true
    index.parentNode.insertBefore(script, index) //appendChild
}

export default Map;