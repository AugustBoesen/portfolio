import React from 'react'

const Age = () => {
    const birthDate = new Date(1999); 
    const difference = Date.now() - birthDate.getTime();
    const age = new Date(difference);
  
    return Math.abs(age.getUTCFullYear() - 1999);
  }

export default Age