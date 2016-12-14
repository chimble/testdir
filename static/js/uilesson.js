var stringChoices = ''


function getChoice(){
    jQuery.ajax("/api/student/1").done(function(results){
        stringChoices = results.choices
        console.log(stringChoices)
    })
}
getChoice()

function uihelloChoices(){
    var patchdata = {'choices': stringChoices + ',uihello'}
    console.log('gee')
    jQuery.ajax({url: 'http://127.0.0.1:8000/api/student/1/', data: patchdata, type:'PATCH'}).done(function(){
    })
}
$("#uihelloButton").click(uihelloChoices)
