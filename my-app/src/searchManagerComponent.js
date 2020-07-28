import React, {Component} from 'react';
import APIcall from './componentAPICall';



class SearchManager extends Component
{
    
    
    constructor(props){
            super(props);
            this.state = {
               defaultCity: "skopje",
               currentCity: "skopje",
               newCityText:"skopje",
          
            }
        console.log(this.state.newCityText)
    }
    
    onChange = (e)=>{
       this.setState({newCityText: e.target.value})
              
    }

  
    
    // componentAPIreset = () =>{
        
        
    //     this.forceUpdate( <APIcall urls={this.state.currentCity}  />)

    // }

    useForceUpdate=() => {
        const [, forceUpdate] = React.useState();
      
        return (React.useCallback(() => {
            forceUpdate(s => !s);
          }, []),
          this.setState({currentCity: "skopje"})
          ) 
      }

    // handleAPI=()=>{
    //     if(this.state.currentCity != null)
    //     {
    //         return(
    //             console.log("curent city se renderira"),
    //             <div><APIcall urls={this.state.currentCity }  /></div>
                
    //         )
            
    //     }
    //     else if(this.state.currentCity === null){
    //         return(
    //             console.log("deafult city se renderira"),
    //             <div><APIcall urls={this.state.defaultCity }  /></div>
                
                
    //         );
            
            
    //     };
    // }  
    
    returnCity(){
        return this.state.newCityText

        
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        
        // let currentCity2 = this.state.newCityText
      
       
        this.setState({currentCity: this.state.newCityText}, ()=>this.returnCity())
        
        
    }
    render()
    {
        
        
       
        
            return (
                
                <div className="row rowSettings">
                  
                    <form  onSubmit={this.handleSubmit}>
                         <input className="inputSettings" onChange={this.onChange} value={(this.state.newCityText)}/>
                         <button className="buttonStyle">OK</button>
                    </form>
                   
                   <div  className="formSettings">
                        <APIcall urls={this.state.currentCity}/>
                   </div>
                 
                    
                </div>
                
            );

        
    
        
        
        
    }


}



export default SearchManager
// ReactDOM.render(<SearchManager />, document.getElementById('root'));