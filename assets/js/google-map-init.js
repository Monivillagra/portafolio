var map;
// var cuidades = get_ciudades();
// var origen = $('#origen');
// var destino = $('#destino');
// var vehicles = [
//     {
//         name: 'moto',
//         capacity: 2,
//         consumo: 21
//     },
//     {
//         name: 'auto',
//         capacity: 5,
//         consumo: 12
//     },
//     {
//         name: 'minivan',
//         capacity: 8,
//         consumo: 7
//     },
//     {
//         name: 'truck',
//         capacity: 3,
//         consumo: 6
//     }
// ];
// variable que tiene el vehiculo que eligio el usuario
// var vehicle;


// $(document).ready(function(){
    // tu codigo va acá
    // llenar_selects();

    // $('#origen, #destino').on('change', function(){
        // primero recupero valores del select
        // var origen_val = origen.val();
        // var destino_val = destino.val();
        // ahora verifico condicion de habilitar el boton

        // if(origen_val!=='0' && destino_val!=='0'){
            // habilito el boton
        //     $('#search').prop('disabled', false);
        // } else {
            // deshabilito el boton
    //         $('#search').prop('disabled', true);
    //     }
    // });

    // $('#search').on('click', function(){
    //     $('#hidden').slideDown(800);
    // });

    // $('input[type="radio"], #num_passangers').on('change', function(){
    //     var vehicle_str = $('input[name="vehicle"]:checked').val();
    //     var num_passangers = parseInt($('#num_passangers').val());
        // boton compartir carro
        // var share = $('#share');

        // if(isNaN(num_passangers) || num_passangers<1){

        //     alert('Debe elegir un numero positivo');
        //     share.prop('disabled', true);

        
        // } else if(!vehicle_str) {

        //     alert('Debe elegir al menos 1 vehiculo');
        //     share.prop('disabled', true);

        // } else {
            // comprobar que mis pasajeros caben el vehiculo
            // vehicle = buscarElem(vehicles, vehicle_str);

            // if(num_passangers > vehicle.capacity){
            //     alert('Exceden el maximo de asientos');
            //     share.prop('disabled', true);
            // } else {
                // eureka!. La validacion fue exitosa
    //             share.prop('disabled', false);
    //         }
    //     }
    // });

    // $('#share').on('click', function(){
        // primnero me traigo las ciudades
        // var ciudad_origen = buscarElem(cuidades, origen.val());
        // var ciudad_destino = buscarElem(cuidades, destino.val());
        // despues la cantidad de gente
        // var gente = parseInt($('#num_passangers').val());

        // calculo distancia entre ambas ciudades
        // var distancia = Math.abs(ciudad_origen.distance - ciudad_destino.distance);

        // var litros_gastados = distancia / vehicle.consumo;
        // var dinero_gastado = litros_gastados * 673;

        // var precioXpersona = dinero_gastado/gente;
        // var precioAprox = bomberos(precioXpersona);
        // mostrar el resultado
//         $('#price').html(precioAprox);

//         mostrar_ruta(ciudad_origen, ciudad_destino);
//     });
// });

// function mostrar_ruta(ciudad_origen, ciudad_destino){
//     var directionsDisplay = new google.maps.DirectionsRenderer();
//     var directionsService = new google.maps.DirectionsService();

    //escribir la ruta en el mapa ok
//     var request = {
//         origin: ciudad_origen.long_name,
//         destination: ciudad_destino.long_name,
//         travelMode: google.maps.DirectionsTravelMode.DRIVING,
//         unitSystem: google.maps.DirectionsUnitSystem.METRIC,
//         provideRouteAlternatives: true
//     };

//     directionsService.route(request, function(response, status) {
//         if (status == google.maps.DirectionsStatus.OK) {
//                 directionsDisplay.setMap(map);
//                 directionsDisplay.setDirections(response);
//         } else {
//                         console.log(response);
//         }
//     });
// }

// function llenar_selects(){
    // aca llenamos ambos select
//     cuidades.forEach(function(ciudad, index){

//         origen.append('<option value="'+ciudad.name+'">'+ciudad.name+'</option>');
//         destino.append('<option value="'+ciudad.name+'">'+ciudad.name+'</option>');
//     });
// }

// function change_map(position){
//     var latlng = {
//         lat: position.coords.latitude,
//         lng: position.coords.longitude
//     };

//     map.setCenter(latlng);
//     var marker = new google.maps.Marker({
//         map: map,
//         position: latlng
//     });
// }

function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: -33.43,
            lng: -70.65
        },
        zoom: 16
    });
    if(navigator.geolocation){
        // solo en caso que dispositivo tenga ubicacion
        // navigator.geolocation.getCurrentPosition(change_map);
    }
}

// function buscarElem(lista, nombre){
//     for (var i=0 ; i<lista.length ; ++i){
//         if (lista[i].name == nombre){
//             return lista[i];
//         }
//     }
//     return null;
// }

// function bomberos(precio){
//     return Math.round(precio, 3);
// }