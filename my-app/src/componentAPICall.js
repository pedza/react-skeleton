import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import App from './app'


class APIcall extends Component
{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items:[],
            url: "http://api.openweathermap.org/data/2.5/weather?q="+this.props.urls+"&units=metric&appid=5028b23243c12ce9c01337e4bf4ea0ae"
        }
        {console.log(this.state.url)}
    }

componentDidMount(){
    this.fetchData(this.state.url)
}

fetchData(url){

    fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result)
                this.setState({
                    isLoaded: true,
                    
                    items: result
                   
                });
               
            },
            (error)=>{
                this.setState({
                    isLoaded: true,
                    error
                });
            }
            )

}

// componentWillUnmount()
// {
   
//     {console.log(this.state.url)}
// }
timeStampFunction(unix){
    let date = new Date(unix*1000);
    let toUTCstring = date.toUTCString();
    let splitUTCString = toUTCstring.split(",", 1);
    let currentDate = toUTCstring.slice(5, -17);
    let day = date.getDay()
    let currentDay=""
    console.log(toUTCstring)
    
    
   
         switch(day){
           
            case 1:
                if (day === 1){
                    currentDay = "Monday"
                }
            break; 
            case 2:
                if (day === 2){
                    currentDay = "Tuesday"
                }
            break;
            case 3:
                if (day === 3){
                    currentDay = "Wednesday"
                }
            break;
            case 4:
                if (day === 4){
                    currentDay = "Thursday"
                }
            break;
            case 5:
                if (day === 5){
                    currentDay = "Friday"
                }
            break;
            case 6:
                if (day === 6){
                    currentDay = "Saturday"
                }
            break;
            case 6:
                if (day === 7){
                    currentDay = "Sunday"
                }
            break;
            default: currentDay = "no such day"
        }
   
    
    
    return currentDay + " " + currentDate
    
}

componentDidUpdate(prevProps){
    
    if (prevProps.urls != this.props.urls){
        
        this.fetchData("http://api.openweathermap.org/data/2.5/weather?q="+this.props.urls+"&units=metric&appid=5028b23243c12ce9c01337e4bf4ea0ae")
        console.log(prevProps)
        console.log(this.props.urls)
    }
}

    render(){
        
        {console.log(this.state.url)};
        const {error, isLoaded, items} = this.state;
        const {main, weather, sys, dt} = items;

        if(this.state.error != null){
            return <div>{error.message}</div>
        
        }
        
        let weatherIcon = function(array){
            for (let index = 0; index < array.length; index++) {
                

                let childArray=array[index];
                return childArray.icon
                console.log(childArray.icon.key);
                
            
                
            }
        }
        // let icon = 
        // let url = "http://openweathermap.org/img/w/"+{icon}+".png"
        // console.log(temp)
        // console.log(main);
        if(error){
            return <div>Erorr:{error.message}</div>
        }
        else if(!isLoaded){
            return <div>Loading...</div>
        }
        else{
            return (
            <ul>

                <li>
                    {this.timeStampFunction(dt)}
                </li>

                <li>
                    
                    <img src={"http://openweathermap.org/img/w/"+weatherIcon(weather)+".png"}>
                    </img>
                </li>
                <li>{items.name} {sys.country}</li>
                <li> {Math.round(main.temp)} &#8451;</li>
                <li>RealFeel {Math.round(main.feels_like)} &#8451;</li>
            </ul>   
            )
        }
    }

}



export default APIcall
// ReactDOM.render(<APIcall />, document.getElementById('root'));