export {setArrayOnStartUp,uploadArrToLocStor}

function uploadArrToLocStor(array){
    const stringArr = JSON.stringify(array)
    localStorage.setItem("displayArr", stringArr)
    alert("updated")
}



    function setArrayOnStartUp(){
        if(localStorage.getItem("displayArr") === null){
            alert("empty")
            localStorage.setItem("displayArr","[]")
            let parsedArr = localStorage.getItem("displayArr")
            return JSON.parse(parsedArr)

        }
        else{
            let parsedArr = localStorage.getItem("displayArr")
            console.log(parsedArr)
            return JSON.parse(parsedArr)
    
        }
    }