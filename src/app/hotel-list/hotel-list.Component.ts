
import { Component, OnInit } from '@angular/core';
import { HotelListService } from './hotel-list.service'

import { Ihotel} from './hotel'

@Component({
  selector:'app-hotel-list',
  templateUrl:'./hotel-list.component.html',
  styleUrls: ['./hotel-list.Component.css']




})

export class hotelListComponent implements OnInit{

    public title2 = 'Liste hotels';
    // cheminImage:any = "/assets/images/agadir.jpg";

    public showBadge: boolean= false;



    public toggleIsNewbadge():void{
      this.showBadge=!this.showBadge;
    }

    public hotels: Ihotel[]=[];

    private _hotelFilter ="Recherche" ;
    public filteredHotels: Ihotel[] =[];
    // private hotelFilter ='Recherche';
    public receiveRating:string="" ;

    constructor(private hotelListService : HotelListService){

    }


    ngOnInit(){
      this.hotels = this.hotelListService.getHotels();
      this.filteredHotels = this.hotels;
      this.hotelFilter='';
    }

    public get hotelFilter():string{
      return this._hotelFilter;
    }

    public set hotelFilter(filter:string){
      this._hotelFilter = filter;

      this.filteredHotels = this.hotelFilter ? this.filterdHotel(this._hotelFilter):this.hotels;
    }

    public receiveRatingClick(message:string):void {
      this.receiveRating=message;
    }

    private filterdHotel(criteria:string):Ihotel[]{

      criteria = criteria.toLocaleLowerCase();

      const res = this.hotels.filter( (hotel: Ihotel  )=> hotel.hotelName.toLocaleLowerCase().indexOf(criteria) !=-1);
      return res;

    }

}