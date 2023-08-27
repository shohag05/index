
const School = require('./school.js');

const school = new School;
//register a listener
school.on('bellRing',(param) => {console.log('We need to run', param)})

school.startPeriod();


///////////////////////

const fs = require('fs');

// const ourReadStrem = fs.createReadStream(`${__dirname}/data.txt`,'utf8');
const ourReadStrem = fs.createReadStream(`${__dirname}/data.txt`);

ourReadStrem.on('data', (cunk) => {
    console.log(cunk);
})


///////////////////////