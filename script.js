document.getElementById("yourName").innerHTML = localStorage.getItem('1');

function sendForm() {
    let name = document.getElementById("name").value;
    localStorage.setItem('1', name);
    document.getElementById("yourName").innerHTML = name;
}

// Показ форм
function openTriangleForm() {
	document.getElementById("Triangle").style.display = "block"; }
function closeTriangleForm() {
	document.getElementById("Triangle").style.display = "none";}
function openStringForm() {
	document.getElementById("String").style.display = "block"; }
function closeStringForm() {
	document.getElementById("String").style.display = "none";}
function openArrayForm() {
	document.getElementById("Array").style.display = "block"; }
function closeArrayForm() {
	document.getElementById("Array").style.display = "none";}
function openTimerForm() {
	document.getElementById("Timer").style.display = "block"; }
function closeTimerForm() {
	document.getElementById("Timer").style.display = "none";}


// Площадь треугольника 
function areaOfTriangle(obj) {
    var a = 1 * obj.st1.value;
    var b = 1 * obj.st2.value;
    var c = 1 * obj.st3.value;
    var p = (a + b + c) / 2;
    var s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    obj.res.value = s;
}

// Стравнение строк 
function compareString() {
    let a = document.getElementById("string1");
    let b = document.getElementById("string2");
    if (a.value == b.value) {
        document.getElementById("ans1").innerHTML = 'true';
    } else {
        document.getElementById("ans1").innerHTML = 'false';
    }
}

// Макс и мин в массиве
function calculateMass() {
	let a = [];
    let form = document.getElementById("Array");
    let els = form.getElementsByTagName("input");
    for (let i = 0; i < els.length; i++) {
        a[i] = els[i].value;
    }
    document.getElementById("ans2a").innerHTML = "Max: " + Math.max.apply(null, a);
    document.getElementById("ans2b").innerHTML = "Min: " + Math.min.apply(null, a);
}

// Таймер
window.onload = function(){
    var seconds = 00;
    var tens = 00;
    var appendSeconds = document.getElementById("seconds");
    var appendTens = document.getElementById("tens");
    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");
    var Interval;

    buttonStop.onclick = function(){
        clearInterval(Interval);
    
    }

    buttonStart.onclick = function(){
        Interval = setInterval(startTimer, 10);

    }

    buttonReset.onclick = function(){
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;

    }
    function startTimer(){
        tens++;
        if (tens<9){
            appendTens.innerHTML = "0" + tens;

        }
        if (tens>9){
            appendTens.innerHTML = tens;
        }
    }
}
