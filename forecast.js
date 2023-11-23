
const request = require ("request")

const forecast =(latitude , longtitude , callback ) => {
    const url = "https://api.weatherapi.com/v1/current.json?key=9e91ac53a84f4881b74234118232211&q="+ latitude + "," + longtitude
    
    request ({ url , json : true } , ( error , response) => {
        if(error) {
         callback ("unable to connect wether serice" , undefined) } 
        else if(response.body.error) {
         callback (response.body.error.message , undefined) }
        else {
         callback (undefined ,response.body.location.name + "it is  " + response.body.current.condition.text 
         + "and temp " + response.body.current.temp_c) }
    
    })
    }
    
    module.exports = forecast ;