
document.getElementById("nameInput").addEventListener("input", () => { 
   let user = document.getElementById("nameInput").value;
   let welcome_string = `Greetings ${user}!`;
   document.getElementById("welcomeOutput").innerText = welcome_string;
});

document.getElementById("languageInput").addEventListener("input", () => {
    /* Logic on updating the html element with id= 'languageInput'.*/

   let answer = document.getElementById("languageInput").value;
   let count = answer.length;
   let language_string = `You like ${answer}. That takes ${count} characters.`;
   document.getElementById("insightsOutput").innerText = language_string;
});