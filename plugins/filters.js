import Vue from 'vue'
import moment from 'moment'
import { mapValues } from 'lodash'

// new ui

Vue.filter('standardFormat', function(value) {
    if (value) {
        return moment(String(value)).format('yyyy-mm-d')
    }
})

Vue.filter('formatTimeHM', function(value) {
    if (value) {
      return moment(String(value)).format('hh:mm')
    }
})
Vue.filter('day', function(value) {
    if (value) {
        return moment(String(value)).format('DD')
    }
})
Vue.filter('month', function(value) {
    if (value) {
        return moment(String(value)).format('MMM')
    }
})
Vue.filter('payrollPayprocess', function(value) {
    if (value) {
        return moment(String(value)).format('DD MMM YYYY')
    }
})
Vue.filter('requestsDateFormat', function(value) {
    if (value) {
        return moment(String(value)).format('DD MMM YYYY')
    }
})
Vue.filter('amountInAnnotations', function(val) {
    let num = parseInt(val)
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
     }
     if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
     }
     if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
     }
     return num.toString();
})
Vue.filter('accruedLeaveDateFormat', function(value) {
    if (value) {
        return moment(String(value)).format('YYYY')
    }
})
Vue.filter('leaveRequestDateFormatter', function(value) {
    if (value) {
        return moment(String(value)).format('dddd, MMM DD, YYYY')
    }
})

Vue.filter('serviceFilter', function (value,arg) {
	if(value){
        if(arg == 'dateFilter'){
            return moment(String(value)).format('dddd MMM DD YYYY')
        }
    }
})
Vue.filter('dateToDay', function(value) {
    if (value) {
        return moment(String(value)).format('DD')
    }
})
Vue.filter('dateToMonth', function(value) {
    if (value) {
        return moment(String(value)).format('MMM')
    }
})
Vue.filter('documentsDateFormatter', function(value) {
    if (value && value != '-----') {
        return moment(String(value)).format('MMM - DD - YYYY')
    } else return '-----'
})
Vue.filter('generalDateFormatter', function(value) {
    if (value) {
        return moment(String(value)).format('DD MMMM YYYY')
    }
})
Vue.filter('dob', function(value) {
    if (value) {
        return moment(String(value)).format('DD MMMM')
    }
})
Vue.filter('attendanceRequestDate', function(value) {
    if (value) {
        return moment(String(value)).format('MMM DD')
    }
})
Vue.filter('doj', function(value) {
    if (value) {
        return moment(String(value)).format('DD MMMM')
    }
})
Vue.filter('newsDateFormatter', function(value) {
    if (value) {
        return moment(String(value)).format('MMMM DD YYYY')
    }
})
Vue.filter('TeamLeaveDateFormatter', function(value) {
    if (value) {
        return moment(String(value)).format('MMM DD/YY')
    }
})

//till here

Vue.filter('formatDate', function(value) {
    if (value) {
        return moment(String(value)).format('MMM DD, YYYY h:mm a')
    }
})

Vue.filter('formatTime', function(value) {
    if (value) {
        return moment(String(value)).format('hh:mm:ss')
    }
})

Vue.filter('secondsToHourMinuteTime', (duration, showUnits = true) => {
    if (duration) {
        let milliseconds = Math.floor((duration % 1000) / 100),
            seconds = Math.floor((duration / 1000) % 60),
            minutes = Math.floor((duration / (1000 * 60)) % 60),
            hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return showUnits ? hours + "h " + minutes + "m" : hours + ":" + minutes;
    } 
})

Vue.filter('formatDateWithoutTime', function(value) {
    if (value) {
        return moment(String(value)).format('MMMM DD, YYYY')
    }
})

Vue.filter('YearformatDate', function(value) {
    if (value) {
        var d = new Date(value);
        return d.getFullYear();    
    }
})

Vue.filter('MonthformatDate', function(value) {
    if (value) {
        return new Intl.DateTimeFormat('en-US', { month: 'long' }).format(value);
    }
})
Vue.filter('MonthformatDate_fullDay', function(value) {
    if (value) {
        return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(value);
        
    }
})

Vue.filter('payroll', function(value) {
    if (value) {
        return moment(String(value), 'YYYY/MM').format('MMM YYYY')
    }
})

Vue.filter('uppercase', function (value) {
	return value.toUpperCase()
})

