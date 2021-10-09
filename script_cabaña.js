function consultarCabaña(){
    $.ajax({    
        dataType : 'json',
        url : 'https://g5ea34485e39b13-db202109231402.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/cabin/cabin',
        type : 'GET',
            
        error : function(xhr, status) {
            alert('ha sucedido un problema, '+xhr.status);
        },
        complete : function(xhr, status) {
            alert('Petición realizada, ' + xhr.status);
        },
        success : function(json) {
            if (json.items.length != 0) {
                
                $("#titles").append('<tr id ="tr_class">');
                $("#titles").append('<th id ="tr_class">Id</th>');
                $("#titles").append('<th id ="tr_class">Brand</th>');
                $("#titles").append('<th id ="tr_class">Rooms</th>');
                $("#titles").append('<th id ="tr_class">Category id</th>');
                $("#titles").append('<th id ="tr_class">Name</th>');
                $("#titles").append('<th id ="tr_class"></th>');
                $("#titles").append('</tr id ="tr_class">');

                
                for(i=0; i<json.items.length;i++){
                    $("#results").append('<tr id ="tr_class">');
                    $("#results").append('<td id ="tr_class">'+json.items[i].id+'</td>');
                    $("#results").append('<td id ="tr_class">'+json.items[i].brand+'</td>');
                    $("#results").append('<td id ="tr_class">'+json.items[i].rooms+'</td>');
                    $("#results").append('<td id ="tr_class">'+json.items[i].category_id+'</td>');
                    $("#results").append('<td id ="tr_class">'+json.items[i].name+'</td>');
                    $("#results").append('</tr class ="tr-class">');


                }
            } else {
                alert("No se encontraron registros en la base de datos de cabañas");
            }
        }
        });
}

function agregar_cabaña(){
    var dataSend = {
        id : $("#id").val(),
        brand : $("#brand").val(),
        rooms : $("#rooms").val(),
        category_id : $("#category_id").val(),
        name : $("#name").val()}
        
        $.ajax({
            dataType : 'json',
            data : dataSend,
            url: "https://g5ea34485e39b13-db202109231402.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/cabin/cabin",
            type : 'POST',
            
            success : function(respuesta){
                console.log(respuesta);
            },
        error : function(xhr, status){
            
        },
        complete : function(xhr, status){
            alert('Se agrego correctamente' + xhr.status);
            limpiarFormulario();
        }
    });
}

function actualizarCabaña(){
    var elemento={
        id:$("#id").val(),
        brand:$("#brand").val(),
        rooms:$("#rooms").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val()
        
    }
    var dataSend = JSON.stringify(elemento);

    $.ajax({
        dataType:'json',
        data: dataSend,
        contentType:'application/json',
        url:"https://g5ea34485e39b13-db202109231402.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/cabin/cabin",
        type:'PUT',

        success:function(response){
            console.log(response);
        },

        error:function(jqXHR, textStatus, errorThrown){

        }

    });

    alert("Se actualizó exitosamente la cabaña");
    cleanForm();
}

function eliminarCabaña(){
    var elemento={
        id:$("#id").val()
    }
    var dataSend = JSON.stringify(elemento);
    $.ajax({
        dataType:'json',
        data: dataSend,
        contentType:'application/json',
        url:"https://g5ea34485e39b13-db202109231402.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/cabin/cabin",
        type:'DELETE',

        success:function(respuesta){
            console.log(respuesta);
        },

        error:function(xhr, status){

        }

    });
    alert("Se eliminó exitosamente la cabaña");
    cleanForm();

}

function limpiarFormulario (){
    $("#id").val("");
    $("#brand").val("");
    $("#rooms").val("");
    $("#category_id").val("");
    $("#name").val("");
}
