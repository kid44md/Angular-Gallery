import { inject, Injectable } from "@angular/core";
@Injectable({
    providedIn:'root',
})

export class LoggerService{

    logMessage(message:any):void {

        console.log(message);
    }
}