// Particles disabled for performance
const allElements = document.querySelectorAll(".animated-text");

if (allElements.length > 0) {
  allElements.forEach((element) => {
    const txtElement = element,
      wordsList = txtElement.getAttribute("data-words"),
      words = wordsList.split(", ");

    let wordsCount = 0;

    entry();

    function entry() {
      if (wordsCount < words.length) {
        let word = words[wordsCount];
        txtElement.textContent = word;
        wordsCount++;
        setTimeout(entry, 2000);
      } else {
        wordsCount = 0;
        entry();
      }
    }
  });
}