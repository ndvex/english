<<<<<<< HEAD

let amountOfWords = parseInt(localStorage.getItem('amountOfWords')) || 10;
let diverseMode =           localStorage.getItem('diverseMode') !== null && localStorage.getItem('diverseMode') == 'true' ? true : false;
let loadingWordsIsWorking = localStorage.getItem('loadingWords') !== null && localStorage.getItem('loadingWords') == 'true' ? true : false;

let theProgramWorks = true;
let practiceIsWorking = false;
let loadingIsWorking;
let topicsIsWorking = true;
let practiceAnimation = true;
let infiniteWords = true;

let content = document.getElementById('content');
let n, name, level, minAmountOfWords, maxAmountOfWords;
let firstLanguage =   localStorage.getItem('language') !== null && localStorage.getItem('language') == 'true' ? 'wordEN' : 'wordRU';
let secondLanguage =  localStorage.getItem('language') !== null && localStorage.getItem('language') == 'true' ? 'wordRU' : 'wordEN';
console.log(firstLanguage);
console.log(secondLanguage);

let langEN = localStorage.getItem('language') !== null && localStorage.getItem('language') == 'true' ? true : false;
let langRU = localStorage.getItem('language') !== null && localStorage.getItem('language') == 'true' ? false : true;
=======
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
>>>>>>> 9047a17277668132e52e204f25d78884ca4810c7

