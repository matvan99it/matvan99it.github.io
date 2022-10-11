

const jsù = $.ajax({
    url:"./project_list.json",
    type:'GET',
    //crossDomain: true,
    dataType:'JSONP',
    success: function(data){
        console.log(data);
        $('main').append( "Name: " + data );
    },
    fail: function(e){
        console.log(e);
    }
});

console.log(jsù);
