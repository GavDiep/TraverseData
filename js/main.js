// TRAVERSE DATA CYU ASSIGNMENT START CODE

// Load Data From Files
let surveyData;
fetch("data/survey-results.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (surveyData = strData.split(/\r?\n/)));

let ageData;
fetch("data/age-data.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (ageData = strData.split(/\r?\n/)));

let numberData;
fetch("data/number-data.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (numberData = strData.split(/\r?\n/)));

// Output Element Variable
let outputEl = document.getElementById("output");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection
  if (selection === "survey") {
    traverseSurveyData();
  } else if (selection === "ages") {
    traverseAgeData();
  } else if (selection === "numbers") {
    traverseNumberData();
  }
}

// Menu Option Functions
function traverseSurveyData() {
  // Traverse the surveyData array to:
  // Count the number of "Yes" responses,
  // Count the number of "No" responses,
  // Count the number of "Maybe" responses,
  // and output the results in the outputEl.
  outputEl.innerHTML = "";

  let numYes = 0;
  let numNo = 0;
  let numMaybe = 0;

  for (i = 0; i < surveyData.length; i++) {
    if (surveyData[i] === "Yes") {
      numYes++;
    } else if (surveyData[i] === "No") {
      numNo++;
    } else if (surveyData[i] === "Maybe") {
      numMaybe++;
    }
  }
  outputEl.innerHTML = `<b>Survey Data</b> <br /> <br /> <div>Yes: ${numYes}</div> <br /> <div>No: ${numNo}</div> <br /> <div>Maybe: ${numMaybe}</div> <br /> <br />`;
  console.log(surveyData);
}

function traverseAgeData() {
  // Traverse the ageData array to:
  // Count the number of ages under 18,
  // Count the number of ages between 18 and 35, inclusive
  // Count the number of ages between 36 and 65, inclusive
  // Count the number of ages above 65,
  // and output the results in the outputEl.
  outputEl.innerHTML = "";
  let under18 = 0;
  let eighteenTo35 = 0;
  let thirtysixTo65 = 0;
  let above65 = 0;

  for (i = 0; i < ageData.length; i++) {
    if (ageData[i] < 18) {
      under18++;
    } else if (ageData[i] >= 18 && ageData[i] <= 35) {
      eighteenTo35++;
    } else if (ageData[i] >= 36 && ageData[i] <= 65) {
      thirtysixTo65++;
    } else if (ageData[i] > 65) {
      above65++;
    }
  }

  outputEl.innerHTML = `<b>Age Data</b> <br /> <br /> <div>Under 18: ${under18}</div> <br /> <div>18 to 35: ${eighteenTo35}</div> <br /> <div>36 to 65: ${thirtysixTo65}</div> <br /> <div>Above 65: ${above65}</div>`;

  console.log(ageData);
}

function traverseNumberData() {
  // Traverse the numberData array to:
  // Count the number of even numbers,
  // Count the number of odd numbers,
  // and output the results in the outputEl.
  outputEl.innerHTML = "";
  let numEven = 0;
  let numOdd = 0;

  for (i = 0; i < numberData.length; i++) {
    if (numberData[i] % 2 == 0) {
      numEven++;
    } else {
      numOdd++;
    }
  }

  outputEl.innerHTML = `<b>Number Data</b> <br /> <br /> <div>Even: ${numEven}</div> <br /> <div>Odd: ${numOdd}</div>`;
  console.log(numberData);
}
