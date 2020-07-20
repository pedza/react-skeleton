let state = {

        item: []

}

let apicall= function(){
    fetch("http://api.openweathermap.org/data/2.5/weather?q=Skopje&units=metric&appid=5028b23243c12ce9c01337e4bf4ea0ae")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        state.item.push(data.main)
    });

}

apicall();
console.log(state.item)