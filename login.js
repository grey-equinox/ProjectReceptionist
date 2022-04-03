function  runOnLoad(){
    var button2 = document.getElementById('btn2');
    button2.addEventListener('click',handleClick);

    var mycontainer = document.getElementsByClassName('container');
    console.log(mycontainer[0].innerHTML);
    console.log(mycontainer[0].textContent);
}

var handleClick = function(event) {
    /*check name empty*/
    var myfirstName = document.getElementById('fname');
    var fname = myfirstName.value;
    if(fname.length === 0){
        document.getElementById('demo').textContent = "Please Enter Name";
    }else if(fname.length < 3){
    	document.getElementById('demo').textContent = "Length of Name must be atleast 3";
    };


    /*check password*/
    var mypass = document.getElementById('pass');
    var pass1 = mypass.value;
     if(pass1.length === 0){
        document.getElementById('demo3').textContent = "Please Enter Password";
    };

}