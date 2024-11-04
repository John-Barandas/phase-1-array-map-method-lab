const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  return tutorials.map(tutorial => {
    let tutorialTitleCased = "";
    let getCapitalizedFoo = true;
    for (let capped = 0; capped < tutorial.length; capped++) {
      if (getCapitalizedFoo && tutorial[capped] !== " ") {
        tutorialTitleCased += tutorial[capped].toUpperCase();
        getCapitalizedFoo = false;
      } else {
        tutorialTitleCased += tutorial[capped];
      }

      if (tutorial[capped] === " ") {
        getCapitalizedFoo = true;
      }
    }
    return tutorialTitleCased;
  });
}