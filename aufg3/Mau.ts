
//In Zusammenarbeit mit Sara Kalinic, Christian Saile und Janett St�we die Lehrerin gespielt hat :P

document.addEventListener("DOMContentLoaded", function(): void {
    //Array anlegen
    let kartenSammlung: string[] = ["Pik 7", "Pik 8", "Pik 9",
        "Pik 10", "Pik Bube", "Pik Dame",
        "Pik K�nig", "Pik As",
        "Kreuz 7", "Kreuz 8", "Kreuz 9",
        "Kreuz 10", "Kreuz Bube", "Kreuz Dame",
        "Kreuz K�nig", "Kreuz As",
        "Karo 7", "Karo 8", "Karo 9",
        "Karo 10", "Karo Bube", "Karo Dame",
        "Karo K�nig", "Karo As",
        "Herz 7", "Herz 8", "Herz 9",
        "Herz 10", "Herz Bube", "Herz Dame",
        "Herz K�nig", "Herz As"];

    // Nachziehstapel (deck) 
    let nachziehStapel: HTMLElement = document.getElementById("deck");

        // ABLAGE 
    let ablage: HTMLDivElement = <HTMLDivElement>document.getElementById("discard");
    let handKarten: NodeListOf<HTMLDivElement> = <NodeListOf<HTMLDivElement>>document.getElementsByClassName("Handkarten");


    for (let v: number = 0; v < handKarten.length; v++) {

        //Karten von Hand in die Ablage
        handKarten[v].addEventListener("click", function(event: Event): void {
            let karteHand: HTMLDivElement = <HTMLDivElement>event.target;
            ablage.textContent = karteHand.textContent;
            karteHand.textContent = "";

        });
    }
    
    //Eventlistener auf den Nachziehstapel
    nachziehStapel.addEventListener("click", function(): void {
        //Zufallskarte generieren
        let zufallsKarte: string = kartenSammlung.splice(Math.round(Math.random() * (kartenSammlung.length - 1)), 1)[0];

        // Variable f�r funktion anlegen
        let leerKarte: HTMLDivElement = sucheLeerKarte();
        function sucheLeerKarte(): HTMLDivElement {

            for (let i: number = 0; i < handKarten.length; i++) {
                if (handKarten[i].textContent === "") {
                    return handKarten[i];
                }
            }
            return null;
        }

        if (leerKarte != null) {
            leerKarte.innerText = zufallsKarte;
        }

        if (kartenSammlung.length === 0) {
            nachziehStapel.innerText = "leer";
        }
    });


});