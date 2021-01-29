

document.getElementById("test").innerHTML = "New text!";

function handleChange(checkbox) {

    if(checkbox.checked == true){
        document.getElementById(checkbox.value).style.display = 'block';
    } else {
        document.getElementById(checkbox.value).style.display = 'none';
   }
}