
  
function zero (time){
    if(time < 10){
        return `0${time}`
    }else{
        return `${time}`
    }
}

function task(index) {

    switch (index) {
        case 0:
            return `sun`;
            break;
        case 1:
            return 'mon';
            break;

        case 2:
            return 'tues';
            break;
        case 3:
            return 'wed'
            break;
        case 4:
            return 'thur'
            break;

        case 5:
            return 'fri'
            break;
        case 6:
            return 'sat'
    }
}



 