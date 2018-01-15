module.exports = {
    passphraseCheck: function(a) {
        var words = a.split(" ");
        for (var i = 0; i < words.length; i++) {
          for (var j = i+1; j < words.length; j++) {
            //Check if words are identical to each other
            if (words[i] === words[j]) {
              return "not valid";
            } else if (words[i].length === words[j].length) { 
              let c = words[j].toString();
              let d = [];
              let e = 0;
              //Check if words are anagrams of each other
              for (let k = 0; k < words[i].length; k++) {
                  d.push(words[i].indexOf(c.charAt(k))!==-1);
              }
              //Check to see the number of items that are true in the array
              d.forEach(function(value){
                if(value === true){
                  e++;
                }
              });
              //Check to see if length of a word is equal to the number of letters that are identical with the another word
              if(words[i].length === e) {
                return "not valid";
              }
            }
          }
        }
        return "valid";
    }
}