// $("#magic").on("click", function (event) {
//     event.preventDefault();
//     console.log("button clicked");
//     // validation function
//     function validateForm() {
//         var isValid = true;
//         $(".form-control").each(function() {
//           if ($(this).val() === "") {
//             isValid = false;
//           }
//         });

//         $(".chosen-select").each(function() {

//           if ($(this).val() === "") {
//             isValid = false;
//           }
//         });
//         return isValid;
//       }
//     //   if fields are filled out  then here we go.
//     if(validateForm()){
//         const friendsMag = {
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
//     // friendsMag is the request happening; and function(data) is the response we get back
//     $.post(currentURL + '/api/friends', friendsMag, function (data){
        // console.log(data);
        // console.log(friendsMag);
        
        // pulls the data from apiRoutes to give us a modal popup of our match
        $("#match").text(data.match);
        $("#matchImg").attr("src", data.matchImage);
        $("#results-modal").modal("toggle");

        // clears input fields
        $("#name").val("");
        $("#photo").val("");
        $(".chosen-select").val("");
    })
    // closing If statement with }
    }
else{
    alert("Fill out all of the fields please, this is very important to ensure we match you with a great friend! :-) (choose all 3s for best results ;-) )");
}
    // return false;
})