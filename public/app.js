// get user's data
// get user's coordinates


// get user's time
function userTime(){
    const now = new Date()
    return now.getHours()
}
console.log(userTime())

// helper functions
// check time of day
function getMealTime() {
    const tod = userTime()
    // if (tod > 20) {return 'late-night snack'}
    // else if (tod > 16) {return 'dinner'}
    // else if (tod > 11) {return 'lunch'}
    // else {return 'breakfast'}
    return tod > 20 ? 'late night snack' : tod > 16 ? 'dinner' : tod > 11 ? 'lunch' : 'breakfast'
}

console.log(getMealTime())

// build ads
// build ad 1


// build ad 2


// event listeners
// on load, build ads
