function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "menu-bar") {
            x.className += " responsive";
        } else {
            x.className = "menu-bar";
        }
        }