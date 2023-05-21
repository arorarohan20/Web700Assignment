/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Rohan Arora     Student ID: 123841223       Date: May 20, 2023
*
********************************************************************************/ 

var serverVerbs = ["GET","GET","GET","POST","GET","POST"]
var serverPaths = ["/","/about","/contact","/login","/panel","/logout"]
var serverResponses = ["Welcome to WEB700 Assignment 1","This assignment was prepared by Rohan Arora","Rohan Arora: rarora65@myseneca.ca","User Logged In","Main Panel","Logout Complete"]

function httpRequest (httpVerb , path) {
    var flag=0
    for (var i = 0; i <= 5; i++) {
        if (httpVerb == serverVerbs[i] && path == serverPaths[i]){
            var temp1=`200: ${serverResponses[i]}`
            flag=1
        } 
    }

    if(flag==0){
    var temp2=`404: Unable to process ${httpVerb} request for ${path}`
    return(temp2)
    }

    if (flag==1){
    return(temp1) 
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
    
  }
 
function automateTests(){
    var testVerbs = ["GET","POST"]
    var testPaths = ["/","/about","/contact","/login","/panel","/logout","/randomPath1","/randomPath2"]
    function randomRequest(){

        randPath = testPaths[getRandomInt(7)]
        randVerb = testVerbs[getRandomInt(1)]
        
        var temp3 = (httpRequest(randVerb,randPath))
        console.log(temp3)
        
    }
    setInterval(randomRequest,1000)

    
}
automateTests()
