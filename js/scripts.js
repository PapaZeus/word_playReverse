$(document).ready(function() {
  $("#wordform").submit(function(event){
    var str = $("#sentence").val();
    var wordPlayArray = str.split(' ');
      console.log(wordPlayArray);


//Make a new array for characters
    var newArray = [];

//Take the words that have more than 3 characters and make
//an array of their characters
      wordPlayArray.forEach(function(word) {
        if (word.length > 3){

            newArray.push(word);
            console.log(newArray);
          }
            newArray.reverse();
            newArray.toString();
        });
        alert(newArray);
    event.preventDefault();
  });
});
