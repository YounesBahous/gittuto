import { Component,OnChanges,Input, EventEmitter, Output} from "@angular/core";
@Component({
    selector: 'app-star-rating',
    templateUrl:'./star-rating.Component.html',
    styleUrls: [ './star-rating.Component.css']
}
)
export class StartRatingComponent implements  OnChanges {

    public starWidth: number=5;  // taille étoile
    
    @Input()
    public rating: number=1; // nombre d'étoile

    @Output()
    public startRatingClicked():EventEmitter<string> = new EventEmitter<string>();
    
    
    ngOnChanges(){
        this.starWidth= this.rating * 125 / 5;
    }
    public sendRating():void{

        this.startRatingClicke.emit(`La note est de ${this.rating}`);

    }
}