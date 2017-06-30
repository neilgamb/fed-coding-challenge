window.addEventListener('load', function () {

    // Import rate data from JSON file using jQuery on window load
    $.get("https://neilgamb.github.io/code-test.json", function (data) {

        console.log(data);

        $('#thetable tr').not(':first').not(':last').remove();
        let html = '';
        for (let i = 0; i < data.length; i++) {
            html += '<tr><td>' + data[i].name + '</td><td>' + data[i].apy + "%" + '</td><td>' + "$" + data[i].earnings.toFixed(2);
        }
        $('#thetable tr').first().after(html);
        $("th").css("background-color", "#ffffff");
        $("tr:even").css("background-color", "#DDEBE1");
        $("tr:odd").css("background-color", "#EEF5F0");
    });

    $('document').ready(function () {
        $('#links a').click(function (e) {
            $('#links a').removeClass('active');
            $('#footer-links a').removeClass('active');
            $(this).addClass('active');
        });
    });

    // sidebar navigation toggle
    $("#newsButton").click(function () {
        $(".headers > .active").removeClass('active');
        $(".news-header").addClass('active');

        $(".archive").addClass('hide');
        $(".news").removeClass('hide');

    });

    $("#archiveButton").click(function () {
        $(".headers > .active").removeClass('active');
        $(".archive-header").addClass('active');

        $(".news").addClass('hide');
        $(".archive").removeClass('hide');
    });

    
    // Signon Overlay
    $(".overlay, .overlay-message").hide();

    $("#login").click(function () {
        $(".overlay, .overlay-message").show();

        $("#submit").click(function () {
            $(".overlay, .overlay-message").hide();
        });

        $("#cancel").click(function () {
            $(".overlay, .overlay-message").hide();
        });
    });

});

