let selectedData = [];
let popupWindow;

function handleButtonClick(choice) {
    const fullName = document.getElementById("fullName").value;

    if (!fullName) {
        alert("Please enter your full name.");
        return;
    }

    selectedData.push({
        fullName: fullName,
        choice: choice
    });
}

function showList() {
    const dataAsTable = selectedData.map(item => `<tr><td>${item.fullName}</td><td>${item.choice}</td></tr>`).join('');

    const popupContent = `
        <html>
        <head>
            <title>Selected Data List</title>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            <h2>Selected Data List</h2>
            <table>
                <tr>
                    <th>Full Name</th>
                    <th>Choice</th>
                </tr>
                ${dataAsTable}
            </table>
            <button onclick="window.close()">Close</button>
        </body>
        </html>
    `;

    popupWindow = window.open('', '_blank', 'height=400,width=600');
    popupWindow.document.write(popupContent);
}

function closePopup() {
    if (popupWindow) {
        popupWindow.close();
        selectedData = [];
    }
}

function getRandomPosition() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const objectSize = Math.floor(Math.random() * 30) + 10;
    const objectX = Math.floor(Math.random() * (windowWidth - objectSize));
    const objectY = Math.floor(Math.random() * (windowHeight - objectSize));

    return { x: objectX, y: objectY, size: objectSize };
}

function getRandomOpacity() {
    return Math.random() * 0.6 + 0.2;
}

function createDecorations() {
    const numCircles = 20;

    const starsContainer = document.querySelector(".stars-container");

    for (let i = 0; i < numCircles; i++) {
        const circle = document.createElement("div");
        circle.classList.add("circle");
        const position = getRandomPosition();
        circle.style.top = position.y + "px";
        circle.style.left = position.x + "px";
        circle.style.width = position.size + "px";
        circle.style.height = position.size + "px";
        circle.style.opacity = getRandomOpacity();
        starsContainer.appendChild(circle);
    }

    const showListButton = document.querySelector(".show-list-button");
    const position = getRandomPosition();
    showListButton.style.top = position.y + "px";
    showListButton.style.left = position.x + "px";
}

createDecorations();
