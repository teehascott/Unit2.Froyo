// prompt for froyo flavors
let flavorsList = prompt("vanilla,chocolate,coffee,cake batter,cookie dough,strawberry,pineapple,orange");

// splits at the comma and makes an array (not working?)
let flavorsArray = flavorsList.split(',');

// makes empty object to count flavors? (not working?)
let flavorNum = {};

// keep the numbers of each flavor ordered? (not working?) also trim for whitespace
for (let i = 0; i < flavorsArray.length; i++) { 
    let flavor = flavorsArray[i].trim();  
    if (flavorNum[flavor]) { 
        flavorNum[flavor]++; 
    } 
    else {
         flavorNum[flavor] = 1; 
        }
}

// makes a table of the flavor count
console.table(flavorNum);
