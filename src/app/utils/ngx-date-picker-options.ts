import { IMyDateModel, IMyDate, INgxMyDpOptions } from "ngx-mydatepicker";
import { Injectable } from "@angular/core";

@Injectable()
export class NgxDatePickerOptions {

     today: IMyDate = {
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        day: new Date().getDate()
    } as IMyDate;

    get options(): INgxMyDpOptions {
        return {
            dateFormat: 'mm/dd/yyyy',
            satHighlight: false,
            sunHighlight: false,
            markCurrentDay: true,
            highlightDates: [this.today]
        };
    }

    FormatDateToNgxDate(value) {
        if (value != null) {
            value = new Date(value);
            var obj: IMyDateModel = {
                date: {
                    year: value.getFullYear(),
                    month: value.getMonth() + 1,
                    day: value.getDate()
                },
                jsdate: value,
                formatted: `${value.getMonth() + 1}/${value.getDate()}/${value.getFullYear()}`,
                epoc: 111
            } as IMyDateModel;
            return obj;
        }
        return null;
    }
}