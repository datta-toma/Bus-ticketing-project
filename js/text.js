
const allBtn = document.getElementsByClassName("btn-1");
let count=0;
let convertedTotalCost=0;
for(const btn of allBtn){
    btn.addEventListener("click", function(e){
        btn.classList.add('bg-green-400');
       count = count+1;
       if(count>= 4){
        disableAllButtons();
       }
    
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


    // const gand = document.getElementById("apply-btn");
    // gand.addEventListener("click", function(){

    //     // get the value input
    //     const couponElement = document.getElementById("input-field").value;
    //     const couponCode = couponElement.split(" ").join("").toUpperCase();
    //     if(convertedTotalCost >= 2000){
    //         if(couponCode === "NEW15" || couponCode === "Couple20"){
    //             // discount calculation
    //             const discountElement = document.getElementById("discount");
    //             const discountAmount = convertedTotalCost*0.15;
    //             discountElement.innerText = discountAmount.toFixed(2);

    //             // total calculation
    //             const restTotal = document.getElementById("total");
    //             restTotal.innerText = convertedTotalCost - discountAmount.toFixed(2);
    //             document.getElementById("input-field").value="";
    //         }else{
    //             alert("Invalid Coupone code");
    //             document.getElementById("input-field").value="";
    //         }
    //     }
    //     else{
    //         alert("Please purchase at least $1000");
    //         document.getElementById("input-field").value="";
    //     }
    // });

    function disableAllButtons() {
        for (const btn of allBtn) {
            btn.disabled = true;
        }
    }

function setInnerText(id, value) {
    document.getElementById(id).innerText= value;
}
