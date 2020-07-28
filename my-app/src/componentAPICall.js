import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
// import App from './app'


class APIcall extends Component
{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items:[],
            items2:[],
            url: "http://api.openweathermap.org/data/2.5/weather?q="+this.props.urls+"&units=metric&appid=5028b23243c12ce9c01337e4bf4ea0ae",
            url2: "http://api.openweathermap.org/data/2.5/forecast?q="+this.props.urls+"&units=metric&appid=e5662bf01e556be8c308a23141fe5d4f"
        }
    
    }

componentDidMount(){
    this.fetchData(this.state.url, this.state.url2)
    // this.fetchData2(this.state2.url2)
    

}

fetchData(url, url2){
    fetch(url)
        .then(res => res.json())
        .then(async (result) => {
                console.log(result)
                this.setState({
                    isLoaded: true,
                    items: result
                });
            
            const res2 = await fetch(url2);
            const result_2 = await res2.json();
            this.setState({
                items2: result_2
            });
            console.log(this.state.items2);
            console.log(this.state.items);   
             
            },
            (error)=>{
                this.setState({
                    isLoaded: true,
                    error
                });
            }
            )
          
}

timeStampFunction(unix){
    let date = new Date(unix*1000);
    let toUTCstring = date.toUTCString();
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
            case 7:
                if (day === 7){
                    currentDay = "Sunday"
                }
            break;
            default: currentDay = "no such day"
        }
   
    
    
    return currentDay + ", " + currentDate
    
}

componentDidUpdate(prevProps){
    
    if (prevProps.urls !== this.props.urls){
        
        this.fetchData("http://api.openweathermap.org/data/2.5/weather?q="+this.props.urls+"&units=metric&appid=5028b23243c12ce9c01337e4bf4ea0ae", 
        "http://api.openweathermap.org/data/2.5/forecast?q="+this.props.urls+"&units=metric&appid=e5662bf01e556be8c308a23141fe5d4f")
        // this.fetchData2("http://api.openweathermap.org/data/2.5/forecast?q="+this.props.urls+"&units=metric&appid=e5662bf01e556be8c308a23141fe5d4f")
        // this.setState({url2:"http://api.openweathermap.org/data/2.5/forecast?q="+this.props.urls+"&units=metric&appid=e5662bf01e556be8c308a23141fe5d4f"})
        
        console.log(prevProps)
        console.log(this.props.urls)
    }
}
//test


//test
    render(){
        
        
        const {error, isLoaded, items, items2} = this.state;
        const {main, weather, sys, dt, wind} = items;
        const {list} = items2;
        console.log(list);
        
        if(items.name !== this.props.urls.charAt(0).toUpperCase()+this.props.urls.slice(1)){
            return <div>The city is not found</div>
        }
        
       
        
        let weatherIcon = function(array){
            for (let index = 0; index < array.length; index++) {
               
                let childArray=array[index];
                return childArray.icon
             }
        }
        let weatherDescription = function(array){
            for (let index = 0; index < array.length; index++) {
               
                let childArray=array[index];
                return childArray.description
            }
        }
        

        let hourlyForcast = function(arrayList){
           if (arrayList === undefined){
               return;
           }
           else{
                const forcastEl=arrayList;
                
                const elements = forcastEl.slice(0,7).map((element)=>
                <ul key={element.id} className="forcastBodyStyle">
                    <li key={element.id}>
                        {element.dt_txt.slice(11, -6)}h 
                        <span className="dateStyle">{element.dt_txt.slice(8,-9)}
                        /{element.dt_txt.slice(5,-12)}</span>
                    </li>
                    <li key={element.id}>
                        <img 
                        src={"http://openweathermap.org/img/w/"+weatherIcon(element.weather)+".png"}
                        alt="icon"/>
                        <span className="forcastCelziusStyle">{Math.round(element.main.temp)}&#176;C</span>
                    </li>
                    <li key={element.id}>
                        {weatherDescription(element.weather)}
                    </li>
                    <li>
                        feels like: {Math.round(element.main.feels_like)}&#176;C
                    </li>
                </ul>
                );
                     
                return elements        
                   
                }
            
           }
        


        if(error){
            return <div>Erorr:{error.message}</div>
        }
        else if(!isLoaded){
            return <div>Loading...</div>
        }
        else{
            return (
                
            <div className="weatherInfoContainerStyle">
                <div className="flexStyle">
                    <ul>
                        <li className="nowStyle">NOW</li> 
                        <li className="cityFontSettings mainForcastAnim">{items.name}, {sys.country}</li>
                        <li className="mainForcastAnim">
                            {this.timeStampFunction(dt)}
                        </li>
                        <li className="floatElements">
                            <img className="weatherIconSettings" 
                            src={"http://openweathermap.org/img/w/"+weatherIcon(weather)+".png"}
                            alt="icon"/>
                            <div> {Math.round(main.temp)}<span className="celziusStyle">&#176;</span>C</div>
                        </li>
                        <li className="mainForcastAnim">Real Feel: {Math.round(main.feels_like)}
                            <span>&#176;</span>C
                        </li>
                        <li className="mainForcastAnim">
                            {weatherDescription(weather).charAt(0).toUpperCase()
                            +weatherDescription(weather).slice(1)}
                        </li>
                    </ul>
                    <ul className="listStyle">
                        <li>
                            Real Feel: {Math.round(main.feels_like)}
                            <span>&#176;</span>C
                        </li>
                        <li>
                            Humidity: {main.humidity}%
                        </li>
                        <li>
                            Wind: {wind.speed} m/s
                        </li>
                        <li>
                            Pressure: {main.pressure} hPa
                        </li>
                 
                    </ul>
                </div>
                <div>
                     <div className="hour3Forcast">
                         3 hour Forcast
                     </div>
                     <div className="forcastStyle">
                        {hourlyForcast(list)}  
                     </div>
                </div>
               
            </div> 
            
            )
            
        }
        
    }

}



export default APIcall
// ReactDOM.render(<APIcall />, document.getElementById('root'));