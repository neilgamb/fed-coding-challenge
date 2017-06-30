window.addEventListener('load', function () {

    $.get("https://neilgamb.github.io/code-test.json", function (data) {

        console.log(data);

        $('#thetable tr').not(':first').not(':last').remove();
        let html = '';
        for(let i = 0; i < data.length; i++){
            html += '<tr><td>' + data[i].name + '</td><td>' + data[i].apy +"%" + '</td><td>' + "$"+data[i].earnings.toFixed(2);
        }
        $('#thetable tr').first().after(html);
        $("th").css("background-color", "#ffffff");
        $("tr:even").css("background-color", "#DDEBE1");
        $("tr:odd").css("background-color", "#EEF5F0");
    });

});