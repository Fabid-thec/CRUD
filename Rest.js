function doaguess (correctAnswer) {
    var guess = math.random();
    guess = guess * 6;
    guess = math.floor(guess);
    if (guess === correctAnswer) {
        return (true);
    } else {
        return (false);
    }
}
    document.getElementById("guess").onclick = function () {
        var mynumber = document.getElementById("mynumber").value;
        var gotit = false;
        var mynumberofguesses = 1;
        while (gotit == false) {
            if (doaguess(mynumber) === true) {
                gotit = true;
                alert("Got it! It was a " + mynumber + ". It took me " + mynumberofguesses + "guesses");
            } else {
                mynumberofguesses++;
            }
        }
    }


