function highlight() {
  // Get all <strong> elements in the document
  const boldWords = document.querySelectorAll("strong");

  // Change the color of each <strong> element to green
  boldWords.forEach(word => {
    word.style.color = "green";
  });
}

function return_normal() {
  const boldWords = document.querySelectorAll("strong");

  
  boldWords.forEach(word => {
    word.style.color = "black";
  });
}

