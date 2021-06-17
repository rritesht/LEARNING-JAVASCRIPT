var data = [];

document.getElementById("demo").innerHTML = data;
function myfunction() {

    var employee = {
        name: document.getElementById("mytext").value
    }
    if (employee.name !== '') {
        data.push(employee);
        window.sessionStorage.setItem('employeeList', JSON.stringify(data))
        document.getElementById("mytext").value = "";
    }

}
function myfunction1() {
    var employeeList = JSON.parse(window.sessionStorage.getItem('employeeList'));
    data = [];
    console.log(employeeList)
    // employeeList.forEach((emp) => {
    //     document.getElementById("demo").innerHTML = "Name : " + emp.name;
    // });
    if (employeeList && employeeList.length) {
        for (let i = 0; i < employeeList.length; i++) {
            document.getElementById("demo").innerHTML += "Name : " + employeeList[i].name + "<br>";
        }
    }else{
        document.getElementById("demo").innerHTML = "";
    }
}

function onClear() {
    window.sessionStorage.clear();
}