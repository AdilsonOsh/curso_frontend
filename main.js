$(document).ready(function(){

    $('#input').change(function() {
        let input = $(this).val();
        $('ul').append('<li>' + input + '</li>');
        $(this).val('');
    })
});

$('ul').on('click', 'li',function(){
    if ($(this).css('text-decoration-line')== "none")
    $(this).css('text-decoration-line', 'line-through');
    else
    $(this).css('text-decoration-line', 'none');
})