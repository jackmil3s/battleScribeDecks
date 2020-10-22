const input = document.querySelector("input"); 
input.addEventListener("change", e => {
 console.log(input.files);
 const reader = new FileReader();

 reader.onload = function () {
        document.querySelector("html")
                .innerHTML = reader.result;
                deleteStyle();
                addStyle();

}
const result = reader.readAsText (input.files[0])
 }, false)

//This function deletes the current styling applied by battlescribe
 function deleteStyle(){
    const style = document.querySelector("style");
    style.remove();
 }
//This function connects the HTML file with the stylesheet
 function addStyle(){
     const headTag = document.querySelector("head");
     const CSSLink = document.createElement("link");
     CSSLink.setAttribute("rel", "stylesheet");
     CSSLink.setAttribute("href", "style.css");
     console.log(CSSLink)
     headTag.appendChild(CSSLink);
 }
