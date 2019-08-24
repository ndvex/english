let selectTheLanguage = 'en';
let diverseType = false;
let amountOfWords = 10;

let theProgramWorks = true;
let practiceIsWorking = false;
let loadingIsWorking = false;

let content = document.getElementById('content');
let n, name, minAmountOfWords, maxAmountOfWords;
let firstLanguage = selectTheLanguage == 'ru' ? 'wordEN' : 'wordRU';
let secondLanguage = selectTheLanguage == 'en' ? 'wordEN' : 'wordRU';

createTopics();
createMenu();
function createTopics() {
  loadingIsWorking = false;
  content.innerHTML = '';
  let topicsList = create.createElement({ tagName: 'ul', className: 'topicsList' });
  for (let i = 0; i < names.length; i++) {
    let topic = create.createElement(
      {
        tagName: 'li',
        className: 'topic',
        innerHTML: `${names[i].name} (${words[names[i].nameTopic].length})`
      },
      [
        {
          name: 'onclick',
          value: `createLevels('${names[i].nameTopic}')`
        }
      ]
    );
    topicsList.appendChild(topic);
  }
  content.appendChild(topicsList);
}

function createMenu() {
  let bottomMenu = document.getElementById('bottomMenu');
  let btnTopics = create.createElement(
    {
      tagName: 'span',
      className: 'bottomMenuBtn',
      innerHTML: 'Topics'
    },
    [
      {
        name: 'onclick',
        value: 'createTopics()'
      }
    ]
  );

  let btnPractice = create.createElement(
    {
      tagName: 'span',
      className: 'bottomMenuBtn',
      innerHTML: 'Practice'
    },
    [
      {
        name: 'onclick',
        value: 'working()'
      }
    ]
  );
  bottomMenu.appendChild(btnTopics);
  bottomMenu.appendChild(btnPractice);
}

function createLevels(nameOfTopic) {
  content.innerHTML = '';
  name = nameOfTopic;
  practiceIsWorking = true;
  loadingIsWorking = true;

  let amount = Math.floor(words[name].length / amountOfWords);
  let listOfLevels = create.createElement({tagName: 'ul', className: 'listOfLevels'});
  let level, i;

  for (i = 0; i < amount; i++) {
    level = create.createElement(
      {
        tagName: 'li', 
        className: 'level', 
        innerHTML: `${i + 1} level`
      },
      [
        {
          name: 'onclick',
          value: `wordsOfLevel(${i * amountOfWords}, ${(i * amountOfWords) + amountOfWords})`
        }
      ]
    );
    listOfLevels.appendChild(level);
  }

  if (words[name].length % amountOfWords !== 0) {
    level = create.createElement(
      {
        tagName: 'li', 
        className: 'level', 
        innerHTML: `${i + 1} level`
      },
      [
        {
          name: 'onclick',
          value: `wordsOfLevel(${i * amountOfWords}, ${(i * amountOfWords) + words[name].length - (amount * amountOfWords)})`
        }
      ]
    );
    listOfLevels.appendChild(level);
  }
  content.appendChild(listOfLevels);
}

function wordsOfLevel(min, max) {
  content.innerHTML = '';
  let wordsList = create.createElement({ tagName: 'ul', className: 'wordsList' });
  minAmountOfWords = min;
  maxAmountOfWords = max;

  loadingWords();
  function loadingWords() {
    if (loadingIsWorking === true){
      for (let i = min; i < max; i++) {
        let word = create.createElement(
          {
            tagName: 'li',
            className: 'word',
            innerHTML: "<span class='wordNumber'>" + (i + 1) + "</span>" + "<span class='wordEN'>" + words[name][i].wordEN + "</span>" + "<span class='wordRU'>" + words[name][i].wordRU + "</span>"
          }
        );
        wordsList.appendChild(word);
      }
      content.appendChild(wordsList);
    }
  }
}

