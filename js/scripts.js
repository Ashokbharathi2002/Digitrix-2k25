/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

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

    // document.getElementById("errorno").innerHTML=lenmob;
}

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


function myotp() {
    let otp = '';
    for (let i = 0; i < 6; i++) {
      otp += Math.floor(Math.random() * 10);
    }
    console.log(otp)
    document.getElementById('Verificationcode').value = otp

    // document.getElementById('refens').innerHTML = otp;
    // document.getElementById("otpnumber").value = otp;
    // document.getElementById("otpnumber2").value = otp;
  
}

