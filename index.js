// Code your solution here
function findMatching(array, string){
    const names = array.filter(name => name.toLowerCase() === string.toLowerCase());
    return names;
 }

 function fuzzyMatch(array, string){
     const driverNames = array.filter(name => name.charAt() === string.charAt());
     return driverNames;
 }

 function matchName(driver, string){  
     const match = driver.filter(details => details.name === string);
     return match;
 }
 
 console.log(matchName(drivers, "Bobby"));