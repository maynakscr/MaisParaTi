





function showFunction (sucessCallBack, errorCallback){
    
    if(false){    
    sucessCallBack("Requisição ok")
    }else{
    errorCallback("Requisição não ok")
    }
}

let sucessCallBack = function(message){
    console.log(message)
}

// let errorCallback = function(message){
//     console.error(message)
// }

let errorCallback = (message) => {
    console.error(message)
}

showFunction(sucessCallBack,errorCallback)


//Fazer a aula9 como em função