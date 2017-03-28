import {Injectable} from '@angular/core';

@Injectable()
export class HomeService{
    getobjects(){
        return[
            {"id":1,"name":"Sowjanya","gender":"female"},
            {"id":2,"name":"Sneha","gender":"female"},
            {"id":3,"name":"Saranya","gender":"female"},

        ]
    }
}