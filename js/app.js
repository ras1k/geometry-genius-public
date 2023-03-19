function displayData(triangleName, triangleArea){
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <th>1</th>
    <td>${triangleName}</td>
    <td>${triangleArea}</td>
    <td><button class="btn btn-info">Convert To M</button></td>
    `;
    const tbl = document.getElementById('tbl-container')
    tbl.appendChild(tr);
}

document.getElementById('triangle-btn').addEventListener('click', function () {
    const triangleName = document.getElementById('triangle-name').innerText;
    const b = document.getElementById('triangle-input-b');
    const h = document.getElementById('triangle-input-h');
    // console.log(b,h)
    const valueOfB = parseFloat(b.value);
    const valueOfH = parseFloat(h.value);

    const triangleArea = 1 / 2 * valueOfB * valueOfH;
    console.log(triangleName, triangleArea);

    //innerHtml
    displayData(triangleName, triangleArea);

    

})
document.getElementById('rectangle-btn').addEventListener('click', function () {
    const rectangleName = document.getElementById('rectangle-name').innerText;
    const i = document.getElementById('ractangle-input-w');
    const valueOfI = parseFloat(i.value);
    const w = document.getElementById('ractangle-input-i');
    const valueOfW = parseFloat(w.value);
    const rectangleArea = valueOfI * valueOfW;
    console.log('lol', rectangleArea);

    //innerhtml
    displayData(rectangleName, rectangleArea);
})