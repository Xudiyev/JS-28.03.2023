// first-task-
let a = 10;
let b = 4;


let result = (a + b < 10) ? 'Yes' : 'No';

console.log(result);

// second-task
function numPower(num,pow){
let total=1
for(let i=1;i <=pow; i++){
    total*=num;
}
return total;
}

console.log(numPower(4,3));
console.log(numPower(16,2));




// table-task
let slct = document.getElementById('slct')
let tbl = document.getElementById('tbl')

function add() {
    tbl.style.display="table"
    let result = '';
    let color;
    for (let i = 1; i <= slct.value; i++) {
        result += `<tr>`;
        for (let x = 1; x <= slct.value; x++) {
            color=(i+x)%2==0 ?   'black':''; 
            
            result += `<td style="background-color:${color}">${i}+${x}</td>`;

            
        }
        result += `</tr>`;
      
        debugger;
    }
    

    tbl.innerHTML = result;
}
slct.addEventListener('change', add);