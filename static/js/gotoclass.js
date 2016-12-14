var stringChoices = ''


function getChoice(){
    jQuery.ajax("/api/student/1").done(function(results){
        stringChoices = results.choices
        console.log(stringChoices)
    })
}
getChoice()

function pythonChoices(){
    var patchdata = {'choices': stringChoices + ',python'}
    console.log('gee')
    jQuery.ajax({url: 'http://127.0.0.1:8000/api/student/1/', data: patchdata, type:'PATCH'}).done(function(){
    })
}
$("#pythonButton").click(pythonChoices)

function uiChoices(){
    var patchdata = {'choices': stringChoices + ',ui'}
    console.log('gee')
    jQuery.ajax({url: 'http://127.0.0.1:8000/api/student/1/', data: patchdata, type:'PATCH'}).done(function(){
    })
}
$("#uiButton").click(uiChoices)
