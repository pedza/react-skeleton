import React, {Component} from 'react';
import APIcall from './componentAPICall';


// let searchManager = React.createClass({
    
// })


class SearchManager extends Component
{
    
    
    constructor(props){
            super(props);
            this.state = {
               defaultCity: "skopje",
               currentCity: "skopje",
               newCityText:"skopje",
            //    url:"http://api.openweathermap.org/data/2.5/weather?q=skopje&units=metric&appid=5028b23243c12ce9c01337e4bf4ea0ae"
            }
        console.log(this.state.newCityText)
    }
    
    // whichCity(city){
    //     if(city != ""){
    //         this.setState({currentCity: city})
    //     }
    //     else{
    //         this.setState({currentCity: this.state.defaultCity})
    //     }
    // }
    onChange = (e)=>{
       this.setState({newCityText: e.target.value})
        
        // this.setState({
        //     url:"http://api.openweathermap.org/data/2.5/weather?q="+e.target.value+"&units=metric&appid=5028b23243c12ce9c01337e4bf4ea0ae"
        // })
        
    }

    // handleAPIcall = () => {
    //     // e.preventDefault()
    //     this.setState({
    //         url:"http://api.openweathermap.org/data/2.5/weather?q="+this.value+"&units=metric&appid=5028b23243c12ce9c01337e4bf4ea0ae"
    //     })
        
    //     console.log(this.state.url)
    // }
    
    componentAPIreset = () =>{
        
        // this.setState(this.state);
        this.forceUpdate( <APIcall urls={this.state.currentCity}  />)

        
        // this.setState({currentCity: "skopje"})
        // console.log(this.state.currentCity)
    }

    useForceUpdate=() => {
        const [, forceUpdate] = React.useState();
      
        return (React.useCallback(() => {
            forceUpdate(s => !s);
          }, []),
          this.setState({currentCity: "skopje"})
          ) 
      }

    handleAPI=()=>{
        if(this.state.currentCity != null)
        {
            return(
                console.log("curent city se renderira"),
                <div><APIcall urls={this.state.currentCity }  /></div>
                
            )
            
        }
        else if(this.state.currentCity === null){
            return(
                console.log("deafult city se renderira"),
                <div><APIcall urls={this.state.defaultCity }  /></div>
                
                
            );
            
            
        };
    }  
    
    returnCity(){
        let currentCity2 = this.state.newCityText

        
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        
        let currentCity2 = this.state.newCityText
      
       
        this.setState({currentCity: this.state.newCityText}, ()=>this.returnCity())
       

        
        // this.componentAPIreset()
        // this.setState({url: "http://api.openweathermap.org/data/2.5/weather?q="+this.state.newCityText+"&units=metric&appid=5028b23243c12ce9c01337e4bf4ea0ae}"})
            
           
            // this.setState({newCityText: ""})
        
        // console.log(this.state.newCityText);
        
        // console.log(this.state.url);
        // console.log(<APIcall urls={this.state.url} />)
        // return(
            
        //     <APIcall urls={this.state.url} />
        // )
        
        // let currentUrl = "http://api.openweathermap.org/data/2.5/weather?q="+this.state.newCityText+"&units=metric&appid=5028b23243c12ce9c01337e4bf4ea0ae"
        // url:"http://api.openweathermap.org/data/2.5/weather?q="+this.state.newCityText+"&units=metric&appid=5028b23243c12ce9c01337e4bf4ea0ae"
        // let apiKey="&units=metric&appid=5028b23243c12ce9c01337e4bf4ea0ae"
        
             
        // this.handleAPIcall();
        // console.log(this.state.url)
        // let currentCity = (this.state.city)
        // currentCity.forEach(element => {
        //     this.setState({url:element})
        // });
        // console.log(currentCity);
        // currentCity.push(this.state.newCityText);
        // currentCity.push(this.state.url)
        // console.log(this.state.newCityText);
        // this.state.url("http://api.openweathermap.org/data/2.5/weather?q="+this.state.newCityText+apiKey);
        // console.log(this.state.url);
        // this.setState({city: currentCity, newCityText: ""});
        // console.log(this.state.newCityText)
        
        // let url = "http://api.openweathermap.org/data/2.5/weather?q="+this.state.newCityText+"&units=metric&appid=5028b23243c12ce9c01337e4bf4ea0ae";
        // console.log(url)
        
        
    }
    render()
    {
        
        
       
        
            return (
                
                <div className="row">
                  
                    <form onSubmit={this.handleSubmit}>
                    
                    
                      {console.log(<APIcall urls={this.state.currentCity}  />)}
                        <input onChange={this.onChange} value={(this.state.newCityText)}/>
                        
                        <button>OK</button>
                    </form>
                    {/* {console.log(this.state.currentCity)}
                    {console.log(<APIcall urls={this.state.currentCity} />)}
                    
                    <APIcall urls={this.componentAPIreset, this.state.currentCity }  />

                    {console.log(<APIcall urls={this.componentAPIreset, this.state.currentCity }  />)} */}
                    <APIcall urls={this.state.currentCity}  />
                    {console.log(<APIcall urls={this.state.currentCity}  />)}
                    {console.log(this.state.currentCity)}
                    
                </div>
                
            );

        
    
        console.log("test");
        
        
    }


}



export default SearchManager
// ReactDOM.render(<SearchManager />, document.getElementById('root'));