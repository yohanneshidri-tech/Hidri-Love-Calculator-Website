function calculateMatch() {

    // Get the names from the input boxes

    var name1 = document.getElementById("name1").value;

    var name2 = document.getElementById("name2").value;


    // Remove unnecessary spaces

    name1 = name1.trim();

    name2 = name2.trim();


    // Clear previous error

    document.getElementById("error").innerHTML = "";


    // Check if the first name is empty

    if (name1 == "") {

        document.getElementById("error").innerHTML =
            "Please enter the first name. 😊";

        return;
    }


    // Check if the second name is empty

    if (name2 == "") {

        document.getElementById("error").innerHTML =
            "Please enter the second name. 😊";

        return;
    }


    // Check if both names are the same

    if (name1.toLowerCase() == name2.toLowerCase()) {

        document.getElementById("error").innerHTML =
            "You cannot match yourself! 😂";

        return;
    }


    // Generate random number from 0 to 100

    var match = Math.floor(Math.random() * 101);


    // Show names

    document.getElementById("names").innerHTML =
        name1 + " + " + name2;


    // Show score

    document.getElementById("score").innerHTML =
        match + "%";


    // Variables for result

    var category;

    var suggestion;

    var sarcasm;

    var heart;

    var scoreColor;

    // --------------------------------
    // 0 - 20%
    // --------------------------------

    if (match <= 20) {

        category = "Just Friends 🤍";

        heart = "🤍";
        scoreColor = "score-gray";

        suggestion =
            "Keep it friendly. You may have a good friendship, so enjoy the connection without forcing romance.";

        sarcasm =
            "The romantic chemistry has left the building. Please don't chase it with a GPS. 😂";
    }


    // --------------------------------
    // 21 - 40%
    // --------------------------------

    else if (match <= 40) {

        category = "Friend-Zone Potential 🤍";

        heart = "🤍";
        scoreColor = " score-gray";

        suggestion =
            "Stay in touch and continue getting to know each other. Friendship might be the best direction for now.";

        sarcasm =
            "Your love story is loading... but the internet connection is VERY slow. 😂";
    }


    // --------------------------------
    // 41 - 60%
    // --------------------------------

    else if (match <= 60) {

        category = "Something Is Brewing 💛";

        heart = "💛";
        scoreColor = " score-yellow";

        suggestion =
            "Keep in touch and develop the friendship. There may be enough spark to explore the connection slowly.";

        sarcasm =
            "There is a spark... but nobody has called the fire department yet. 🔥😂";
    }


    // --------------------------------
    // 61 - 75%
    // --------------------------------

    else if (match <= 75) {

        category = "Feelings Are Developing 💗";

        heart = "💗";
        scoreColor = "score-pink";

        suggestion =
            "Spend more time together and see where the feelings go. Don't rush it. Let the connection grow naturally.";

        sarcasm =
            "Okayyy... somebody's heart has started writing paragraphs instead of replies. 👀😂";
    }


    // --------------------------------
    // 76 - 90%
    // --------------------------------

    else if (match <= 90) {

        category = "Strong Connection ❤️";

        heart = "❤️";
        scoreColor = "score-red";

        suggestion =
            "There is strong compatibility here. Keep communicating and consider developing deeper feelings.";

        sarcasm =
            "At this point, even your phone battery knows you two talk too much. ❤️😂";
    }


    // --------------------------------
    // 91 - 100%
    // --------------------------------

    else {

        category = "Dangerously Compatible 💖";

        heart = "💖";
        scoreColor = "score-red";

        suggestion =
            "This is a very high match! Keep communicating, be honest about your intentions, and see if something meaningful develops.";

        sarcasm =
            "The calculator has spoken. Now please act normal... or at least pretend to. 😂💍";
    }


    // Show the result

    document.getElementById("heart").innerHTML =
        heart;

    document.getElementById("category").innerHTML =
        category;

    document.getElementById("suggestion").innerHTML =
        suggestion;

    document.getElementById("sarcasm").innerHTML =
        sarcasm;
   document.getElementById("score").innerHTML =
        match + "%";
    document.getElementById("score").className =scoreColor;
    document.getElementById("heart").className = "";
    if (match >=91) {
        document.getElementById("heart").className = 
        "pumping-heart";
    }

    // Display result box

    document.getElementById("result").style.display =
        "block";
}



function tryAgain() {

    // Hide result

    document.getElementById("result").style.display =
        "none";


    // Clear names

    document.getElementById("name1").value = "";

    document.getElementById("name2").value = "";


    // Clear error

    document.getElementById("error").innerHTML = "";


    // Put cursor in first box

    document.getElementById("name1").focus();
}