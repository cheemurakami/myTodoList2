const checkBoxArray = [...document.getElementsByClassName('checkbox')]; //Arrayにしてあげる
// console.log(checkBoxArray);
const formElement = document.getElementById('form');
const inputCheckBox = document.querySelector('checkbox');
const newListOya = document.getElementById('new-list');
const gomiIcon = document.querySelector('fas fa-dumpster-fire');

const checkBoxClicker = (checkbox) => { //checkboxは仮
    checkbox.addEventListener('click', () => {
        if (checkbox.checked == true){
            checkbox.nextSibling.style.textDecoration = "line-through"
        } else {
            checkbox.nextSibling.style.textDecoration = ""
        }
    });
}
checkBoxArray.forEach((checkbox) => { //checkboxは仮
    checkBoxClicker(checkbox);
});

const addedList = document.getElementById('new-task-input');

formElement.addEventListener('submit', (event) => {
    event.preventDefault() //atode
    if (addedList.value !== ''){
    let newDiv = document.createElement('div'); 
    newDiv.classList.add('new-input-list');
    newListOya.appendChild(newDiv);

    let newInput = document.createElement('input'); 
    newInput.type = 'checkbox';
    newInput.classList.add('checkbox');
    newListOya.appendChild(newInput);
   
    let newSpan = document.createElement('span');
    newSpan.classList.add('new-task');
    newListOya.appendChild(newSpan);
    newSpan.textContent = `${addedList.value}`;
    
    let gomiIconElement = document.createElement('i');
    gomiIconElement.classList.add('fas', 'fa-dumpster-fire');
    newListOya.appendChild(gomiIconElement);

    gomiIconElement.addEventListener('click',() => {
        newListOya.removeChild(newInput); 
        newListOya.removeChild(newSpan); 
        newListOya.removeChild(gomiIconElement); 
    })
    
    checkBoxClicker(newInput);
}

    })