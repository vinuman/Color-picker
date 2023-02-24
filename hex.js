const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    const a = randomNumber();
    const b = randomNumber();
    const c = randomNumber();
    const d = randomNumber();
    const e = randomNumber();
    const f = randomNumber();

    let ans = [hex[a],hex[b],hex[c],hex[d],hex[e],hex[f]];
    let concat = ans.join("");
   
    console.log(concat);

    let bgColor = '#' + concat;

    document.body.style.backgroundColor = bgColor;
    color.textContent = bgColor;
})



function randomNumber(){
    return Math.floor(Math.random()*hex.length);
}