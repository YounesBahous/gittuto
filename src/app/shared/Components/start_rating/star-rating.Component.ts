import { Component,OnChanges,Input} from "@angular/core";
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


    ngOnChanges(){
        this.starWidth= this.rating * 125 / 5;
    }
}