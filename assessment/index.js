var generateStoryButton = document.querySelector('.randomize')
var userName = document.querySelector('#customname');
var ukRadio = document.getElementById("uk");
var para = document.querySelector('.story');
var color = document.querySelector('.color');
var select = document.querySelector('select');


var insertx = ['Father',  'Christmas'];
var inserty = ['the',  'White', 'House'];
var insertz = ['Father', 'Christmas',  'weighs'];

function randomValueFromArray(randomArray){
    return randomArray[Math.floor(Math.random() * randomArray.length)]

}

generateStoryButton.addEventListener('click', generateStory);

function getRandomStory(){
    var xItem = randomValueFromArray(insertx);
    var yItem = randomValueFromArray(inserty);
    var zItem = randomValueFromArray(insertz)
    return `It was 94 fahrenheit outside, 
    so ${xItem} went for a walk.\n When they got to ${yItem}, 
    they stared in horror for a few moments, then ${zItem}. \n
    Bob saw the whole thing, but was not surprised — ${insertx}: weighs 300 pounds, and it was a hot day.`
}

function generateStory(){
    var storyText = replaceBob()
    para.textContent = storyText;
    para.style.visibility = 'visible';
}

function replaceBob(){
    var inputtedName = userName.value;
    var storyText = getRandomStory();
    var stones = Math.round(300 * 0.07142857);
    var storyTextInStones = storyText.replace('300', stones);

    if (ukRadio.checked && inputtedName){
        return storyTextInStones.replace('Bob', inputtedName)
    } else if(inputtedName){
        return storyText.replace('Bob', inputtedName)
    } else if (ukRadio.checked){
        return storyTextInStones
    } else {
        return storyText
    } 
}

select.addEventListener('change', applyColor);

function applyColor(){    
    switch(select.value){
        case 'black':
        color.textContent = 'This is color black'
        color.style.color = 'black';
        color.style.visibility = 'visible';
        break;

        case 'red':
        color.textContent = 'This is color red'
        color.style.color = 'red';
        color.style.visibility = 'visible';
        break;

        case 'white':
        color.textContent = 'This is color white'
        color.style.color = 'white';
        color.style.visibility = 'visible';
        break;

        default:
        color.textContent = ''
    }
}

