export {uploadArrToLocStor}

function uploadArrToLocStor(array){
    const stringArr = JSON.stringify(array)
    localStorage.setItem("displayArr", stringArr)
    alert("updated")
}