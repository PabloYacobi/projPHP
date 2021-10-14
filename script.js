function verify(event){
    event.preventDefault();
    console.log(event);
    console.log(event.target[0].value.length)
        if(event.target[0].value.length<3){
            document.getElementById("userver").style.display="block";
        }
            else{
            document.getElementById("userver").style.display="none";
        }
        if(event.target[1].value.length<3){
            document.getElementById("passwordver").style.display="block"
        }
            else{
            document.getElementById("passwordver").style.display="none";
        }
}