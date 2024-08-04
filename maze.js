$(document).ready(function() {
    let isGameOver = false;

    // Exercise 1: Single boundary turns red
    $("#boundary1").mouseover(function() {
        $(this).addClass("youlose");
    });

    // Exercise 2: All boundaries glow red on hover
    $(".boundary").mouseover(function() {
        if (!isGameOver) {
            $(".boundary").addClass("youlose");
            isGameOver = true;
            updateStatus("You lose!");
        }
    });

    // Exercise 3: Alert on completion of maze
    $("#end").mouseover(function() {
        if (!isGameOver) {
            updateStatus("You win!");
        }
    });

    // Exercise 4: Restartable maze
    $("#start").click(function() {
        $(".boundary").removeClass("youlose");
        isGameOver = false;
        updateStatus("Click the \"S\" to begin.");
    });

    // Exercise 5: On-page status updates
    function updateStatus(message) {
        $("#status").text(message);
    }

    // Exercise 6 (Optional): Disallow cheating
    $("#maze").mouseleave(function() {
        if (!isGameOver) {
            $(".boundary").addClass("youlose");
            isGameOver = true;
            updateStatus("You lose! Don't cheat!");
        }
    });
});