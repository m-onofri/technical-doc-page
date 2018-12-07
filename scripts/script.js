let sections = document.querySelectorAll('.main-section');
let navLinks = document.querySelectorAll('a.nav-link');
let mainDoc = document.querySelector('#main-doc');
let articleHeader = document.querySelectorAll('.main-section header');
let articles = document.querySelectorAll('article');
let yPositions = [];
let ranges = [];

//Find the starting y offsets of each section
for (let i = 0; i < sections.length; i++) {
  yPositions.push(sections[i].offsetTop);
}

//Define the range of y offset of each section
for (let i = 0; i < sections.length; i++) {
  let range = [];
  if (yPositions[i+1]) {
    range = [yPositions[i] - 20, yPositions[i+1] - 20];
  } else {
    range = [yPositions[i], yPositions[i] + 600];
  }
  ranges.push(range);
}

//Find the section index according to the scrolling position
function findSection(position) {
  if (position >= ranges[0][0] && position <= ranges[0][1]) {
    return 0;
  } else if (position >= ranges[1][0] && position <= ranges[1][1]) {
    return 1;
  } else if (position >= ranges[2][0] && position <= ranges[2][1]) {
    return 2;
  } else if (position >= ranges[3][0] && position <= ranges[3][1]) {
    return 3;
  } else if (position >= ranges[4][0] && position <= ranges[4][1]) {
    return 4;
  } else if (position >= ranges[5][0] && position <= ranges[5][1]) {
    return 5;
  } else if (position >= ranges[6][0] && position <= ranges[6][1]) {
    return 6;
  } else {
    return 0;
  }
};

//add class .selected to a navLink and remove it from the others
function addSelectedClass(collection, index) {
  for (let i = 0; i < collection.length; i++) {
      collection[i].classList.remove("selected");
  }
  collection[index].classList.add("selected");
}

//
function removeHideArticle(collection, index) {
  for (let i = 0; i < collection.length; i++) {
    collection[i].classList.add("hide-article");
  }
  collection[index].classList.remove("hide-article");
}

//Add .selected class to the first navLink when the page is loaded
navLinks[0].classList.add("selected");

//Add navigation effect based on scrolling
window.addEventListener('scroll', function() {
  let position = window.pageYOffset;
  let index = findSection(position);
  addSelectedClass(navLinks, index);
});

//
mainDoc.addEventListener('click', function(e) {
  if (e.target.tagName == "HEADER") {
    let targetId = e.target.id;
    addSelectedClass(articleHeader, targetId);
    removeHideArticle(articles, targetId);
    //e.target.nextElementSibling.classList.toggle('hide-article');
  }
});



