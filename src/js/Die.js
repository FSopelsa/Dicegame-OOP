// ________________________________________________________________________________________,
//        - Tärningsklass.
//   Tärningarna ges ett 'li'-element (dieElem) som sedan kan appendas till rätt 'ul'-element i html-strukturen.
//   Ett tal mellan 1-6 slumpas fram, sparas i egenskapen dieNumValue och skickas till switch-sats där det
//   beroende på värde genererar en sträng-motsvarighet, som sätts i egenskapen dieLettValue samt som ändelse
//   i dieElem's klassnamn. Därmed styr sedan CSS-koden vilken tärningssida som visas då tärningen syns.
/**/  
class Die {
    
    constructor() {
        this.dieElem = document.createElement('li');
        this.dieNumValue = Math.floor(Math.random() * 6) + 1;
        this.dieLettValue = "";

        switch (this.dieNumValue) {
            case 1:
                this.dieLettValue = "one";
                break;
            case 2:
                this.dieLettValue = "two";
                break;
            case 3:
                this.dieLettValue = "three";
                break;
            case 4:
                this.dieLettValue = "four";
                break;
            case 5:
                this.dieLettValue = "five";
                break;
            case 6:
                this.dieLettValue = "six";
                break;
        }
        this.dieElem.className = "dice dice-side-" + this.dieLettValue;
        console.log(this.dieElem);
    }
    
}