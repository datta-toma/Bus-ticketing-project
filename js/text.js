
const allBtn = document.getElementsByClassName("btn-1");
let count=0;
for(const btn of allBtn){
    btn.addEventListener("click", function(e){
        btn.classList.add('bg-green-400');
       count = count+1;
       setInnerText("seat-count",count);

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


      


        // const li = document.createElement("li");

        // const p = document.createElement("p");
        //  p.innerText =seatName;
        //  selectedContainer.appendChild(li);

        // ol.innerText ='A1  Economoy  550';
        // selectedContainer.appendChild(ol);

    
    
    });
}

function setInnerText(id, value) {
    document.getElementById(id).innerText= value;
}
