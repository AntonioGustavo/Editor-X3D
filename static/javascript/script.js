$(function() {
    $('#pesqDB').click(function() {
        $.ajax({
            url: '/post_shape',
            data: $('form').serialize(),
            type: 'POST',
            success: function(response) {
                render = response;
                let pre =document.querySelector('#preview');
                pre.innerHTML=render;
            },
            error: function(error) {
                console.log(error);
            }
        });
    });
});

$(function() {
    $('#salvarDB').click(function() {
        $.ajax({
            url: '/post_add',
            data: $('form').serialize(),
            type: 'POST',
            success: function(response) {
                console.log(response);                
            },
            error: function(error) {
                console.log(error);
            }
        });
    });
});

