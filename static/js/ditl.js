function coffeeChoices(){
    var patchdata = {'choices': 'coffee'}
    console.log('gee')
    jQuery.ajax({url: 'http://127.0.0.1:8000/api/student/1/', data: patchdata, type:'PATCH'}).done(function(){

    })
}
$("#coffeeButton").click(coffeeChoices)

function classChoices(){
    var patchdata = {'choices': 'class'}
    console.log('gee')
    jQuery.ajax({url: 'http://127.0.0.1:8000/api/student/1/', data: patchdata, type:'PATCH'}).done(function(){

    })
}
$("#classButton").click(classChoices)
