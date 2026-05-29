let submit = document.querySelector(".submit");

submit.addEventListener("click", function(e) {
  
  
    // localStorage here
  const date = document.getElementById('date').value;
    localStorage.setItem("local storage", date);

  
  
  // sessionStorage here
const riddle = document.getElementById('riddle').value;
    sessionStorage.setItem("riddle", riddle);


        console.log(sessionStorage.getItem("riddle"));

});