window.onscroll = function() {myFunction()};

var navbar = document.getElementById("nav");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

function Test(x){
  var regex
  var Name = document.getElementById(x);
  var valueOfElement = Name.getAttribute("name");
  if(x == "firstName" || x == "lastName" || x == "message"){
    //regular name with 3 char
    regex = /^([a-zA-Z\s]{3,})+$/;
  }else if(x == "email"){
    //email 
    regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  }
  // at less 3 character 
  if(!regex.test(Name.value) ){
    Name.classList.add("error");
    Name.placeholder ="Please enter your "+ valueOfElement + "...";
    Name.value = "";
    return false;
  }else{
    Name.classList.remove("error");
    Name.placeholder ="Enter your "+ valueOfElement + "..."; 
    return true;
  }
}

function submitTest(){
  var firstName = document.getElementById("firstName");
  var lastName = document.getElementById("lastName");
  var email = document.getElementById("email");
  var message = document.getElementById("message");
  var phoneNumber = document.getElementById("phoneNumber");
  //var expreg = /^[0-9]*$/;
  //var submit = true;
  
  // if(!expreg.test(phoneNumber.value)){
  //   Name.classList.add("error");
  //   Name.placeholder ="Please enter your Phone Number...";
  //   Name.value = "";
  // }else{
  //   Name.classList.remove("error");
  //   Name.placeholder ="Enter your Phone Number..."; 
  // }
    var tfname = Test("firstName");
    var tlname = Test("lastName");
    var tmail = Test("email");
    var tmessage = Test("message");
  if(tfname  || tlname || tmail || tmessage){
    $.ajax({
      type:"post",
      url:"send.php",
      data:{'firstName':firstName.value,
      'lastName':lastName.value,
      'email':email.value,
      'phoneNumber': phoneNumber.value,
      'message':message.value
  },cache:false,
  success:function(html){
      firstName.value = "";
      lastName.value = "";
      email.value = "";
      phoneNumber.value = "";
      message.value = "";
    }
  });
  }
  return false;
}