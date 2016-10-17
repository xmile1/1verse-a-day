unirest = require('unirest');

  var prompt = require('prompt');



console.log("Its a brand new day the lord has made and it is marvelous in our sight");
console.log("Please wait while I retrieve your verse for the day");
getVerse("random");
console.log("I hope that blessed you!");
console.log("Do you want to search for a bible passage?");
console.log("Please enter your verse in the format John+3:12-20.");
console.log("Please be careful i am not protected from XSS attack");
promptUser(["verse"]);


//John+3:16-17
function getVerse(passage){
    unirest.get("http://labs.bible.org/api/?passage="+ passage + "&formatting=plain")
.end(function (result) {
  console.log(result.body);
});
}


function promptUser(inputIdentity){
    
  prompt.start();
  prompt.get(inputIdentity, function (err, result) {
    if (err) { return onErr(err); }
    getVerse(result[inputIdentity[0]]);
  });

}


  function onErr(err) {
    console.log(err);
    return 1;
  }
