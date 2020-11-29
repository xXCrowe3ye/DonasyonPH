function submitForm(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;

    var donation = document.getElementById("donate").value;
    var amount = document.getElementById("amount1").value;
    var food = document.getElementById("Foodtype1").value;
    var qty1 = document.getElementById("quantity11").value;
    var necessity = document.getElementById("necessity1").value;
    var qty2 = document.getElementById("quantity21").value;

    if (name == "") {
        alert('Please fill up your name.');
    } else
    if (email == "") {
        alert('Please fill up your email.');
    } else
    if (phone == "") {
        alert('Please fill up your phone number.');
    } else
    if (address == "") {
        alert('Please fill up your address.');
    } else
    if (city == "") {
        alert('Please fill up your city.');
    } else
    if (donation == "") {
        alert('Please check your donations.');
    }else

    if (amount == "") {
        alert('Please check your amount of donations.');
    }
    else{
        alert("Hi, "+name+"! Thank you for trusting us, your donations are in good hands. I hope we will see you again.");
        return;
    }

    if (food, qty1 == "") {
        alert('Please check your donations.');
    }
    else{
        alert("Hi, "+name+"! Thank you for trusting us, your donations are in good hands. I hope we will see you again.");
        return;
        
    }

    if (necessity, qty2 == "") {
        alert('Please check your donations.');
    }
    else{
        alert("Hi, "+name+"! Thank you for trusting us, your donations are in good hands. I hope we will see you again.");
        return;
    }
}

function changeStatus() {
    var status = document.getElementById("donate");

    if (status.value == "Cash") {
      document.getElementById("amount").style.display = "block";
    }
    else {
      document.getElementById("amount").style.display = "none";
    }

    if (status.value == "Food") {
      document.getElementById("Foodtype").style.display = "block";
      document.getElementById("quantity1").style.display = "block";
    }
    else {
      document.getElementById("Foodtype").style.display = "none";
      document.getElementById("quantity1").style.display = "none";
    }

    if (status.value == "necessities") {
      document.getElementById("necessity").style.display = "block";
      document.getElementById("quantity2").style.display = "block";
    }
    else {
      document.getElementById("necessity").style.display = "none";
      document.getElementById("quantity2").style.display = "none";
    }
}

function submitMessage(){
    var Name = document.getElementById("smName").value;
    var Email = document.getElementById("smEmail").value;
    var Message = document.getElementById("smMessage").value;

    if(Name == ""){
        alert('Please check your Name.')
    }else
    if(Email == ""){
        alert('Please check your Email.')
    }else
    if(Message == ""){
        alert('Please put a message.')
    }

    else{
        alert("Hi "+Name+" Thank you for submitting this form, we, Donasyon.PH, will keep in touch in you if we have an activities and updates. Thank you!")
    }
}
