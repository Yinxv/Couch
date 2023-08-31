var header = document.getElementById("myHeader");

var sticky = header.offsetTop;

function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

window.onscroll = function() {
  stickyHeader();
};

function redirectToPage1(){
    window.location.href = "Contact.html";
  }
  
  function redirectToPage2() {
    window.location.href = "Services.html";
  }
  
  function redirectToPage3() {
    window.location.href = "About.html";
  }
  
  function redirectToPage10() {
    window.location.href = "Home_page.html"
  }

  function redirectToPage9() {
    window.location.href = "Shop.html"
  }