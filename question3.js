// Task 2
function changeColor() {
    let box = document.getElementById('box');
    box.style.backgroundColor = box.style.backgroundColor === 'rgb(202, 144, 240)' ? 'blue' : 'rgb(202, 144, 240)';
}

// Task 3
function changeHeaderText() {
    let header = document.getElementById('header');
    header.textContent = 'NEW TEXT!';
    header.style.color = 'white';
    header.style.backgroundColor = 'black';
}

let paragraph = document.getElementById('paragraph');
paragraph.addEventListener('mouseover', function() {
    paragraph.style.color = '#2d2d85';
    paragraph.style.fontWeight = 'bolder';
});

paragraph.addEventListener('mouseout', function() {
    paragraph.style.color = 'black';
    paragraph.style.fontWeight = 'lighter';
});

function rotateImage() {
    let image = document.getElementById('image');
    image.style.transform = image.style.transform === 'rotate(60deg)' ? 'rotate(0deg)' : 'rotate(60deg)';
}

function changeButtonStyle() {
    const button = document.getElementById('changeButton');
    button.style.backgroundColor = 'lightgreen';
    button.style.boxShadow = '3px 3px 15px rgba(0, 0, 0, 0.5)';
    button.style.transform = 'scale(1.1)'; // Move to the right
}

function resetButtonStyle() {
    const button = document.getElementById('changeButton');
    button.style.backgroundColor = 'rgb(202, 144, 240)';
    button.style.boxShadow = 'none';
    button.style.transform = 'scale(1)';
}