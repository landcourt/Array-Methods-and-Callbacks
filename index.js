// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

console.log(fifaData);
console.log(fifaData[828]["Home Team Name"]);
console.log(fifaData[828]["Away Team Name"]);
console.log(fifaData[828]["Home Team Goals"]);
console.log(fifaData[828]["Away Team Goals"]);
console.log(fifaData[828]["Win conditions"]);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

 const getFinals = fifaData.filter(function(item){
    return item["Stage"] === "Final";
});
console.log(getFinals);



//function getFinals(arr){
//    const finalsData = [];
//    for(let i = 0; i < arr.length; i++){
//        if(arr[i]["Stage"] === "Final"){
//            finalsData.push(arr[i]);
 //       }
//    }
//    console.log(finalsData);
//}

//getFinals(fifaData);

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

// function getYears(cb){
//    const years = [];
//    for(let i = 0; i < cb.length; i++){
//        years.push(cb[i]["Year"]);
//    }
//    console.log(years);
//}

//getYears(getFinals);

const years = [];

const getYears = getFinals.map(function(item){
    return years.push(item["Year"]);
});

console.log(years);

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

// function getWinners(cb) {
//    const winners = [];
//    for(let i = 0; i < cb.length; i++){
//        if(["Home Team Goals"] > ["Away Team Goals"]){
//            winners.push(cb[i]["Home Team Name"]);
//        }if(["Away Team Goals"] > ["Home Team Goals"]){
//            winners.push(cb[i]["Away Team Name"])
//        }
//    }
//    console.log(winners);
//};
// getWinners(getFinals);

const winners = [];

const getWinners = getFinals.filter(function(item){
    if(["Home Team Goals"] > ["Away Team Goals"]){
        winners.push(item["Home Team Name"]);
    }if(["Away Team Goals"] > ["Home Team Goals"]){
        winners.push(item["Home Team Name"])
    }
});

console.log(winners);

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(cb1, cb2) {
    for(let i = 0; i < cb1.length; i++ && i < cb2.length){
    console.log(`In ${cb1[i]}, ${cb2[i]}, won the world cup!`);
}
};

getWinnersByYear(years, winners);

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

//function getAverageGoals() {

    

//};

//getAverageGoals();

const getAverageGoals = fifaData.reduce(function(acc, item){
    return acc + item["Home Team Goals"];
}, 0);

const getAverageGoalsAway = fifaData.reduce(function(acc, item){
    return acc + item["Away Team Goals"];
}, 0);

console.log(getAverageGoals);
console.log(getAverageGoalsAway);

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
