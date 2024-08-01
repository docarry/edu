// $(document).ready(function(){
//     $('dl dt').click(function(){
//         $('+dd', this).slideDown(500).siblings('dd').slideUp(500);
//     });
//     $('dl dd').click(function(){
//         $(this).slideUp(500);
//     })
// });

$(function(){
    $('dl dt').on('click', function(){
        $('+dd', this).slideDown(500).siblings('dd').slideUp(500);
    });
    $('dl dd').on('click', function(){
            $(this).slideUp(500);
        })
});