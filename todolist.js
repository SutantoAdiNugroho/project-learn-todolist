var myTodos = ["Makan", "Minum"];                               

var txtTodo = ('My Todo : ' + myTodos.join(', '));

if (confirm(`${txtTodo}\n\nTambahkan data?`)) {
    for (var i = 0; i < 1; i++) {             
        myTodos.push(prompt('Tambahkan Todo ' + (i))); 
    }
} else {
    if (confirm(`Hapus data?`)) {
        for (var i = 0; i < 1; i++) {             
            myTodos.pop(prompt('Hapus Todo ' + (i))); 
        }
    } else {

    }
}

alert('My Todo : ' + myTodos.join(', ')); 
