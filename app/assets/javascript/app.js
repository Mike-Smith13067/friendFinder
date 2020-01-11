$(document).ready(function(){
    $('#submit').on('click', function(event){
        event.preventDefault();
        console.log("click read");
        var name = $('#name').val().trim();
        var photo = $("#photo").val().trim()
        var question1 = $('#q1').val();
        var question2 = $('#q2').val();
        var question3 = $('#q3').val();
        var question4 = $('#q4').val();
        var question5 = $('#q5').val();
        var question6 = $('#q6').val();
        var question7 = $('#q7').val();
        var question8 = $('#q8').val();
        var question9 = $('#q9').val();
        var question10 = $('#q10').val();

        if(name && photo && question1 && question2 && question3 && question4 && question5 && question6 && question7 && question8 && question9 && question10){
        $.post("/api/friends",
        {
            name: name,
            photo: photo,
            scores: [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10]
        },
        
        function(data, status){
            console.log("Data: " + data + "\nStatus: " + status);
            $("myModal").modal();
            $("#match").append("<p>" + data.name + "</p>");
            $("#match").append("<img class = 'matchimage' src= '" + data.photo + "' alt = 'photo'>");
            $(".custom-select").val("");
        
        });
    }else {
        event.preventDefault();
        event.stopPropagation();

        $("#myModal").modal();
            $("#match").append("<p>Please answer all questions!</p>");
    }
    });
    $(document.body).on("click", ".closemodal", function(event){
        event.preventDefault();
        $("#match").empty();
    });
});