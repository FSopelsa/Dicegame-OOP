
// Applikationen byggs upp genom att hämta/skapa de tilltänkta elementen med ".getElementById" och ".createElement()".
// Genom att referera till elementens ID får de automatiskt egenskaper från färdiga CSS-dokument.
// Nya element som skapas kopplas ihop med förälder-element genom ".appenChild", och görs därmed även synliga.

class DiceApp {

    constructor() {
         const contentWrapper = document.getElementById('page-content-wrapper');
         this.pointCounter = 0;
         this.dieValues = [];
         this.audio = new Audio('src/wav/add.wav');
// ________________________________________________________________________________________,
//        Applikationens fönster.
/**/    
          this.window = Object.assign(document.createElement('div'), {className: 'dice-window-wrapper',});
          var windows = [];
          windows.push(this.window);
            contentWrapper.appendChild(this.window);
// ________________________________________________________________________________________,
//        Fönstrets meny (stäng-knapp).
/**/   
          this.diceMenubarWrapper = Object.assign(document.createElement('div'), {className: 'dice-menubar-wrapper',});
            this.window.appendChild(this.diceMenubarWrapper);
/*close*/ this.close = Object.assign(document.createElement('div'), {className: 'close',});
            this.diceMenubarWrapper.appendChild(this.close);
          var self = this;
          this.close.addEventListener("click", function () {
console.log("close");            
            self.window.remove();
          });
// ________________________________________________________________________________________,
//        Fönstrets knappar med händelselyssnare, samt poängräknare.
/**/ 
          this.toolbarWrapper = Object.assign(document.createElement('div'), {className: 'dice-toolbar-wrapper',});
            this.window.appendChild(this.toolbarWrapper);
          this.ul = Object.assign(document.createElement('ul'));
            this.toolbarWrapper.appendChild(this.ul);

/*add*/   this.add = Object.assign(document.createElement('li'), {className: 'add',});
            this.ul.appendChild(this.add);
          var self = this;
          this.add.addEventListener("click", function () {
console.log("add");            
            self.audio.play();
            self.die = new Die();
              self.diceUl.appendChild(self.die.dieElem);
            self.pointCounter += self.die.dieNumValue;
              self.dieValues.push(self.die.dieNumValue);
            self.countPoints();
          });

/*remove*/this.remove = Object.assign(document.createElement('li'), {className: 'remove',});
            this.ul.appendChild(this.remove);
          var self = this;          
          this.remove.addEventListener("click", function () {  
console.log("remove");            
            self.audio.play();
            self.pointCounter -= self.dieValues.splice(-1, 1);
            self.diceUl.removeChild(self.diceUl.lastChild);
            self.countPoints();
          });

/*roll*/  this.roll = Object.assign(document.createElement('li'), {className: 'roll',});
            this.ul.appendChild(this.roll);
          var self = this;
          this.roll.addEventListener("click", function () {
console.log("roll");            
            self.audio.play();
            self.pointCounter = 0;
            for (let i = 0; i < self.dieValues.length; i++) {
                  self.diceUl.removeChild(self.diceUl.lastChild);
                self.die = new Die();
                  self.diceUl.prepend(self.die.dieElem);
                self.pointCounter += self.die.dieNumValue;
              }
              self.countPoints();
          });
          
          this.li = Object.assign(document.createElement('li'));
            this.ul.appendChild(this.li);

          this.counter = Object.assign(document.createElement('ul'), {className: 'dice-toolbar-counter-wrapper',});
            this.li.appendChild(this.counter);
          this.digi1 = Object.assign(document.createElement('li'), {className: 'zero',});
          this.digi2 = Object.assign(document.createElement('li'), {className: 'zero',});
          this.digi3 = Object.assign(document.createElement('li'), {className: 'zero',});
          this.digi4 = Object.assign(document.createElement('li'), {className: 'zero',});
          this.digi5 = Object.assign(document.createElement('li'), {className: 'zero',});
          this.counter.appendChild(this.digi1); this.counter.appendChild(this.digi2); this.counter.appendChild(this.digi3); this.counter.appendChild(this.digi4); this.counter.appendChild(this.digi5);
// ________________________________________________________________________________________,
//        -Område där tärningar visas.
/**/   
          this.diceContentWrapper = Object.assign(document.createElement('div'), {className: 'dice-content-wrapper',});
            this.window.appendChild(this.diceContentWrapper);
          this.diceUl = Object.assign(document.createElement('ul'), {className: 'dice-ul',}, {id: 'dice-ul',});
            this.diceContentWrapper.appendChild(this.diceUl); 
// ________________________________________________________________________________________,
//        -Drag-drop-funktionalitet.
/**/             
          var drag = new DragnDrop();
          for (var i = 0; i < windows.length; i++) {
            var x = drag.add(windows[i], windows[i]);
          }
// ________________________________________________________________________________________,
//        -Funktion som räknar ut poäng.
//   Det sammanlagda värdet av framtagna tärningar har sparats i variablen pointCounter.
//   Värdet görs nu om till en sträng, som sedan delas upp mellan varje siffra och sparas i array (splitStr).
//   for-loopen går igenom splitStr och sparar en sträng-motsvarighet till varje insättning i en ny array (lValue).
//   Beroende på lValues längd läggs varje insättning in som ny class i motsvarande poäng-räknar-element,
//   vilket ändrar vilken siffra som visas med hjälp av CSS.
/**/  
      this.countPoints = function() {
          let str = this.pointCounter.toString();
          this.splitStr = str.split('');
          this.lValues = [];
          for (var i = 0; i < this.splitStr.length; i++) {
              switch (this.splitStr[i]) {
                case "0":
                  this.lValues.push("zero");
                  break;
                case "1":
                  this.lValues.push("one");
                  break;
                case "2":
                  this.lValues.push("two");
                  break;
                case "3":
                  this.lValues.push("three");
                  break;
                case "4":
                  this.lValues.push("four");
                  break;
                case "5":
                  this.lValues.push("five");
                  break;
                case "6":
                  this.lValues.push("six");
                  break;
                case "7":
                  this.lValues.push("seven");
                  break;
                case "8":
                  this.lValues.push("eight");
                  break;
                case "9":
                  this.lValues.push("nine");
                  break;
              }
          }    
              if (this.lValues.length == 5) {
                this.digi1.className = this.lValues[0];
                this.digi2.className = this.lValues[1];
                this.digi3.className = this.lValues[2];
                this.digi4.className = this.lValues[3];
                this.digi5.className = this.lValues[4];
              }
              if (this.lValues.length == 4) {
                this.digi1.className = "zero";
                this.digi2.className = this.lValues[0];
                this.digi3.className = this.lValues[1];
                this.digi4.className = this.lValues[2];
                this.digi5.className = this.lValues[3];
              }
              if (this.lValues.length == 3) {
                this.digi1.className = "zero";
                this.digi2.className = "zero";
                this.digi3.className = this.lValues[0];
                this.digi4.className = this.lValues[1];
                this.digi5.className = this.lValues[2];
              }
              if (this.lValues.length == 2) {
                this.digi1.className = "zero";
                this.digi2.className = "zero";
                this.digi3.className = "zero";
                this.digi4.className = this.lValues[0];
                this.digi5.className = this.lValues[1];
              }
              if (this.lValues.length == 1) {
                this.digi1.className = "zero";
                this.digi2.className = "zero";
                this.digi3.className = "zero";
                this.digi4.className = "zero";
                this.digi5.className = this.lValues[0];
              }
      }
    }
} 
