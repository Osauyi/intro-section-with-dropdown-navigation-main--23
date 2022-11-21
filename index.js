const first = document.querySelector(".firstdropdown")
const second = document.querySelector(".seconddropdown")


function OpenMenu() {
      document.querySelector(".Menu").style.width = "65%";
      document.querySelector("body").style.backgroundColor =
        " rgba(0,0,0, 0.5)";
    }

    function closeMenu() {
      document.querySelector(".Menu").style.width = "0%";
      document.querySelector("body").style.backgroundColor = " #ffff";
    }
    


    first.addEventListener("click", open)

    function open() {
      document.querySelector(".insideDropdownF").classList.toggle("showinsideF")
      document.querySelector(".arrowF").classList.toggle("arrowdownF")
    }

    second.addEventListener("click", openSecond)

    function openSecond() {
      document.querySelector(".insidedropdownc").classList.toggle("showinsideC")
      document.querySelector(".arrowS").classList.toggle("arrowdownS")
    }