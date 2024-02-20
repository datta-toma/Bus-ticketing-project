
const allBtn = document.getElementsByClassName("btn-1");
let count=0;
for(const btn of allBtn){
    btn.addEventListener("click", function(e){
        btn.classList.add('bg-green-400');
       count = count+1;
       setInnerText("seat-count",count);
       
    //    seat left
       const seatElement = document.getElementById("sit-count");
       const seatText = seatElement.innerText;
       const minimanSeat = parseInt(seatText);
       const newlife = minimanSeat - 1;
       seatElement.innerText = newlife;

    //    seat append
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class','flex justify-between');
    const tag1 = document.createElement('p');
    tag1.innerText=btn.value;
    newDiv.appendChild(tag1);

    const tag2= document.createElement('p');
    tag2.innerText='Economoy';
    newDiv.appendChild(tag2);

    const tag3 = document.createElement('p');
    tag3.innerText=550;
    newDiv.appendChild(tag3);

    const bookingSit= document.getElementById('seat-container');
    bookingSit.appendChild(newDiv);

// calculate price
   const totalCost = document.getElementById("total-cost");
   const totalCostText = totalCost.innerText;
    const convertedTotalCost = parseInt(totalCostText);
    const tag3Text = tag3.innerText;
    const tag3Value = parseInt(tag3Text);
    totalCost.innerText = convertedTotalCost + tag3Value;

    
    
    });
}

function setInnerText(id, value) {
    document.getElementById(id).innerText= value;
}
