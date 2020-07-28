import React, {Component} from 'react';
import SearchManager from './searchManagerComponent'
import image from './Images/sunset2.jpg'


class App extends Component{
    
    render(){
       
        
       
        return (
            
            <div className="mainDiv container-fluid text-left backgroundImage">
                
              
                <div className="row">
                    <img src={image} className="imageSettings" alt="backgroundImage"/>
                    <div className="col mainWeatherDisplay">
                       <SearchManager />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                       
                    </div>
                </div>
            </div>
            
        )
    }
}

export default App;
