$(document).ready(() =>{

let docentes = [];

$.ajax({
    url: 'http://127.0.0.1:8081/docentes',
    method: 'get'
}).done((response)=>{
    estudiantes = response;
    console.log(docentes[0]);
    Array.array.forEach(element => {
        document.body.innerHTML += '<h2>'+item.nombre+'</h2>';  
    });
}).fail((err)=>{
    console.error(err);
});



$.ajax({
    url: 'http://127.0.0.1:8081/docentes',
    method: 'post',
    data:{nombre: 'Pepe', codigo: '55822508', ocupacion: 'Ingenieria en sistemas'}
}).done((response)=>{
    console.log(response);
}).fail((err)=>{
    console.error(err);
});

$.ajax({
    url: 'http://127.0.0.1:8081/docentes',
    method: 'put',
    data:{nombre: 'Pepe 2', codigo: '55822508', ocupacion: 'Ingenieria en sistemas'}
}).done((response)=>{
    console.log(response);
}).fail((err)=>{
    console.error(err);
});

$.ajax({
    url: 'http://127.0.0.1:8081/docentes',
    method: 'Delete',
}).done((response)=>{
    console.log(response);
}).fail((err)=>{
    console.error(err);
});

function pruebaClick(id) {
    alert('ok: ' + id);
    $.ajax({
        url: 'http://127.0.0.1:8081/estudiantes/' + id,
        method: 'get',
    }).done((response) => {
        console.log(response);
    }).fail((err) => {
        console.error(err);
    });
}


});