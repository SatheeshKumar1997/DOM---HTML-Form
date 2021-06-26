function add_data(){

    var radio = document.querySelectorAll('input[type="radio"]:checked');
    if(radio.length >= 2){

    const row = document.createElement("tr");
    document.querySelector('table>tbody').append(row);

    const data1 = document.createElement("td");
    data1.innerText = document.querySelector("#fn").value;
    
    const data2 = document.createElement("td");
    data2.innerText = document.querySelector("#ln").value;

    const data3 = document.createElement("td");
    data3.innerText = document.querySelector("#addr").value;
    
    const data4 = document.createElement("td");
    data4.innerText = document.querySelector("#gender").value;
    
    const data5 = document.createElement("td");
    data5.innerText = document.querySelector("#pin").value;

    var add='';
    for(var i=0;i<radio.length;i++){
        if(i === radio.length-1){
            add += radio[i].name;
        }
        else{
            add += radio[i].name+', ';
        }
    }

    const data6 = document.createElement("td");
    data6.innerText = add;

    const data7 = document.createElement("td");
    data7.innerText = document.querySelector("#state").value;

    const data8 = document.createElement("td");
    data8.innerText = document.querySelector("#country").value;
    
    row.append(data1,data2,data3,data4,data5,data6,data7,data8);
    reset();
}
else{
    window.alert("Select minimum 2 food item....");
}
}

function reset(){
    document.querySelector('#fn').value ='';
    document.querySelector('#ln').value ='';
    document.querySelector('#addr').value ='';
    document.querySelector('#pin').value ='';
    document.querySelector('#gender').value = '';
    document.querySelector('#Idly').checked = false;
    document.querySelector('#Dosa').checked = false;
    document.querySelector('#Pongal').checked = false;
    document.querySelector('#Chapathi').checked = false;
    document.querySelector('#Poori').checked = false;
    document.querySelector('#state').value = '';
    document.querySelector('#country').value = '';   
}
