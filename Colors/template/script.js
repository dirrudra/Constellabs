function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function randomizeColors() {
    for (let i = 1; i <= 5; i++) {
        let color = getRandomColor();
        document.getElementById(`section${i}`).style.backgroundColor = color;
        document.getElementById(`color${i}`).innerText = color;
    }
}

document.getElementById('randomizeButton').addEventListener('click', randomizeColors);

// Initial random colors
randomizeColors();
