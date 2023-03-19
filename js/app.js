function displayData(triangleName, triangleArea){
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <th>${count}</th>
    <td>${triangleName}</td>
    <td>${triangleArea}<span> cm<sup>2</sup></span></td>
    <td><button class="btn btn-info">Convert To M<sup>2</sup></button></td>
    `;
    const tbl = document.getElementById('tbl-container')
    tbl.appendChild(tr);
}
function removeInput(inp1, inp2){
    inp1.value = '';
    inp2.value = '';
}
// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function color (elementId){
    const card = document.getElementById(elementId);
    card.addEventListener('mouseover', function(){
      card.style.backgroundColor = getRandomColor();
    });
    card.addEventListener('mouseout', function(){
      card.style.backgroundColor = 'white';
    });
}
color('triangle-card');
color('rectangle-card');
color('parallelogram-card');
color('rhombus-card');
color('pentagon-card');
color('ellipse-card');

let count = 0;
document.getElementById('triangle-btn').addEventListener('click', function () {
    const triangleName = document.getElementById('triangle-name').innerText;
    const triangleB = document.getElementById('triangle-input-b');
    const triangleH = document.getElementById('triangle-input-h');
    const triangleValueOfB = parseFloat(triangleB.value);
    const triangleValueOfH = parseFloat(triangleH.value);

    if (isNaN(triangleValueOfB && triangleValueOfH)){
        alert('Please enter a number');
        return;
    }

    count +=1;
    const triangleArea = 1/2 * triangleValueOfB * triangleValueOfH;
    removeInput(triangleB ,triangleH);
    displayData( triangleName, triangleArea);
})
document.getElementById('rectangle-btn').addEventListener('click', function () {
    const rectangleName = document.getElementById('rectangle-name').innerText;
    const rectangleI = document.getElementById('ractangle-input-w');
    const rectangleW = document.getElementById('ractangle-input-i');
    const rectangleValueOfI = parseFloat(rectangleI.value);
    const rectangleValueOfW = parseFloat(rectangleW.value);

    if (isNaN(rectangleValueOfI && rectangleValueOfW)){
        alert('Please enter a number');
        return;
    }

    count +=1;
    const rectangleArea = rectangleValueOfI * rectangleValueOfW;
    removeInput(rectangleI , rectangleW);
    displayData( rectangleName, rectangleArea);
})
document.getElementById('parallelogram-btn').addEventListener('click', function () {
    const parallelogramName = document.getElementById('parallelogram-name').innerText;
    const parallelogramB = document.getElementById('parallelogram-input-b');
    const parallelogramH = document.getElementById('parallelogram-input-h');
    const parallelogramValueOfB = parseFloat(parallelogramB.value);
    const parallelogramValueOfH = parseFloat(parallelogramH.value);

    if (isNaN(parallelogramValueOfB && parallelogramValueOfH)){
        alert('Please enter a number');
        return;
    }

    count +=1;
    const parallelogramArea = parallelogramValueOfB * parallelogramValueOfH;
    removeInput(parallelogramB, parallelogramH);
    displayData( parallelogramName, parallelogramArea);
})
document.getElementById('rhombus-btn').addEventListener('click', function () {
    const rhombusName = document.getElementById('rhombus-name').innerText;
    const rhombusD1 = document.getElementById('rhombus-input-d1');
    const rhombusD2 = document.getElementById('rhombus-input-d2');
    const rhombusValueOfD1 = parseFloat(rhombusD1.value);
    const rhombusValueOfD2 = parseFloat(rhombusD2.value);

    if (isNaN(rhombusValueOfD1 && rhombusValueOfD2)){
        alert('Please enter a number');
        return;
    }

    count +=1;
    const rhombusArea = 1/2 * rhombusValueOfD1 * rhombusValueOfD2;
    removeInput(rhombusD1, rhombusD2);
    displayData(rhombusName, rhombusArea);
})
document.getElementById('pentagon-btn').addEventListener('click', function () {
    const pentagonName = document.getElementById('pentagon-name').innerText;
    const pentagonP = document.getElementById('pentagon-input-p');
    const pentagonB = document.getElementById('pentagon-input-b');
    const pentagonValueOfP = parseFloat(pentagonP.value);
    const pentagonValueOfB = parseFloat(pentagonB.value);

    if (isNaN(pentagonValueOfP && pentagonValueOfB)){
        alert('Please enter a number');
        return;
    }

    count +=1;
    const pentagonArea = 1/2 * pentagonValueOfP * pentagonValueOfB;
    removeInput(pentagonP, pentagonB);
    displayData(pentagonName, pentagonArea);
})
document.getElementById('ellipse-btn').addEventListener('click', function () {
    const ellipseName = document.getElementById('ellipse-name').innerText;
    const ellipseA = document.getElementById('ellipse-input-a');
    const ellipseB = document.getElementById('ellipse-input-b');
    const ellipseValueOfA = parseFloat(ellipseA.value);
    const ellipseValueOfB = parseFloat(ellipseB.value);

    if (isNaN(ellipseValueOfA && ellipseValueOfB)){
        alert('Please enter a number');
        return;
    }

    count +=1;
    const ellipseArea = 3.14 * ellipseValueOfA * ellipseValueOfB;
    removeInput(ellipseA, ellipseB);
    displayData(ellipseName, ellipseArea);
})

