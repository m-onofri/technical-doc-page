let sections = document.querySelectorAll('.main-section');
let navLinks = document.querySelectorAll('a.nav-link');
let yPositions = [];
let ranges = [];

for (let i = 0; i < sections.length; i++) {
  yPositions.push(sections[i].offsetTop);
}

for (let i = 0; i < sections.length; i++) {
  let range = [];
  if (yPositions[i+1]) {
    range = [yPositions[i] - 10, yPositions[i+1] - 10];
  } else {
    range = [yPositions[i], yPositions[i] + 500];
  }
  ranges.push(range);
}

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

function addSelectedClass(index) {
  for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.remove("selected");
  }
  navLinks[index].classList.add("selected");
}

window.addEventListener('scroll', function() {
  let position = window.pageYOffset;
  let index = findSection(position);
  addSelectedClass(index);
});



console.log(yPositions);
console.log();