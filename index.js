var input = document.getElementById('takeInput');

var addBtn = document.getElementById('add-icon');

function addItem() {
    var node = document.createElement('li');
    var textNode = document.createTextNode(input.value);
    node.appendChild(textNode);
    
    document.getElementById('work-list').appendChild(node);
    input.value = "";
    var del = document.createElement('button');
    
    del.appendChild(document.createTextNode('X'));
    node.appendChild(del);
    node.id = "work-para";
    del.id = "delete-btn";

    del.onclick = function() {
        node.remove();
    }
  
}

addBtn.onclick = function() {
    addItem();
}



