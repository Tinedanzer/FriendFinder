$("#submit").on("click", function (event) {
    event.preventDefault();

    console.log("button clicked");
    const friendsMag = {
      name: $("#name").val(),
      photo: $("#photo").val(),
      scores: [
        $("#q1").val(),
        $("#q2").val(),
        $("#q3").val(),
        $("#q4").val(),
        $("#q5").val(),
        $("#q6").val(),
        $("#q7").val(),
        $("#q8").val(),
        $("#q9").val(),
        $("#q10").val()
      ]
    };

    $.post('/api/friends', friendsMag, data=>{
        console.log(data);

    })
});