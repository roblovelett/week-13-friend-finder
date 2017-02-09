$("#submit").on("click", function () {
    var friend = { //get form inputs
        name: $("#name").val().trim(), //get name input
        photo: $("#photo").val().trim(), //get photo url input
        scores: [] //init      
    };
    for (i = 0; i < 10; i++) {
        var score = $("#q" + i).val();
        friend.scores.push(parseInt(score));
    };
    var url = window.location.origin; //get root page url
    $.post(url + "/api/friends", friend, function (data) { //jquery ajax callback
        var match = {
            txt: "You match with " + data.name,
            img: "<img src=\"" + data.photo + "\">"
        };
        modal(match);
        $('#name').val(""); //clear inputs
        $('#photo').val("");
    });
    event.preventDefault(); //jquery mathod cancels default navigation behavior of click
});

function modal(data) {
    /* Once you've found the current user's most compatible friend, display the
    result as a modal pop-up. * The modal should display both the name and picture
    of the closest match. */
    $("#match-name").text(data.txt);
    $("#match-img").html(data.img);
    $("#match-results").show(800, function () {
        timeoutID = window.setTimeout(hideDiv, 8000);

        function hideDiv() {
            $("#match-results").hide(800);
        };
    });
};