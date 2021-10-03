const axios = require('axios');

async function makeGetRequest() {


  let res = await axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population');

  let response = res.data.data;

  //console.log(response);
 for (let i=0;i<response.length;i++ ){
     if (response[i].Year==='2019' && response[i].Population===328239523){
        
            console.log(`The Population of USA is ${response[i].Population} in the Year ${response[i].Year}    `)
            break
     }
     

    }
} 

makeGetRequest();

