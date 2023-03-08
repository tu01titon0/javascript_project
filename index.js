function scoreFunction(){
    let a = +document.getElementById("pointPhysics").value;
    
    let b = +document.getElementById("pointChemistry").value;
    let c = +document.getElementById("pointBiology").value;
    if (a && b && c){
        sum =  a + b + c 
        document.getElementById("result1").innerHTML = sum/3 + " là điểm trung bình 3 môn "
    } else {
        alert("Vui lòng nhập nhập đủ điẻm");
    }
}

function caculateFunction(){
    let x = +document.getElementById("myNumber").value;
    if (x){
        degreesCelsius =  (x-32)/1.8;
        document.getElementById("result").innerHTML = degreesCelsius + " độ F"
    } else {
        alert("Vui lòng nhập nhiệt độ");
    }
}

function caculateArea(){
    let x = +document.getElementById("circleRadius").value;
    if (x && x > 0){
        result =  (x * x) * 3.14;
        result1 = (x * 2) * 3.14
        document.getElementById("result2").innerHTML = result + " là diện tích hình tròn. " + result1 +" là chu vi hình tròn"
    } else {
        alert("Vui lòng nhập đúng bán kinh ");
    }
}