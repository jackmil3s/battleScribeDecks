const input = document.querySelector("input"); 
input.addEventListener("change", e => {
 console.log(input.files);
 const reader = new FileReader();

 reader.onload = function () {
        console.log(reader.result)
        document.querySelector("body")
                .innerHTML = reader.result;
}
const result = reader.readAsText (input.files[0])
 }, false)

