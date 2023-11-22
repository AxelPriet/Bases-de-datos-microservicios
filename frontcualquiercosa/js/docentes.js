$(document).ready(() =>{
    let docentes = [];
    function crearDocente(nombre, codigo, ocupacion) {
        $.ajax({
            url: 'http://127.0.0.1:8081/docentes',
            method: 'post',
            data:{nombre: nombre, codigo: codigo, ocupacion: ocupacion}
        }).done((response)=>{
            console.log(response);
        }).fail((err)=>{
            console.error(err);
        });
    }
    function leerDocente(codigo) {
        $.ajax({
            url: 'http://127.0.0.1:8081/docentes/' + codigo,
            method: 'get',
        }).done((response)=>{
            console.log(response);
        }).fail((err)=>{
            console.error(err);
        });
    }
    function actualizarDocente(codigo, nombre, ocupacion) {
        $.ajax({
            url: 'http://127.0.0.1:8081/docentes',
            method: 'put',
            data:{nombre: nombre, codigo: codigo, ocupacion: ocupacion}
        }).done((response)=>{
            console.log(response);
        }).fail((err)=>{
            console.error(err);
        });
    }
    function eliminarDocente(codigo) {
        var cursos = obtenerCursosDocente(codigo);
        if (cursos.length > 0) {
            console.error('No se puede eliminar un docente que tenga cursos asociados');
        } else {
            $.ajax({
                url: 'http://127.0.0.1:8081/docentes',
                method: 'Delete',
            }).done((response)=>{
                console.log(response);
            }).fail((err)=>{
                console.error(err);
            });
        }
    }
    $(document).ready(() =>{
        let docentes = [];
        function crearCurso(codigo, nombre, codigoDocente) {
            $.ajax({
                url: 'http://127.0.0.1:8081/cursos',
                method: 'post',
                data:{codigo: codigo, nombre: nombre, codigoDocente: codigoDocente}
            }).done((response)=>{
                console.log(response);
            }).fail((err)=>{
                console.error(err);
            });
        }
        function leerCurso(codigo) {
            $.ajax({
                url: 'http://127.0.0.1:8081/cursos/' + codigo,
                method: 'get',
            }).done((response)=>{
                console.log(response);
            }).fail((err)=>{
                console.error(err);
            });
        }
        function actualizarCurso(codigo, nombre, codigoDocente) {
            $.ajax({
                url: 'http://127.0.0.1:8081/cursos',
                method: 'put',
                data:{codigo: codigo, nombre: nombre, codigoDocente: codigoDocente}
            }).done((response)=>{
                console.log(response);
            }).fail((err)=>{
                console.error(err);
            });
        }
        function eliminarCurso(codigo) {
            $.ajax({
                url: 'http://127.0.0.1:8081/cursos',
                method: 'Delete',
            }).done((response)=>{
                console.log(response);
            }).fail((err)=>{
                console.error(err);
            });
        }
        function obtenerCursosDocente(codigoDocente) {
            $.ajax({
                url: 'http://127.0.0.1:8081/docentes/' + codigoDocente + '/cursos',
                method: 'get',
            }).done((response)=>{
                console.log(response);
            }).fail((err)=>{
                console.error(err);
            });
        }
        function obtenerDocentesCurso(codigoCurso) {
            $.ajax({
                url: 'http://127.0.0.1:8081/cursos/' + codigoCurso + '/docentes',
                method: 'get',
            }).done((response)=>{
                console.log(response);
            }).fail((err)=>{
                console.error(err);
            });
        }
        function pruebaClick(id) {
            alert('ok: ' + id);
            leerDocente(id);
        }
    });})