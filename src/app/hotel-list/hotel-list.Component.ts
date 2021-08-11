
import { Component, OnInit } from '@angular/core';

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

    public hotels: Ihotel[]=[

      {
        hotelId:1,
        hotelName:'Agadir Beach,',
        price:205.3,
        imageUrl:"/assets/images/agadir.jpg",
        rating:3.5
      },
      {
        hotelId:2,
        hotelName:'Marrakech ville,',
        price:105.3,
        imageUrl:"/assets/images/Marakkech.jpg",
        rating:5
      },
      {
        hotelId:3,
        hotelName:'casablanca ville,',
        price:305.3,
        imageUrl:"/assets/images/casa.jpg",
        rating:4
      },
      {
        hotelId:4,
        hotelName:'Ifran ville',
        price:100.09,
        imageUrl:"/assets/images/ifran.jpg",
        rating:2.5
      },


    ]

    private _hotelFilter ="Recherche" ;
    public filteredHotels: Ihotel[] =[];
    // private hotelFilter ='Recherche';


    ngOnInit(){
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

    private filterdHotel(criteria:string):Ihotel[]{

      criteria = criteria.toLocaleLowerCase();

      const res = this.hotels.filter( (hotel: Ihotel  )=> hotel.hotelName.toLocaleLowerCase().indexOf(criteria) !=-1);
      return res;

    }

}