createTopics();
createMenu();
function createTopics() {
<<<<<<< HEAD
  if (topicsIsWorking === true) {
    loadingIsWorking = false;
    practiceAnimation = true;
    
    if (level !== undefined) {
      practiceIsWorking = true;
    }
    
    content.innerHTML = '';
    let topicsList = create.createElement({ tagName: 'ul', className: 'topicsList' });
    
    for (let i = 0; i < names.length; i++) {
      let topic = create.createElement(
        {
          tagName: 'li',
          className: 'topic defaultAnimation',
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
  topicsIsWorking = false;
  createSettings();
}

function createSettings() {
  let btnSettings = create.createElement({tagName: 'span', className: 'btnSettings', innerHTML: '<img src="img/settings.svg">'});
  btnSettings.onclick = createElementsOfSettings;
  content.appendChild(btnSettings);

  function createElementsOfSettings() {

    langEN = localStorage.getItem('language') !== null && localStorage.getItem('language') == 'true' ? true : false;
    langRU = localStorage.getItem('language') !== null && localStorage.getItem('language') == 'true' ? false : true;

    if (localStorage.getItem('diverseMode') !== null && localStorage.getItem('diverseMode') == 'true' ) {
      diverseMode = true;
    } else {
      diverseMode = false;
    }

    if (localStorage.getItem('loadingWords') !== null && localStorage.getItem('loadingWords') == 'true' ) {
      loadingWordsIsWorking = true;
    } else {
      loadingWordsIsWorking = false;
    }

    let darkBackground =        create.createElement({tagName: 'div',   className: 'darkBackground'});
        darkBackground.onclick = removeElementsOfSettings;
    let mainSettings =          create.createElement({tagName: 'div',   className: 'mainSettings'},   [{name: 'onclick', value: ``}]);
    let inputOfAmountWords =    create.createElement({tagName: 'input', className: 'inputOfAmountWords', value: `${amountOfWords}`});
    let elementAmountOfWords =  create.createElement({tagName: 'div',   className: 'elementOfSettingsMenu', innerHTML: '<span>Amount of words</span>'});
        elementAmountOfWords.appendChild(inputOfAmountWords);

    let inputLangEN =           create.createElement({tagName: 'input', className: 'inputLangEN', type: 'radio', name: 'lang', checked: langEN});
    let inputLangENText =       create.createElement({tagName: 'span',  innerHTML: 'EN'});
    let inputLangRU =           create.createElement({tagName: 'input', className: 'inputLangRU', type: 'radio', name: 'lang', checked: langRU});
    let inputLangRUText =       create.createElement({tagName: 'span',  innerHTML: 'RU'});
    let elementLanguage =       create.createElement({tagName: 'div',   className: 'elementOfSettingsMenu'});
        elementLanguage.appendChild(inputLangENText);
        elementLanguage.appendChild(inputLangEN);
        elementLanguage.appendChild(inputLangRUText);
        elementLanguage.appendChild(inputLangRU);  

    let inputDiverseMode =      create.createElement({tagName: 'input', className: 'inputDiverseMode', type: 'checkbox', checked: diverseMode});
    let elementDiverseMode =    create.createElement({tagName: 'div',   className: 'elementOfSettingsMenu', innerHTML: '<span>Diverse mode</span>'});
        elementDiverseMode.appendChild(inputDiverseMode);

    let inputLoadingWords =     create.createElement({tagName: 'input', className: 'inputLoadingWords', type: 'checkbox', checked: loadingWordsIsWorking});
    let elementLoadingWords =   create.createElement({tagName: 'div',   className: 'elementOfSettingsMenu', innerHTML: '<span>Loading words</span>'});
        elementLoadingWords.appendChild(inputLoadingWords);  
    

        mainSettings.appendChild(elementAmountOfWords);
        mainSettings.appendChild(elementLanguage);
        mainSettings.appendChild(elementDiverseMode);
        mainSettings.appendChild(elementLoadingWords);

    document.body.appendChild(darkBackground);
    content.appendChild(mainSettings);
  
    function removeElementsOfSettings() {
      amountOfWords = parseInt(inputOfAmountWords.value) || 10;
      localStorage.setItem('amountOfWords', amountOfWords);

      if (document.querySelector('.inputLangEN').checked === true) {
        firstLanguage = 'wordEN';
        secondLanguage = 'wordRU';
        localStorage.setItem('language', true);
      } else if (document.querySelector('.inputLangRU').checked === true) {
        firstLanguage = 'wordRU';
        secondLanguage = 'wordEN';
        localStorage.setItem('language', false);
      }

      if (document.querySelector('.inputDiverseMode').checked === true) {
        diverseMode = true;
        localStorage.setItem('diverseMode', true);
      } else {
        diverseMode = false;
        localStorage.setItem('diverseMode', false);
      }

      if (document.querySelector('.inputLoadingWords').checked === true) {
        loadingWordsIsWorking = true;
        localStorage.setItem('loadingWords', true);
      } else {
        loadingWordsIsWorking = false;
        localStorage.setItem('loadingWords', false);
      }

      darkBackground.remove();
      mainSettings.remove();
    }
  }
=======
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
>>>>>>> 9047a17277668132e52e204f25d78884ca4810c7
}

function createMenu() {
  let bottomMenu = document.getElementById('bottomMenu');
  let btnTopics = create.createElement(
    {
      tagName: 'span',
      className: 'bottomMenuBtn',
<<<<<<< HEAD
      innerHTML: 'topics'
=======
      innerHTML: 'Topics'
>>>>>>> 9047a17277668132e52e204f25d78884ca4810c7
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
<<<<<<< HEAD
      innerHTML: 'practice'
=======
      innerHTML: 'Practice'
>>>>>>> 9047a17277668132e52e204f25d78884ca4810c7
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
<<<<<<< HEAD
  loadingIsWorking = true;
  topicsIsWorking = true;
  practiceAnimation = true;
  practiceIsWorking = false;
  
  let amount = Math.floor(words[name].length / amountOfWords);
  let listOfLevels = create.createElement({tagName: 'ul', className: 'listOfLevels'});
  let levelElement, i;
  
  levelElement = create.createElement(
    {
      tagName: 'li', 
      className: 'level defaultAnimation', 
      innerHTML: 'all words of this theme'
    },
    [
      {
        name: 'onclick',
        value: `createWords(0, ${words[name].length}, 'All words')`
      }
    ]
  );
  listOfLevels.appendChild(levelElement);

  for (i = 0; i < amount; i++) {
    levelElement = create.createElement(
      {
        tagName: 'li', 
        className: 'level defaultAnimation', 
=======
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
>>>>>>> 9047a17277668132e52e204f25d78884ca4810c7
        innerHTML: `${i + 1} level`
      },
      [
        {
          name: 'onclick',
<<<<<<< HEAD
          value: `createWords(${i * amountOfWords}, ${(i * amountOfWords) + amountOfWords}, ${i + 1})`
        }
      ]
    );
    listOfLevels.appendChild(levelElement);
  }

  if (words[name].length % amountOfWords !== 0) {
    levelElement = create.createElement(
      {
        tagName: 'li', 
        className: 'level defaultAnimation', 
=======
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
>>>>>>> 9047a17277668132e52e204f25d78884ca4810c7
        innerHTML: `${i + 1} level`
      },
      [
        {
          name: 'onclick',
<<<<<<< HEAD
          value: `createWords(${i * amountOfWords}, ${(i * amountOfWords) + words[name].length - (amount * amountOfWords)}, ${i + 1})`
        }
      ]
    );
    listOfLevels.appendChild(levelElement);
=======
          value: `wordsOfLevel(${i * amountOfWords}, ${(i * amountOfWords) + words[name].length - (amount * amountOfWords)})`
        }
      ]
    );
    listOfLevels.appendChild(level);
>>>>>>> 9047a17277668132e52e204f25d78884ca4810c7
  }
  content.appendChild(listOfLevels);
}

<<<<<<< HEAD
function createWords(min, max, lvl) {
  content.innerHTML = '';
  practiceIsWorking = true;
=======
function wordsOfLevel(min, max) {
  content.innerHTML = '';
>>>>>>> 9047a17277668132e52e204f25d78884ca4810c7
  let wordsList = create.createElement({ tagName: 'ul', className: 'wordsList' });
  minAmountOfWords = min;
  maxAmountOfWords = max;

  loadingWords();
  function loadingWords() {
<<<<<<< HEAD
    level = lvl;
    if (loadingIsWorking === true && loadingWordsIsWorking === true){
=======
    if (loadingIsWorking === true){
>>>>>>> 9047a17277668132e52e204f25d78884ca4810c7
      for (let i = min; i < max; i++) {
        let word = create.createElement(
          {
            tagName: 'li',
<<<<<<< HEAD
            className: 'word defaultAnimation',
=======
            className: 'word',
>>>>>>> 9047a17277668132e52e204f25d78884ca4810c7
            innerHTML: "<span class='wordNumber'>" + (i + 1) + "</span>" + "<span class='wordEN'>" + words[name][i].wordEN + "</span>" + "<span class='wordRU'>" + words[name][i].wordRU + "</span>"
          }
        );
        wordsList.appendChild(word);
      }
      content.appendChild(wordsList);
<<<<<<< HEAD
    } else {
      working();
=======
>>>>>>> 9047a17277668132e52e204f25d78884ca4810c7
    }
  }
}

function working() {
  if (practiceIsWorking === true) {
    content.innerHTML = '';
<<<<<<< HEAD
    topicsIsWorking = true;
    practiceIsWorking = false;
=======
>>>>>>> 9047a17277668132e52e204f25d78884ca4810c7

    let topOfWorkingMenu =    create.createElement({tagName: 'div',     className: 'topOfWorkingMenu'});
    let correctWords =        create.createElement({tagName: 'span',    className: 'correctWords',    innerHTML: 0});
    let wordCount =           create.createElement({tagName: 'span',    className: 'wordCount'});
<<<<<<< HEAD
    let nameOfTopic =         create.createElement({tagName: 'span',    className: 'nameOfTopic',     innerHTML: `${name}`});
    let incorrectWords =      create.createElement({tagName: 'span',    className: 'incorrectWords',  innerHTML: 0});
    let randomWord =          create.createElement({tagName: 'span',    className: 'randomWord'});
    let inputField =          create.createElement({tagName: 'input',   className: 'inputField'});
        inputField.oninput = mainWordCheck;
    let prompt =              create.createElement({tagName: 'span',    className: 'prompt',          innerHTML: '<img src="img/prompt.svg" >'});
    let buttonsPracticeMenu = create.createElement({tagName: 'div',     className: 'buttonsPracticeMenu'});
    let practiceBlock =       create.createElement({tagName: 'div',     className: 'practiceBlock'});
    let levelMenu =           create.createElement({tagName: 'span',    className: 'thisLevel',       innerHTML: `${level === 'All words' ?  level : level + ' lvl'}`});
=======
    let nameOfTopic =         create.createElement({tagName: 'span',    className: 'nameOfTopic', innerHTML: `${name}`});
    let incorrectWords =      create.createElement({tagName: 'span',    className: 'incorrectWords',  innerHTML: 0});
    let randomWord =          create.createElement({tagName: 'span',    className: 'randomWord'});
    let inputField =          create.createElement({tagName: 'input',   className: 'inputField'});
    let checkButton =         create.createElement({tagName: 'button',  className: 'checkButton',     innerHTML: '<i class="fas fa-check"></i>'});
    let prompt =              create.createElement({tagName: 'span',    className: 'prompt',             innerHTML: '<i class="fas fa-eye"></i>'});
    let buttonsPracticeMenu = create.createElement({tagName: 'div',     className: 'buttonsPracticeMenu'});
    let practiceBlock =       create.createElement({tagName: 'div',     className: 'practiceBlock'});
>>>>>>> 9047a17277668132e52e204f25d78884ca4810c7
    let btnLevel = create.createElement(
      {
        tagName: 'span',
        className: 'practiceLevelsBtn',
<<<<<<< HEAD
        innerHTML: 'levels'
=======
        innerHTML: 'Levels'
>>>>>>> 9047a17277668132e52e204f25d78884ca4810c7
      },
      [
        {
          name: 'onclick',
          value: `createLevels('${name}')`
        }
      ]
    );
<<<<<<< HEAD
    
    if (practiceAnimation === true) {
      practiceBlock.classList.add('defaultAnimation');
    } 
=======
>>>>>>> 9047a17277668132e52e204f25d78884ca4810c7

      practiceBlock.appendChild(btnLevel);
      practiceBlock.appendChild(topOfWorkingMenu);
        topOfWorkingMenu.appendChild(nameOfTopic);
        topOfWorkingMenu.appendChild(correctWords);
        topOfWorkingMenu.appendChild(wordCount);
        topOfWorkingMenu.appendChild(incorrectWords);
<<<<<<< HEAD
        topOfWorkingMenu.appendChild(levelMenu);
=======
>>>>>>> 9047a17277668132e52e204f25d78884ca4810c7
      practiceBlock.appendChild(randomWord);
      practiceBlock.appendChild(buttonsPracticeMenu);
        buttonsPracticeMenu.appendChild(prompt);
        buttonsPracticeMenu.appendChild(inputField);
<<<<<<< HEAD
    content.appendChild(practiceBlock);
    
=======
        buttonsPracticeMenu.appendChild(checkButton);
    content.appendChild(practiceBlock);

>>>>>>> 9047a17277668132e52e204f25d78884ca4810c7
    let i;
    let ArrayNumbersOfWords = [];
    let stateProgramme = theProgramWorks;
    let promptIsActive = false;

    inputField.focus();

<<<<<<< HEAD
=======
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

>>>>>>> 9047a17277668132e52e204f25d78884ca4810c7
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

<<<<<<< HEAD
      if (diverseMode == true){
=======
      if (diverseType == true){
>>>>>>> 9047a17277668132e52e204f25d78884ca4810c7
        if(index % 2 === 0){
          firstLanguage = 'wordRU';
          secondLanguage = 'wordEN';
        } else {
          firstLanguage = 'wordEN';
          secondLanguage = 'wordRU';
        }
      }  

      if (ArrayNumbersOfWords.length == 0) {
<<<<<<< HEAD
        if (infiniteWords === false || incorrectWords.innerHTML == 0) {
          stateProgramme = !stateProgramme;
          wordCount.innerHTML = 0;
          randomWord.innerHTML = "level completed";
          // inputField.blur();
        } else {
          AddNumbers(); 
        }
=======
        stateProgramme = !stateProgramme;
        wordCount.innerHTML = 0;
        randomWord.innerHTML = "That's all words.";
        inputField.blur();
        // AddNumbers();
>>>>>>> 9047a17277668132e52e204f25d78884ca4810c7
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
<<<<<<< HEAD
      if (levelMenu.innerHTML !== 'All words') {
        if (words[name].length - (level * amountOfWords) !== 0) {
          nextLevel();
        }
      }
    }
    
    function nextLevel() {
      if (correctWords.innerHTML == amountOfWords && incorrectWords.innerHTML == 0) {
        if (maxAmountOfWords + amountOfWords <= words[name].length ) {
          minAmountOfWords += amountOfWords;
          maxAmountOfWords += amountOfWords;
        } else if (maxAmountOfWords + amountOfWords > words[name].length) {
          minAmountOfWords += amountOfWords;
          maxAmountOfWords += words[name].length - (level * amountOfWords);
        }
        level++;
        let nextLevelBtn = create.createElement(
          {
            tagName: 'span',
            className: 'practiceNextLevelBtn',
            innerHTML: 'next level'
          },
          [
            {
              name: 'onclick',
              value: `createWords(${minAmountOfWords}, ${maxAmountOfWords}, ${level})`
            }
          ]
        );
        practiceBlock.appendChild(nextLevelBtn);
      }
=======
>>>>>>> 9047a17277668132e52e204f25d78884ca4810c7
    }

    function mainWordCheck() {
      if (stateProgramme == true) {
<<<<<<< HEAD
        practiceAnimation = false;
        practiceIsWorking = true;
        practiceBlock.classList.remove('defaultAnimation');
        if (words[name][i][secondLanguage].length == inputField.value.length || secondLanguage == 'wordRU') {
          if (words[name][i].otherTranslations !== undefined) {
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
=======
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
>>>>>>> 9047a17277668132e52e204f25d78884ca4810c7
      }
    };

    prompt.onclick = promptWord;
    
    function promptWord() {
      if (stateProgramme == true) {
        inputField.placeholder = words[name][i][secondLanguage];
<<<<<<< HEAD
        inputField.focus();
=======
>>>>>>> 9047a17277668132e52e204f25d78884ca4810c7
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


<<<<<<< HEAD
// document.getElementById('content').onscroll = function () {
//  if (n !== words[name].length) {
//    windowScroll = document.getElementById('content').scrollTop;
//    documentHeight = document.getElementById('content').scrollHeight - document.getElementById('content').clientHeight;
//    if (documentHeight - windowScroll <= 300) {
//      loadingWords();
//    }
//  }
//};
=======
//   document.getElementById('content').onscroll = function () {
//     if (n !== words[name].length) {
//       windowScroll = document.getElementById('content').scrollTop;
//       documentHeight = document.getElementById('content').scrollHeight - document.getElementById('content').clientHeight;
//       if (documentHeight - windowScroll <= 300) {
//         loadingWords();
//       }
//     }
//   };
>>>>>>> 9047a17277668132e52e204f25d78884ca4810c7
