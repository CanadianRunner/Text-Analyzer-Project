
 //Business Logic

 function wordCounter(text) {
   if (text.trim().length === 0) {
     return 0;
   }
   let wordCount = 0;
   const wordArray = text.split(" ");
   wordArray.forEach(function(element) {
       if (!Number(element)) {
     wordCount++;
    }
   });
   return wordCount;
 }
 
//Second Function

function numberOfOcurrencesInText(word, text) {
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (word === element) {
      wordCount++
    }
  });
  return wordCount;
}