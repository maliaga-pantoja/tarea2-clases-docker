$("[type=button]").on("click", function(){
    console.log('running')
    $.get("http://back:8081", function(response){
        console.log(response)
    })
})