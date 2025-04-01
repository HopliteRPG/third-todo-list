export {setArrayOnStartUp,uploadArrToLocStor,uploadpProjectIdCountToLocStor,setIdCounterOnStartUp}

function uploadArrToLocStor(array){
    const stringArr = JSON.stringify(array)
    localStorage.setItem("displayArr", stringArr)
}

function uploadpProjectIdCountToLocStor(projectIdCount){
    const stringProjectIdCount = JSON.stringify(projectIdCount)
    localStorage.setItem("projectIdCount", stringProjectIdCount)

}



    function setArrayOnStartUp(){
        if(localStorage.getItem("displayArr") === null){
            localStorage.setItem("displayArr","[]")
            let parsedArr = localStorage.getItem("displayArr")
            return JSON.parse(parsedArr)

        }
        else{
            let displayArrVar = localStorage.getItem("displayArr")
            let parsedArr = JSON.parse(displayArrVar)
            return parsedArr
    
        }
    }
    
    function setIdCounterOnStartUp(){
        if(localStorage.getItem("projectIdCount") === null){
            localStorage.setItem("projectIdCount","0");
            // let displayArrVar = localStorage.getItem("displayArr")
            // let parsedArr = JSON.parse(displayArrVar)
            // localStorage.setItem("projectIdCount", parsedArr[parsedArr.length-1].projectId)
            // console.log(localStorage.getItem("projectIdCount"))
        }

       
    }