function displayData(triangleName, triangleArea){
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <th>${count}</th>
    <td>${triangleName}</td>
    <td>${triangleArea}</td>
    <td><button class="btn btn-info">Convert To M</button></td>
    `;
    const tbl = document.getElementById('tbl-container')
    tbl.appendChild(tr);
}

let count = 0;
document.getElementById('triangle-btn').addEventListener('click', function () {
    const triangleName = document.getElementById('triangle-name').innerText;
    const b = document.getElementById('triangle-input-b');
    const h = document.getElementById('triangle-input-h');
    const valueOfB = parseFloat(b.value);
    const valueOfH = parseFloat(h.value);
    count +=1;

    const triangleArea = 1 / 2 * valueOfB * valueOfH;
    b.value = '';
    h.value = '';

    displayData( triangleName, triangleArea);
})
document.getElementById('rectangle-btn').addEventListener('click', function () {
    const rectangleName = document.getElementById('rectangle-name').innerText;
    const i = document.getElementById('ractangle-input-w');
    const w = document.getElementById('ractangle-input-i');
    const valueOfI = parseFloat(i.value);
    const valueOfW = parseFloat(w.value);
    count +=1;

    const rectangleArea = valueOfI * valueOfW;
    i.value = '';
    w.value = '';

    displayData( rectangleName, rectangleArea);
})
document.getElementById('parallelogram-btn').addEventListener('click', function () {
    const parallelogramName = document.getElementById('parallelogram-name').innerText;
    const parallelogramB = document.getElementById('parallelogram-input-b');
    const parallelogramH = document.getElementById('parallelogram-input-h');
    const parallelogramValueOfB = parseFloat(parallelogramB.value);
    const parallelogramValueOfH = parseFloat(parallelogramH.value);
    count +=1;

    const parallelogramArea = parallelogramValueOfB * parallelogramValueOfH;
    parallelogramB.value = '';
    parallelogramH.value = '';

    displayData( parallelogramName, parallelogramArea);
})
document.getElementById('rhombus-btn').addEventListener('click', function () {
    const rhombusName = document.getElementById('rhombus-name').innerText;
    const rhombusD1 = document.getElementById('rhombus-input-d1');
    const rhombusD2 = document.getElementById('rhombus-input-d2');
    const rhombusValueOfD1 = parseFloat(rhombusD1.value);
    const rhombusValueOfD2 = parseFloat(rhombusD2.value);
    count +=1;

    const rhombusArea = 1/2 * rhombusValueOfD1 * rhombusValueOfD2;
    rhombusD1.value = '';
    rhombusD2.value = '';

    displayData(rhombusName, rhombusArea);
})
document.getElementById('rhombus-btn').addEventListener('click', function () {
    const rhombusName = document.getElementById('rhombus-name').innerText;
    const rhombusD1 = document.getElementById('rhombus-input-d1');
    const rhombusD2 = document.getElementById('rhombus-input-d2');
    const rhombusValueOfD1 = parseFloat(rhombusD1.value);
    const rhombusValueOfD2 = parseFloat(rhombusD2.value);
    count +=1;

    const rhombusArea = 1/2 * rhombusValueOfD1 * rhombusValueOfD2;
    rhombusD1.value = '';
    rhombusD2.value = '';

    displayData(rhombusName, rhombusArea);
})
document.getElementById('rhombus-btn').addEventListener('click', function () {
    const rhombusName = document.getElementById('rhombus-name').innerText;
    const rhombusD1 = document.getElementById('rhombus-input-d1');
    const rhombusD2 = document.getElementById('rhombus-input-d2');
    const rhombusValueOfD1 = parseFloat(rhombusD1.value);
    const rhombusValueOfD2 = parseFloat(rhombusD2.value);
    count +=1;

    const rhombusArea = 1/2 * rhombusValueOfD1 * rhombusValueOfD2;
    rhombusD1.value = '';
    rhombusD2.value = '';

    displayData(rhombusName, rhombusArea);
})
