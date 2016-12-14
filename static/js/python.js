var stringChoices = ''


function getChoice(){
    jQuery.ajax("/api/student/1").done(function(results){
        stringChoices = results.choices
        console.log(stringChoices)
    })
}
getChoice()

function pythonlessonChoices(){
    var patchdata = {'choices': stringChoices + ',pythonlesson'}
    console.log('gee')
    jQuery.ajax({url: 'http://127.0.0.1:8000/api/student/1/', data: patchdata, type:'PATCH'}).done(function(){
    })
}
$("#pythonlessonButton").click(pythonlessonChoices)
