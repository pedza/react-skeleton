import React, {Component} from 'react';
import H1Components from './component';
import APICall from './componentAPICall'

class App extends Component{
    
    render(){
        var namesArray = ["ivica", "pedza", "vesna", "dekso"]
        const h1Component = namesArray.map((item) => <H1Components key={item} text={item} />);
        var api = APICall.item
        
       
        return (
            
            <div className="mainDiv container-fluid text-left">
                <div className="row">
                    <div className="col">
                        {api} 
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        Temperature
                    </div>
                </div>
            </div>
            
        )
    }
}

export default App;
