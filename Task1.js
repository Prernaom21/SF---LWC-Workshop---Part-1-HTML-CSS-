


let add = document.getElementById("#add");
let subract = document.getElementById("#subtract");

console.log(add, subract);


add.addEventListener("click", function () {
  let output = document.querySelector("#output");
  let result = Number(output.innerText) + 1;

  output.innerText = result;
});

subract.addEventListener("click", function () {
    let output = document.querySelector("#output");
    let result = Number(output.innerText) - 1;
  
    output.innerText = result;
  });
  
