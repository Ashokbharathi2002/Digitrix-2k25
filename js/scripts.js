// menu and need script
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
// paymunt mode
document.getElementById("paymuntshow").style.display="none";
document.getElementById("offlinepayment").style.display="none";
function paymuntrq(){
    var value = document.getElementById("paymunt").value;
    if(value=="online paymunt"){
        document.getElementById("paymuntshow").style.display="block";
        document.getElementById("offlinepayment").style.display="none";
    }
    if(value=="offline paymunt"){
        document.getElementById("offlinepayment").style.display="block";
        document.getElementById("paymuntshow").style.display="none";
        document.getElementById("Transactionid").required = false;
    }
    if(value==""){
        document.getElementById("paymuntshow").style.display="none";
    }
}
// card translate
document.getElementById("engl").style.display="none";
document.getElementById("tam").style.display="none";
function tamile(){
    document.getElementById("tam").style.display="block";
    document.getElementById("eng").style.display="none";
    document.getElementById("tme").style.display="none";
    document.getElementById("engl").style.display="block";
}
function english(){
    document.getElementById("tam").style.display="none";
    document.getElementById("eng").style.display="block";
    document.getElementById("engl").style.display="none";
    document.getElementById("tme").style.display="block"
}
//phoneno validashon
function mobche(){
    var mobno = document.getElementById("ContactNumber").value;
    var lenmob = mobno.length
    console.log(lenmob)
    console.log(typeof lenmob)

    if (lenmob == 10){
        document.getElementById("errorno1").style.display= "block";
        document.getElementById("errorno2").style.display= "none";
    }
    if (lenmob <=9){
        document.getElementById("errorno1").style.display= "none";
        document.getElementById("errorno2").style.display= "block";
    }
    if (lenmob >=11){
        document.getElementById("errorno1").style.display= "none";
        document.getElementById("errorno2").style.display= "block";
    }
    if (lenmob <=5){
        document.getElementById("errorno1").style.display= "none";
        document.getElementById("errorno2").style.display= "none";
    }
}
//email validashon
function emailvalidate(){
    var email = document.getElementById("mailID").value;
    const myArray = email.split("@");
    console.log(myArray[1]) 
    var validae1 = myArray[1]
    
    if(validae1 == "gmail.com"){
        console.log("ok")
        document.getElementById("errore1").style.display= "block";
        document.getElementById("errore2").style.display= "none";
    }
    else{
        document.getElementById("errore2").style.display= "block";
        document.getElementById("errore1").style.display= "none";
    }
}
// otp gen
function myotp() {
    let otp = '';
    for (let i = 0; i < 6; i++) {
      otp += Math.floor(Math.random() * 10);
    }
    document.getElementById('Verificationcode').value = otp

    return otp
}
// login validashon
function login(){
    // login value
    var id =document.getElementById("login_id").value;
    var pass = document.getElementById("login_pass").value;
    // ged login value
    var userid = document.getElementById("staff_id").value;
    var userpass = document.getElementById("user_password").value;

    if(id==userid & pass==userpass){ 
        alert("login success")
        // window.location="report.html"
        var vccoad = myotp()
        document.getElementById("logincode").value = vccoad;
        logincode1()
    }
    else{
        alert("login failed")
    }
    // console.log(lcood)   
}
// login validashon
function logincode1(){
    var concoad =  document.getElementById("logincode").value;
    console.log( "con coad is: ",concoad)

}

function Fun_call() {
    document.addEventListener('contextmenu',
        event => event.preventDefault());
    elm.innerHTML = "Right click disabled";
}

Fun_call()

//****************************************************************************************************************************************
//fome sumbishon
var form = document.getElementById('sheetdb-form');
form.addEventListener("submit", e => {
  e.preventDefault();
  fetch(form.action, {
    method : "POST",
    body: new FormData(document.getElementById("sheetdb-form")),
  }).then(
    response => response.json()
  ).then((html) => {

    document.getElementById("regform").style.display="none";
    document.getElementById("sucesscard").style.display="block";
    var sddname = document.getElementById("stdname").value;
    document.getElementById("stdnamevalu").innerHTML="Hi "+sddname;
    document.getElementById("alered").style.display= "block"

    alertbox.render({
        alertIcon: 'success',
        title: 'Thank You!',
        message: 'The Registration was Successful.',
        btnTitle: 'Ok',
        border:true
        });
    form.reset()
  });
});

