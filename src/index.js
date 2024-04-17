/* Add API 
function showAnswer(response) {
    alert(response.data.answer);
}
let apiKey = "3t6dd836d3b2360o01bbc44d5dfa374c";
let context = "be polite and provide a very short answer";
let prompt = "when was the first AI created";
let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(showAnswer) */


/* ClassList
function handleClick() {
    let heading = document.querySelector("h1");
    heading.classList.add("highlight");
}
let buttonElement = document.querySelector("#special-button");
buttonElement.addEventListener("click", handleClick)
*/

/* Set Attributes!
let button = document.querySelector("#button");
button.setAttribute("disabled", "disabled");
*/

let heading = document.querySelector("h2");

heading.innerHTML = "hello World";

new Typewriter ("h2", {
  strings: "Hello World",
  autoStart: true,
  cursor:"";
  delay: 20;
});