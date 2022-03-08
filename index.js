var maleName   = ["Kwasi", "Kwa", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
function dispayName() {
    var day = document.getElementById("day").value;
    var dd = parseInt(day);
    var month = document.getElementById("month").value;
    var mm = parseInt(month);
    var year = document.getElementById("year").value;
    var yy = parseInt(year);
    var cc = (yy - 1) / 100 + 1; 
    var bornDay = parseInt(cc / 4 - 2 * cc - 1 + (5 * yy) / 4 + (26 * (mm + 1)) / 10 + dd) % 7;
    if(document.getElementById("gender").checked){
        var gender="male"
    }else{
        var gender="female"
    }
    if (dd <= 0 || dd == "" || dd > 31) {
        alert("invalid Date");
    } else if (mm <= 0 || mm > 12 || mm == "" || mm == 2 && dd > 29) {
        alert("invalid Month");
}