function working() {
  if (practiceIsWorking === true) {
    content.innerHTML = '';

    let topOfWorkingMenu =    create.createElement({tagName: 'div',     className: 'topOfWorkingMenu'});
    let correctWords =        create.createElement({tagName: 'span',    className: 'correctWords',    innerHTML: 0});
    let wordCount =           create.createElement({tagName: 'span',    className: 'wordCount'});
    let nameOfTopic =         create.createElement({tagName: 'span',    className: 'nameOfTopic', innerHTML: `${name}`});
    let incorrectWords =      create.createElement({tagName: 'span',    className: 'incorrectWords',  innerHTML: 0});
    let randomWord =          create.createElement({tagName: 'span',    className: 'randomWord'});
    let inputField =          create.createElement({tagName: 'input',   className: 'inputField'});
    let checkButton =         create.createElement({tagName: 'button',  className: 'checkButton',     innerHTML: '<i class="fas fa-check"></i>'});
    let prompt =              create.createElement({tagName: 'span',    className: 'prompt',             innerHTML: '<i class="fas fa-eye"></i>'});
    let buttonsPracticeMenu = create.createElement({tagName: 'div',     className: 'buttonsPracticeMenu'});
    let practiceBlock =       create.createElement({tagName: 'div',     className: 'practiceBlock'});
    let btnLevel = create.createElement(
      {
        tagName: 'span',
        className: 'practiceLevelsBtn',
        innerHTML: 'Levels'
      },
      [
        {
          name: 'onclick',
          value: `createLevels('${name}')`
        }
      ]
    );

      practiceBlock.appendChild(btnLevel);
      practiceBlock.appendChild(topOfWorkingMenu);
        topOfWorkingMenu.appendChild(nameOfTopic);
        topOfWorkingMenu.appendChild(correctWords);
        topOfWorkingMenu.appendChild(wordCount);
        topOfWorkingMenu.appendChild(incorrectWords);
      practiceBlock.appendChild(randomWord);
      practiceBlock.appendChild(buttonsPracticeMenu);
        buttonsPracticeMenu.appendChild(prompt);
        buttonsPracticeMenu.appendChild(inputField);
        buttonsPracticeMenu.appendChild(checkButton);
    content.appendChild(practiceBlock);

    let i;
    let ArrayNumbersOfWords = [];
    let stateProgramme = theProgramWorks;
    let promptIsActive = false;

    inputField.focus();

    checkButton.onclick = mainWordCheck;

    document.addEventListener('keyup', function (event) {
      if (event.code == 'Enter') {
        mainWordCheck();
      }
    });

    document.addEventListener('keyup', function (event) {
      if (event.keyCode == 73 && event.ctrlKey) { 
        promptWord();
      }
    });

    AddNumbers();
    function AddNumbers() {
      for (let j = minAmountOfWords; j < maxAmountOfWords; j++) {
        ArrayNumbersOfWords.push(j);
      }
      newWord();
    }

    function newWord() {
      promptIsActive = false;
      let max = ArrayNumbersOfWords.length;
      let index = Math.floor(Math.random() * max);
      i = ArrayNumbersOfWords[index];

      if (diverseType == true){
        if(index % 2 === 0){
          firstLanguage = 'wordRU';
          secondLanguage = 'wordEN';
        } else {
          firstLanguage = 'wordEN';
          secondLanguage = 'wordRU';
        }
      }  

      if (ArrayNumbersOfWords.length == 0) {
        stateProgramme = !stateProgramme;
        wordCount.innerHTML = 0;
        randomWord.innerHTML = "That's all words.";
        inputField.blur();
        // AddNumbers();
      } else {
        wordCount.innerHTML = ArrayNumbersOfWords.length;
        randomWord.innerHTML = words[name][i][firstLanguage];
        ArrayNumbersOfWords.splice(index, 1);
      }
    }

    function checkingWordsForCorrectness() {
      if (promptIsActive == true) {
        incorrectWords.innerHTML++;
      } else {
        correctWords.innerHTML++;
      }
    }

    function mainWordCheck() {
      if (stateProgramme == true) {
        if (words[name][i].otherTranslations != undefined) {
          if (words[name][i].hasOwnProperty('otherTranslations') === true) {
            if (randomWord.innerHTML == words[name][i][firstLanguage] && inputField.value.toLowerCase() == words[name][i][secondLanguage]) {
              // trueWord();
              inputField.value = '';
              inputField.focus();
              checkingWordsForCorrectness();
              newWord();
            } else {
              let j = 0;
              while (j < words[name][i].otherTranslations.length) {
                if (randomWord.innerHTML == words[name][i][firstLanguage] && inputField.value.toLowerCase() == words[name][i].otherTranslations[j]) {
                  // trueWord();
                  inputField.value = '';
                  inputField.focus();
                  checkingWordsForCorrectness();
                  newWord();
                  break;
                } else {
                  j++;
                  inputField.focus();
                }
                // falseWord();
              }
            }
          }
        } else if (words[name][i].otherTranslations == undefined) {
          if (words[name][i].hasOwnProperty('otherTranslations') === false) {
            if (randomWord.innerHTML == words[name][i][firstLanguage] && inputField.value.toLowerCase() == words[name][i][secondLanguage]) {
              // trueWord();
              inputField.value = '';
              inputField.focus();
              checkingWordsForCorrectness();
              newWord();
            } else {
              // falseWord();
              inputField.focus();
            }
          }
        }
        inputField.placeholder = '';
      }
    };

    prompt.onclick = promptWord;
    
    function promptWord() {
      if (stateProgramme == true) {
        inputField.placeholder = words[name][i][secondLanguage];
        promptIsActive = true;
      }
    };
  }
}




// checkForDuplicateWords();
// function checkForDuplicateWords(){
//   for (let i = 0; i < words['EnglishWords'].length; i++){
//     for (let j = 0; j < words['EnglishWords'].length; j++){
//       if (words['EnglishWords'][j].wordEN === words['EnglishWords'][i].wordEN && words['EnglishWords'][j] !== words['EnglishWords'][i]){
//         console.log(i,j,  words['EnglishWords'][j].wordEN);
//       }
//     }
//   }
// }


//   document.getElementById('content').onscroll = function () {
//     if (n !== words[name].length) {
//       windowScroll = document.getElementById('content').scrollTop;
//       documentHeight = document.getElementById('content').scrollHeight - document.getElementById('content').clientHeight;
//       if (documentHeight - windowScroll <= 300) {
//         loadingWords();
//       }
//     }
//   };