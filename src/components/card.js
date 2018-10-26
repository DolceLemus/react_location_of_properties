
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import PropertiesList from './properties';
import Map from './map';
import '../style/card.css';
import axios from 'axios';

class CardApp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            properties : []
        }
    }
    
    componentDidMount(){
        const endPoint = 'https://whcyt.herokuapp.com/propiedades'
        axios.get(endPoint, {
            responseType: 'json'
        })
          .then(response =>{
            this.setState({
                properties : response.data.propiedades
            },)
          })
            .catch(error => {
                console.log("Error!! " + error);
            })
    }

    render(){
        let obj = Object.keys(this.state.properties).length;
        console.log(obj);
        if(obj > 0){
            return (
                <div className="list-main m-0 p-0 col-12 row" > 
                    <Map />
                    <PropertiesList list={this.state.properties} />
                </div>
            )
        }
        return <span className="mesage-wait"> Please wait...</span> 
        
    }
}

export default CardApp;
