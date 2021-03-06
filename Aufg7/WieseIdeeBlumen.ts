namespace Aufg7_Wiese {

    export class Flower {

        x: number;
        y: number;
        radius: number = 10;
        winkel: number = 0;
        p: number;


        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        drawDrops(): void {

            inhalt.moveTo(0, 0);
            inhalt.beginPath();
            inhalt.arc(this.x - 3, this.y + 10, this.radius, this.winkel, 2 * Math.PI);
            inhalt.fillStyle = "#e066ff";
            inhalt.fill();
            inhalt.closePath();

            inhalt.moveTo(0, 0);
            inhalt.beginPath();
            inhalt.arc(this.x + 7, this.y + 9, this.radius, this.winkel, 2 * Math.PI);
            inhalt.fillStyle = "#ff6347";
            inhalt.fill();
            inhalt.closePath();

            inhalt.moveTo(0, 0);
            inhalt.beginPath();
            inhalt.arc(this.x + 10, this.y, this.radius, this.winkel, 2 * Math.PI);
            inhalt.fillStyle = "#e066ff";
            inhalt.fill();
            inhalt.closePath();

            inhalt.moveTo(0, 0);
            inhalt.beginPath();
            inhalt.arc(this.x + 3, this.y - 8, this.radius, this.winkel, 2 * Math.PI);
            inhalt.fillStyle = "#ff6347";
            inhalt.fill();
            inhalt.closePath();

            inhalt.moveTo(0, 0);
            inhalt.beginPath();
            inhalt.arc(this.x - 8, this.y - 8, this.radius, this.winkel, 2 * Math.PI);
            inhalt.fillStyle = "#e066ff";
            inhalt.fill();
            inhalt.closePath();

            inhalt.moveTo(0, 0);
            inhalt.beginPath();
            inhalt.arc(this.x - 12, this.y, this.radius, this.winkel, 2 * Math.PI);
            inhalt.fillStyle = "#ff6347";
            inhalt.fill();
            inhalt.closePath();

            inhalt.moveTo(0, 0);
            inhalt.beginPath();
            inhalt.arc(this.x, this.y, this.radius, this.winkel, 2 * Math.PI);
            inhalt.fillStyle = "#FFFFFF";
            inhalt.fill();
            inhalt.closePath();
        }

        drawBonBon(): void {

            inhalt.beginPath();

            inhalt.fillStyle = " #c71585 ";
            inhalt.strokeStyle = "#c71585";
            inhalt.moveTo(this.x, this.y);
            inhalt.lineTo(this.x + 15, this.y - 15);
            inhalt.lineTo(this.x + 15, this.y + 15);
            inhalt.closePath();
            inhalt.fill();
            inhalt.stroke();

            inhalt.beginPath();
            inhalt.fillStyle = " #c71585 ";
            inhalt.strokeStyle = "#c71585";
            inhalt.moveTo(this.x, this.y);
            inhalt.lineTo(this.x - 15, this.y + 15);
            inhalt.lineTo(this.x - 15, this.y - 15);
            inhalt.closePath();
            inhalt.fill();
            inhalt.stroke();

            inhalt.moveTo(0, 0);
            inhalt.beginPath();
            inhalt.arc(this.x, this.y, this.radius, this.winkel, 2 * Math.PI);
            inhalt.fillStyle = "#ff69b4";
            inhalt.fill();
            inhalt.closePath();
        }

        drawLollipop(): void {

            inhalt.moveTo(0, 0);
            inhalt.beginPath();
            inhalt.arc(this.x, this.y, this.radius + 20, this.winkel, 2 * Math.PI);
            inhalt.fillStyle = "#8b0000";
            inhalt.fill();
            inhalt.closePath();

            inhalt.moveTo(0, 0);
            inhalt.beginPath();
            inhalt.arc(this.x, this.y, this.radius + 15, this.winkel, 2 * Math.PI);
            inhalt.fillStyle = "#FFFFFF";
            inhalt.fill();
            inhalt.closePath();

            inhalt.moveTo(0, 0);
            inhalt.beginPath();
            inhalt.arc(this.x, this.y, this.radius + 10, this.winkel, 2 * Math.PI);
            inhalt.fillStyle = "#8b0000";
            inhalt.fill();
            inhalt.closePath();

            inhalt.moveTo(0, 0);
            inhalt.beginPath();
            inhalt.arc(this.x, this.y, this.radius + 5, this.winkel, 2 * Math.PI);
            inhalt.fillStyle = "#FFFFFF";
            inhalt.fill();
            inhalt.closePath();

            inhalt.moveTo(0, 0);
            inhalt.beginPath();
            inhalt.arc(this.x, this.y, this.radius, this.winkel, 2 * Math.PI);
            inhalt.fillStyle = "#8b0000";
            inhalt.fill();
            inhalt.closePath();
        }
    }
}