function zero(time) {
    if (time < 10) {
        return `0${time}`
    } else {
        return `${time}`
    }
}

function day_Cal(day) {

if (day == 0) {
return `
<span class="bg-danger text-white">sun</span>
<span>mon</span>
<span>tues</span>
<span>wed</span>
<span>thur</span>
<span>fri</span>
<span>sat</span>`
}else if(day == 1){
return `
<span>sun</span>
<span class="bg-danger text-white">mon</span>
<span>tues</span>
<span>wed</span>
<span>thur</span>
<span>fri</span>
<span>sat</span>`
}else if(day == 2){
return `
    <span>sun</span>
    <span>mon</span>
    <span class="bg-danger text-white">tues</span>
    <span>wed</span>
    <span>thur</span>
    <span>fri</span>
    <span>sat</span>`
}else if(day == 3){
return `
    <span>sun</span>
    <span>mon</span>
    <span>tues</span>
    <span class="bg-danger text-white">wed</span>
    <span>thur</span>
    <span>fri</span>
    <span>sat</span>`

}else if(day == 4){
return `
    <span>sun</span>
    <span>mon</span>
    <span>tues</span>
    <span>wed</span>
    <span class="bg-danger text-white">thur</span>
    <span>fri</span>
    <span>sat</span>`
}else if(day == 5){
return `
    <span>sun</span>
    <span>mon</span>
    <span>tues</span>
    <span>wed</span>
    <span>thur</span>
    <span class="bg-danger text-white">fri</span>
    <span>sat</span>`
}else if (day == 6){
return `
    <span>sun</span>
    <span>mon</span>
    <span>tues</span>
    <span>wed</span>
    <span>thur</span>
    <span>fri</span>
    <span class="bg-danger text-white">sat</span>`
 }
}