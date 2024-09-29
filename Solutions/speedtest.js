function speedlimiter() {
    //prompt use to input the speed
    let speed = parseInt(prompt('Enter the speed of the car'))
    //set the recommended speed
    const recSpeed = 70
      
    //check is the speed is within recommended speed
    if (speed <= recSpeed) {
        return('OK')
    }else{
        // determinng the demerit points
        let excessSpeed = speed - recSpeed
        let dPoints = Math.floor(excessSpeed / 5)

        //show the number of points
        console.log(`you have ${dPoints} demerits!`);
        
        //determining whether the license sould be suspended
        if (dPoints > 12) {
            return('Licence Suspended')
        }
    }
}