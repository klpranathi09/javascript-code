var count = 0;

function box() {
    var num = document.getElementById('num').value;
    var color = document.getElementById('color').value;
    for (let i = 0; i < num; i++) {

        count++;
        var btn = document.createElement("button");

        btn.id = 'button';
        btn.innerHTML = "new button\n" + count;
        btn.style = "background-color :" + (color) + ";"

        document.body.appendChild(btn);
    }




}