//get data
function getstddata(event) {
    // get code fron user
    var code = document.getElementById("vccood").value;
    var url = "https://sheetdb.io/api/v1/rj0iagdhcwfw0/search?Verification_code=";
    var apiurl = url+code;
    // Specify the API endpoint for user data
    const apiUrl = apiurl;
    // Make a GET request using the Fetch API
    fetch(apiurl)
    .then(response => {
        // if (!response.ok) {
        //     throw new Error('Network response was not ok');
        // }
        return response.json();
    })
    .then(data => {
        // Process the retrieved user data
        // console.log(data);

        var reg = data
        if(reg =="[object Object]" ){
            alertbox.render({
                alertIcon: 'success',
                title: 'Thank You!',
                message:'Student data found',
                btnTitle: 'Ok',
                border:true
            });
        }
        else{
            alertbox.render({
                alertIcon: 'error',
                title: 'Thank You!',
                message: 'Student not found.',
                btnTitle: 'Ok',
                border:true
            });
        }
        
        // alert(reg)
        var name = data[0].name;
        var pay = data[0].paymunt;
        var dep = data[0].Department;
        var clg = data[0].College_Name;
        var tid = data[0].Transaction_id;
        var mono = data[0].Contact_Number;
        var Status = data[0].Status;

        document.getElementById("std_name").innerHTML=name;
        document.getElementById("std_paymunt").innerHTML=pay;
        document.getElementById("std_Department").innerHTML=dep;
        document.getElementById("std_College").innerHTML=clg;
        document.getElementById("std_tid").innerHTML=tid;
        document.getElementById("std_number").innerHTML=mono;
        document.getElementById("std_Status").innerHTML=Status;
        

    })
    .catch(error => {
        console.error('Error:', error);
    });
    
}
// get data in to table
function getStaffData(event){
    event.preventDefault();
    fetch('https://sheetdb.io/api/v1/rj0iagdhcwfw0')
    .then(response =>response.json())
    .then(data => {

        // console.log(data)
        let staffs = data
        // console.log(staffs)
        var table = "<table class= table table-sm>";
        
        // now add another row to show subject
        table += `<tr>
                    <th>S.NO</th>
                    <th>Name</th>
                    <th>College Name</th>
                    <th>Department</th>
                    <th>Contact Number</th>
                    <th>paymunt</th>
                    <th>Verification code</th>
                </tr>`;
        // now loop through staffs
        // show their name and marks
        for(let i = 0; i < staffs.length; i++) {
            table += "<tr>";
            table += `<td>${i}</td>`;
            table += `<td>${staffs[i].name}</td>`;
            table += `<td>${staffs[i].College_Name}</td>`;
            table += `<td>${staffs[i].Department}</td>`;
            table += `<td>${staffs[i].Contact_Number}</td>`;
            table += `<td>${staffs[i].paymunt}</td>`;
            table += `<td>${staffs[i].Verification_code}</td>`;
            table += "</tr>";
        }
        table += "</table>";
        // append table to body
        document.getElementById("staffList").innerHTML += table;
    })
}
// update the Status
function updateStatus(event){
    var vccode = document.getElementById("vccood").value;
    var vccode2 = vccode+"?"
    var urlapi = "https://sheetdb.io/api/v1/rj0iagdhcwfw0/Verification_code/"
    var urlapi2 =  urlapi+vccode2
    // alert(urlapi2)

    fetch(urlapi2, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data: {
                'Status': "present"
            }
        })
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        alertbox.render({
            alertIcon: 'success',
            title: 'Thank You!',
            message:'updated success',
            btnTitle: 'Ok',
            border:true
        });
    });
    
}

//****************************************************************************************************************************************