
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

createTopics();
createMenu();
function createTopics() {
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
}

function createMenu() {
  let bottomMenu = document.getElementById('bottomMenu');
  let btnTopics = create.createElement(
    {
      tagName: 'span',
      className: 'bottomMenuBtn',
      innerHTML: 'topics'
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
      innerHTML: 'practice'
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
        innerHTML: `${i + 1} level`
      },
      [
        {
          name: 'onclick',
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
        innerHTML: `${i + 1} level`
      },
      [
        {
          name: 'onclick',
          value: `createWords(${i * amountOfWords}, ${(i * amountOfWords) + words[name].length - (amount * amountOfWords)}, ${i + 1})`
        }
      ]
    );
    listOfLevels.appendChild(levelElement);
  }
  content.appendChild(listOfLevels);
}

function createWords(min, max, lvl) {
  content.innerHTML = '';
  practiceIsWorking = true;
  let wordsList = create.createElement({ tagName: 'ul', className: 'wordsList' });
  minAmountOfWords = min;
  maxAmountOfWords = max;

  loadingWords();
  function loadingWords() {
    level = lvl;
    if (loadingIsWorking === true && loadingWordsIsWorking === true){
      for (let i = min; i < max; i++) {
        let word = create.createElement(
          {
            tagName: 'li',
            className: 'word defaultAnimation',
            innerHTML: "<span class='wordNumber'>" + (i + 1) + "</span>" + "<span class='wordEN'>" + words[name][i].wordEN + "</span>" + "<span class='wordRU'>" + words[name][i].wordRU + "</span>"
          }
        );
        wordsList.appendChild(word);
      }
      content.appendChild(wordsList);
    } else {
      working();
    }
  }
}

function working() {
  if (practiceIsWorking === true) {
    content.innerHTML = '';
    topicsIsWorking = true;
    practiceIsWorking = false;

    let topOfWorkingMenu =    create.createElement({tagName: 'div',     className: 'topOfWorkingMenu'});
    let correctWords =        create.createElement({tagName: 'span',    className: 'correctWords',    innerHTML: 0});
    let wordCount =           create.createElement({tagName: 'span',    className: 'wordCount'});
    let nameOfTopic =         create.createElement({tagName: 'span',    className: 'nameOfTopic',     innerHTML: `${name}`});
    let incorrectWords =      create.createElement({tagName: 'span',    className: 'incorrectWords',  innerHTML: 0});
    let randomWord =          create.createElement({tagName: 'span',    className: 'randomWord'});
    let inputField =          create.createElement({tagName: 'input',   className: 'inputField'});
        inputField.oninput = mainWordCheck;
    let prompt =              create.createElement({tagName: 'span',    className: 'prompt',          innerHTML: '<img src="img/prompt.svg" >'});
    let buttonsPracticeMenu = create.createElement({tagName: 'div',     className: 'buttonsPracticeMenu'});
    let practiceBlock =       create.createElement({tagName: 'div',     className: 'practiceBlock'});
    let levelMenu =           create.createElement({tagName: 'span',    className: 'thisLevel',       innerHTML: `${level === 'All words' ?  level : level + ' lvl'}`});
    let btnLevel = create.createElement(
      {
        tagName: 'span',
        className: 'practiceLevelsBtn',
        innerHTML: 'levels'
      },
      [
        {
          name: 'onclick',
          value: `createLevels('${name}')`
        }
      ]
    );
    
    if (practiceAnimation === true) {
      practiceBlock.classList.add('defaultAnimation');
    } 

      practiceBlock.appendChild(btnLevel);
      practiceBlock.appendChild(topOfWorkingMenu);
        topOfWorkingMenu.appendChild(nameOfTopic);
        topOfWorkingMenu.appendChild(correctWords);
        topOfWorkingMenu.appendChild(wordCount);
        topOfWorkingMenu.appendChild(incorrectWords);
        topOfWorkingMenu.appendChild(levelMenu);
      practiceBlock.appendChild(randomWord);
      practiceBlock.appendChild(buttonsPracticeMenu);
        buttonsPracticeMenu.appendChild(prompt);
        buttonsPracticeMenu.appendChild(inputField);
    content.appendChild(practiceBlock);
    
    let i;
    let ArrayNumbersOfWords = [];
    let stateProgramme = theProgramWorks;
    let promptIsActive = false;

    inputField.focus();

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

      if (diverseMode == true){
        if(index % 2 === 0){
          firstLanguage = 'wordRU';
          secondLanguage = 'wordEN';
        } else {
          firstLanguage = 'wordEN';
          secondLanguage = 'wordRU';
        }
      }  

      if (ArrayNumbersOfWords.length == 0) {
        if (infiniteWords === false || incorrectWords.innerHTML == 0) {
          stateProgramme = !stateProgramme;
          wordCount.innerHTML = 0;
          randomWord.innerHTML = "level completed";
          // inputField.blur();
        } else {
          AddNumbers(); 
        }
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
    }

    function mainWordCheck() {
      if (stateProgramme == true) {
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
      }
    };

    prompt.onclick = promptWord;
    
    function promptWord() {
      if (stateProgramme == true) {
        inputField.placeholder = words[name][i][secondLanguage];
        inputField.focus();
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


// document.getElementById('content').onscroll = function () {
//  if (n !== words[name].length) {
//    windowScroll = document.getElementById('content').scrollTop;
//    documentHeight = document.getElementById('content').scrollHeight - document.getElementById('content').clientHeight;
//    if (documentHeight - windowScroll <= 300) {
//      loadingWords();
//    }
//  }
//};