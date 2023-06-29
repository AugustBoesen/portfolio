import React from 'react'

const Greeter = () => {
    let myDate = new Date();
    let hours= myDate.getHours();
    let greet;

    if (hours < 12)
        greet =  "morning, early bird";
    else if (hours >= 12 && hours <= 17)
        greet = "afternoon, friend";
    else if (hours >= 17 && hours <= 24)
       greet = "evening, night owl";
    
    return <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-blue-200 to-purple-200'>Good {greet}.</span>
}

export default Greeter