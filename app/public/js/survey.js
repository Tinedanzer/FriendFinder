// $(document).ready(function(){
// $("#magic").on("click", function (event) {
//     event.preventDefault();
//     console.log("button clicked");

//     const friendsMag = {
//       name: $("#name").val(),
//       photo: $("#photo").val(),
//       scores: [
//         $("#q1").val(),
//         $("#q2").val(),
//         $("#q3").val(),
//         $("#q4").val(),
//         $("#q5").val(),
//         $("#q6").val(),
//         $("#q7").val(),
//         $("#q8").val(),
//         $("#q9").val(),
//         $("#q10").val()
//       ]
//     };
//     let currentURL =window.location.origin;
//     $.post(currentURL + '/api/friends', friendsMag, function (data){
//         console.log(data);
//         console.log(friendsMag);
        
//         $("#match").text(data.name);
//         $("#matchImg").attr("src", data.photo);
//         // $("#results-modal").modal("toggle");

//         // clears input fields
//         $("#name").val("");
//         $("photo").val("");
//         $(".chosen-select").val("");
//     })
//     return false;
// });
// })