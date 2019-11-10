//DOM TodoList
var inputText = document.getElementById("txt"),
items = document.getElementsByClassName("list-group-item"),
tab = [], index;

for (var i = 0; i < items.length; i++){
    tab.push(items[i].innerHTML);
}

for (var i = 0; i < items.length; i++){
    items[i].onclick = function(){
        index = tab.indexOf(this.innerHTML);
        inputText.value = this.innerHTML; 
    }
}

function changeColorList(color) { 
    // document.body.style.background = color; 
    
} 

function refreshArray() {
    tab.length = 0;
    items = document.getElementsByClassName("list-group-item");
    for(var i = 0; i < items.length; i++){
        tab.push(items[i].innerHTML);
    }
}

function addLI(){
    var listNode = document.getElementById("list"), textNode = document.createTextNode(inputText.value), liNode = document.createElement("li");
    liNode.className = "list-group-item"
    
    liNode.appendChild(textNode);
    listNode.appendChild(liNode);
    
    refreshArray();
    
    liNode.onclick = function(){
        index = tab.indexOf(liNode.innerHTML);
        inputText.value = liNode.innerHTML;
    }
}

function editLI(){
    items[index].innerHTML = inputText.value;
    refreshArray();
}

function deleteLI(){
    refreshArray();
    if(items.length > 0){
         items[index].parentNode.removeChild(items[index]);
         inputText.value = "";
     }
}



//CONSOLE TodoList

// var myTodos = ["Makan", "Minum"];                               

// var txtTodo = ('My Todo : \n'+ myTodos.join('\n'));

// if (confirm(`${txtTodo}\n\nTambahkan data?`)) {
//     for (var i = 0; i < 1; i++) {             
//         myTodos.push(prompt('Tambahkan Todo ' + (i))); 
//     }
// } else {
//     if (confirm(`Hapus data?`)) {
//         for (var i = 0; i < 1; i++) {             
//             myTodos.splice(prompt('Hapus Todo ' + (i))); 
//         }
//     } else {

//     }
// }

// alert('My Todo : \n' + myTodos.join('\n')); 
