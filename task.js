//const require = require ("request")

const country = process.argv[2]

 const geocode = require ("./datd1.js/geocode")
 const forecast = require ("./datd1.js/forecast")


geocode(country , (error , data)=>{
    console.log ("error" , error)
    console.log ("data" , data)

    if (data) {
    forecast(data.latitude , data.longtitude , (error , data)=>{
        console.log("error : " , error)
        console.log("data : " , data )}
        )}
         
    else {
        console.log("data entered have an error") }
})





