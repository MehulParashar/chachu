let cordinate = {}

$(document).ready(function (){
    get_cordinate();
})

function get_cordinate(){
    let searchPharams = new URLSearchParams(window.location.scearch)
    if (searchPharams.has('source')&& searchPharams.has('destination')){
        let source = searchParams.get('source')
        let destination = searchParams.get('destination')
        coordinates.source_lat = source.split(";")[0]                                                               
        coordinates.source_lon = source.split(";")[1]
        coordinates.destination_lat = destination.split(";")[0]
        coordinates.destination_lon = destination.split(";")[1]
    }else{
        alert("cordinate not selected")
        window.history.back();
    }
}