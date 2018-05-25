var $main = document.querySelector('#maindiv')

var $table = document.createElement('table');

for (var i = 0; i < dataSet.length; i++) {

    var $tr = document.createElement("tr");

    var $td = document.createElement("td");
    $td.innerHTML = dataSet[i].datetime;
    $tr.appendChild($td);

    var $td = document.createElement("td");
    $td.innerHTML = dataSet[i].city;
    $tr.appendChild($td);

    var $td = document.createElement("td");
    $td.innerHTML = dataSet[i].state;
    $tr.appendChild($td);

    var $td = document.createElement("td");
    $td.innerHTML = dataSet[i].country;
    $tr.appendChild($td);

    var $td = document.createElement("td");
    $td.innerHTML = dataSet[i].shape;
    $tr.appendChild($td);

    var $td = document.createElement("td");
    $td.innerHTML = dataSet[i].durationMinutes;
    $tr.appendChild($td);

    var $td = document.createElement("td");
    $td.innerHTML = dataSet[i].comments;
    $tr.appendChild($td);

    $tr.style.border = "solid #0000FF"

    $table.appendChild($tr);

}

$main.appendChild($table)

document.querySelector('#datebutton').addEventListener("click", function (event) {

    var $dateInput = document.querySelector('#dateInput').value;

    $table.innerHTML = "";

    for (var i = 0; i < dataSet.length; i++) {

        var $tr = document.createElement("tr");

        var $td = document.createElement("td");
        $td.innerHTML = dataSet[i].datetime;
        $tr.appendChild($td);

        var $td = document.createElement("td");
        $td.innerHTML = dataSet[i].city;
        $tr.appendChild($td);

        var $td = document.createElement("td");
        $td.innerHTML = dataSet[i].state;
        $tr.appendChild($td);

        var $td = document.createElement("td");
        $td.innerHTML = dataSet[i].country;
        $tr.appendChild($td);

        var $td = document.createElement("td");
        $td.innerHTML = dataSet[i].shape;
        $tr.appendChild($td);

        var $td = document.createElement("td");
        $td.innerHTML = dataSet[i].durationMinutes;
        $tr.appendChild($td);

        var $td = document.createElement("td");
        $td.innerHTML = dataSet[i].comments;
        $tr.appendChild($td);

        $tr.style.border = "solid #0000FF"

        if (dataSet[i].datetime === $dateInput) {
            $table.appendChild($tr);
        }
        $main.appendChild($table)
    }
});