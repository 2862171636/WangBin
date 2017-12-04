var data_change = document.getElementsByClassName('data_change')[0];
var password_change = document.getElementsByClassName('password_change')[0];
var form1 = document.getElementsByClassName('form1')[0];
var form2 = document.getElementsByClassName('form2')[0];
data_change.onclick = function(){
    form1.style.display = "block";
    form2.style.display = "none";
    data_change.style.color = "#1eaa39";
    data_change.style.borderBottom = "2px solid #1eaa39";
    data_change.style.fontWeight = "bold";
    password_change.style.color = "#999";
    password_change.style.borderBottom = "none";
    password_change.style.fontWeight = "200";
}
password_change.onclick = function(){
    form1.style.display = "none";
    form2.style.display = "block";
    password_change.style.color = "#1eaa39";
    password_change.style.borderBottom = "2px solid #1eaa39";
    password_change.style.fontWeight = "bold";
    data_change.style.color = "#999";
    data_change.style.borderBottom = "none";   
    data_change.style.fontWeight = "200";

}