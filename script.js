// Your code here

const table = document.getElementsByTagName('table')[0];
const addRow = document.getElementById('add-row');
const select = document.getElementsByTagName('select')[0]

function makeRow() {
    const tableRow = document.createElement('tr');
    for (let i = 0; i < 20; i++) {
        const tableData = document.createElement('td');
        tableRow.appendChild(tableData);
    }

    table.appendChild(tableRow);

};

addRow.addEventListener('click', makeRow);

function colorize(event) {
    console.log("clicked");
    console.log("this is event: ", event);
    const target = event.target;
    if (target.className === initialColor) {
        target.className = ""
    } else {
        target.className = initialColor;
    }
}

table.addEventListener('click', colorize);

let initialColor = 'red'

select.addEventListener('change', function(event) {
    console.log(event.target.value);
    initialColor = event.target.value;
});
