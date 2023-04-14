
Main = {
    init: function() {
    
        document.getElementById("icon-dice").addEventListener("click", function () {
         new DiceApp()});

    }
}


window.addEventListener("load", Main.init);