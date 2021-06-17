var data = []
document.getElementById("demo").innerHTML = data;
function myfunction() {
    data.push(document.getElementById("mytext").value);
    document.getElementById("mytext").value = "";

}
function myfunction1() {
    document.getElementById("demo").innerHTML = data;

}