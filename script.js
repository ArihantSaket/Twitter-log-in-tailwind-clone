function submit(){
    var name1 = document.getElementById('password').value;
    var email1 = document.getElementById('email').value;
    var stringer = "Hello User "+ "your email ID is: " + email1 + " with password "+ name1;
    document.getElementsByClassName('submit')[0].innerHTML = stringer;
    alert("Your Email ID is "+ email1);
}