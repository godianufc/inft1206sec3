const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."

insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"]

insertY = ["the soup kitchen", "Disneyland", "the White House"]

insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"]


randomize.addEventListener('click', result);

function result() {

  if(customName.value !== '') {
    const name = customName.value;

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);

  }

  story.textContent = NewStory;
  story.style.visibility = 'visible';
}

// Original story text
const storyText = "Once upon a time in a land far, far away, there was a [character] who loved [activity].";

// Array of possible characters and activities
const characters = ["knight", "princess", "dragon", "wizard"];
const activities = ["adventuring", "reading books", "casting spells", "hoarding treasure"];

// Function to generate a new random story
function generateStory() {
    
  // Create a new variable and set its value to storyText
    let newStory = storyText;

    // Randomly select a character and an activity
    const randomCharacter = characters[Math.floor(Math.random() * characters.length)];
    const randomActivity = activities[Math.floor(Math.random() * activities.length)];

    // Replace placeholders with random selections
    newStory = newStory.replace("[character]", randomCharacter);
    newStory = newStory.replace("[activity]", randomActivity);

    // Display the new story in the paragraph element
    document.getElementById("story").textContent = newStory;
}