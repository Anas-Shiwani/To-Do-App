var main = document.getElementById("main");

function createElem(){
    var div = document.createElement('DIV');
    div.setAttribute('class', 'listing');
    div.setAttribute('id', 'div');

    var input = document.getElementById('input');
    var pera = document.createElement('P');
    pera.setAttribute('class','pera');
    var peraTxt = document.createTextNode(input.value)
    pera.appendChild(peraTxt);
    
    var button = document.createElement('BUTTON');
    button.setAttribute('class', 'button');
    button.setAttribute('onclick', 'del(this)');
    var buttonTxt = document.createTextNode('Delete');
    button.appendChild(buttonTxt);

    div.appendChild(pera);
    div.appendChild(button);
    main.appendChild(div);
    
}
function del(elem){
    var dltVar = elem.parentNode;
    dltVar.remove();
}
function deleteAll(){
    main.innerHTML = "";
    document.getElementById("input").value = "";
}