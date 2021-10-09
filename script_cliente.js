function consultar_cliente(){
    $.ajax({    
        dataType : 'json',
        url : 'https://g5ea34485e39b13-db202109231402.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/client/client',
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
                $("#titles").append('<th id ="tr_class">Name</th>');
                $("#titles").append('<th id ="tr_class">Email</th>');
                $("#titles").append('<th id ="tr_class">Age</th>');
                $("#titles").append('<th id ="tr_class"></th>');
                $("#titles").append('</tr id ="tr_class">');

                
                for(i=0; i<json.items.length;i++){
                    $("#results").append('<tr id ="tr_class">');
                    $("#results").append('<td id ="tr_class">'+json.items[i].id+'</td>');
                    $("#results").append('<td id ="tr_class">'+json.items[i].name+'</td>');
                    $("#results").append('<td id ="tr_class">'+json.items[i].email+'</td>');
                    $("#results").append('<td id ="tr_class">'+json.items[i].age+'</td>');
                    $("#results").append('</tr class ="tr-class">');


                }
            } else {
                alert("No se encontraron registros en la base de datos de cabañas");
            }
        }
        });
}

function agregar_cliente(){
    var dataSend = {
        id : $("#id").val(),
        name : $("#name").val(),
        email : $("#email").val(),
        age : $("#age").val()}
        
        $.ajax({
            dataType : 'json',
            data : dataSend,
            url: "https://g5ea34485e39b13-db202109231402.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/client/client",
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

function actualizar_cliente(){
    var elemento={
        id:$("#id").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val(),
        
    }
    var dataSend = JSON.stringify(elemento);

    $.ajax({
        dataType:'json',
        data: dataSend,
        contentType:'application/json',
        url:"https://g5ea34485e39b13-db202109231402.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/client/client",
        type:'PUT',

        success:function(respuesta){
            console.log(respuesta);
        },

        error:function(xhr, status){

        }

    });

    alert("Se actualizó exitosamente la cabaña");
    limpiarFormulario();
}

function eliminarCliente(){
    var elemento={
        id:$("#id").val()
    }
    var dataSend = JSON.stringify(elemento);
    $.ajax({
        dataType:'json',
        data: dataSend,
        contentType:'application/json',
        url:"https://g5ea34485e39b13-db202109231402.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/client/client",
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
    $("#name").val("");
    $("#email").val("");
    $("#age").val("");
}
