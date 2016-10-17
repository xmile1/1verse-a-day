unirest = require('unirest');

console.log("Its a brand new day the lord has made and it is marvelous in our sight");
console.log("Please wait while I retrieve your verse for the day");
getVerse("random");

//John+3:16-17
function getVerse(passage){
    unirest.get("http://labs.bible.org/api/?passage="+ passage + "&formatting=plain")
.end(function (result) {
  console.log(result.body);
});
}