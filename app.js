var btnTranslate= document.querySelector("#btn-translate");
var txtInput= document.querySelector("#txt-input");
var outputDiv= document.querySelector("#output");




//btnTranslate.addEventListener("click", clickEventHandler())

var serverURL= "https://api.funtranslations.com/translate/dothraki.json"

function getTranslationURL(text){
    return serverURL+"?"+"text=" + text
}

function errorHandler(error){
    console.log("error occured",error)
    alert("something wrong with error! Try later")
}

function clickEventHandler(){
    var inputText= txtInput.value;
    
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json =>
        {
          var translatedText =json.contents.translated;
          outputDiv.innerText= translatedText;
         
        })

    .catch(errorHandler)

};

btnTranslate.addEventListener("click", clickEventHandler)

    