Vue.filter('capitalize', function (value) {
	if(value){
        return value[0].toUpperCase() + value.substring(1)
    }
})

Vue.filter('dateFormatter', function(value) {
    if (value) {
        return moment(String(value), 'DD/MM/YYYY').format('MMM DD, YYYY')
    }
})
Vue.filter('textDate', function(value) {
    if (value) {
        return moment(String(value), 'YYYY-MM-DD').format('MMM DD, YYYY')
    }
})
Vue.filter('time', function(value) {
    if (value) {
        return moment(String(value)).format('hh:mm A')
    }
})

Vue.filter('time_without_ampm', function(value) {
    if (value) {
        return moment(String(value)).format('hh:mm')
    }
})

Vue.filter('time_with_ampm', function(value) {
    if (value) {
        return moment(String(value)).format('hh:mm A')
    }
})

Vue.filter('leavesDateFormatter', function(value) {
    if (value) {
        return moment(String(value)).format('dddd MMM DD, YYYY')
    }
})

Vue.filter('ampm', function(value) {
    if (value) {
        return moment(String(value)).format('A')
    }
})

Vue.filter('ticketingDateFormatter', function(value) {
    if (value) {
        return moment(String(value)).format('MMM DD, YYYY')
    }
})

Vue.filter('militoTime', function (duration) {
    if(duration > 0){
        var seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        return hours + ":" + minutes + ":" + seconds;
    }
    else{
        let seconds = Math.floor((duration / 1000) % 60)
        let s = Math.abs(seconds)

        let t = [0, 0, 0]
        let r = s % 3600

        t[0] = Math.floor(s / 3600)
        t[1] = Math.floor(r / 60)
        r = r % 60
        t[2] = r

        return (seconds < 0 ? "-" : "") + (t[0] < 10 ? "0" : "") + t[0]+":"+(t[1]<10?"0"+t[1]:t[1])+":"+(t[2]<10?"0"+t[2]:t[2])
        // return "- " + hours.replace('-','') + ":" + minutes.replace('-','') + ":" + seconds.replace('-','') 
    }
    
})

Vue.filter('nocDateFormatter', function(value) {
    if (value) {
        return moment(String(value), 'YYYY/MM/DD').format('DD MMM, YYYY')
    }
})

Vue.filter('paymonthDateFormatter', function(value) {
    if (value) {
        return moment(String(value)).format('MMM, YYYY')
    }
})

Vue.filter('nocDateFormatterNew', function(value) {
    if (value) {
        return moment(String(value), 'DD/MM/YYYY').format('DD MMM, YYYY')
    }
})

Vue.filter('eventDate', function(value) {
    if (value) {
        return moment(String(value)).format('MMM DD')
    }
})

Vue.filter('PayslipDateFormatter', function(value) {
    if (value) {
        return moment(String(value), 'YYYY/MM').format('MMM, YYYY')
    }
})

Vue.filter('dayMonth', function(value) {
    if (value) {
        return moment(String(value)).format('DD/MM')
    }
})

// Regex for Rewards page content which is present in html

Vue.filter('HTMLFormatter', function(value) {
    if (value) {
        return value.replace(/<\/?[^>]+(>|$)/g, "").replace('&nbsp;', '').replace('&amp;', '&');
    }
})

Vue.filter('ArrayFormatter', function(value) {
    if (value) {
        return value.toString().replace('&amp;', '&');
    }
})

//date formatter

Vue.filter('DaysFinder', function(value) {
    if (value) {
        let year = value.split('-')
        return new Date(year[0], year[1], 0).getDate();
    }
})

Vue.filter('truncateText', function (text, length, suffix) {
    if (text.length > length) {
        return text.substring(0, length) + suffix;
    } else {
        return text;
    }
});

Vue.filter('firstLetter', function (s) {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase()
});


// (12345.67).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

Vue.filter('amountFormatter', function(value) {
    // if (value) {
    //     if (value == '' || value == null || value == 0) {
    //         value = 0.00
    //         return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    //     } else {
    //         return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    //     }
    // }
    return value
})

Vue.filter('twoDecimals', function(value) {
    if (value && typeof(value) != String) {
        return value.toFixed(2)
    }
    else{
        return value
    }
})

Vue.filter('oneDecimals', function(value) {
    if (value && typeof(value) != String) {
        return value.toFixed(1)
    }
    else{
        return value
    }
})