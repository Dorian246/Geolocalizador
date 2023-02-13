$(document).ready(function () {
           
    $("#pedirvan").click(function () {
        
        if (!!navigator.geolocation) {
           
            navigator.geolocation.getCurrentPosition(
                    
                    function (position) {
                        window.alert("Permitido:)");
                        $("#nlat").text(position.coords.latitude);
                        $("#nlon").text(position.coords.longitude);
                    },
                    
                    function () {
                        window.alert("No permitido:(");
                    }
            );
        }
    });

});