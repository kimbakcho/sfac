import {DateTime} from "luxon";


export default class TimeUtil {
    private static instance: TimeUtil;

    private constructor() {
    }

    public static getInstance(): TimeUtil {
        if (!TimeUtil.instance) {
            TimeUtil.instance = new TimeUtil();
        }

        return TimeUtil.instance;
    }

    public nowDiffTimeStr(dateTime: DateTime) {
        let diffSec = DateTime.now().diff(dateTime,"seconds").seconds
        if(diffSec < 60){
            return "방금 전"
        }
        if(diffSec < 3600){
            return `${(diffSec/60).toFixed(0)}분전`
        }
        if(diffSec < 86400){
            return `${(diffSec/3600).toFixed(0)}시간 전`
        }
        return `${dateTime.toFormat("yyyy-MM-dd HH:mm:ss")}`
    }

}
