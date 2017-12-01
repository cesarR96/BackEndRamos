function cargar(){

    $.ajax({
        url:   'data-1.json', 
        type:  'post', 
        dataType: "json",
        success:  function (data) {
            console.log(data)
            var obj = data
            var employee = '';
            $.each(obj, function(key, value) {
                employee += "<div class='itemMostrado card'>";
                employee += "<img src='img/home.jpg' alt='Demo'>";
                employee += "<div class='card-stacked'>";
                employee += "<strong>Dirección: </strong>" + value.Direccion +"</br>";
                employee += "<strong>Ciudad: </strong>" + value.Ciudad +"</br>";
                employee += "<strong>Telefono: </strong>" + value.Telefono +"</br>";
                employee += "<strong>Codigo: </strong>" + value.Codigo +"</br>";
                employee += "<strong>Codigo: </strong>" + value.Tipo +"</br>";
                employee += "<strong>Precio: </strong><span class='precioTexto'>" + value.Precio +"</span></br>";
                employee += "<div class='card-action'>VENTAS</div>";
                employee += "</div>";
                employee += "</div>";
                console.log(value.Id)
            });
                   $("#ok").append(employee);//devuelvo  en el html
               }
           });
}