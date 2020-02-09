import { Injectable } from "@angular/core";

@Injectable()
export class CustomMasks {

    CreditCardExpireMask(){
        return [ /[0,1]/, /[0-9]/,"/", /\d/, /\d/];
    }

    UsaPhoneMask(){
        return [ "(", /[1-9]/, /\d/, /\d/, ")"," ", /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/ ];
    }
}