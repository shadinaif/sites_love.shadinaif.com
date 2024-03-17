function fix_digits(value) {
    var result = value.toString();

    if (result.length == 1) {
        result = "0".concat(result);
    }

    return result;
}

function get_time_elapsed() {
    var elapsed = (Date.now() - Date.parse('2016-08-18 21:00:00')) / 1000;

    var days = parseInt(elapsed / 3600 / 24).toString();
    elapsed -= (days * 3600 * 24);

    var hours = parseInt(elapsed / 3600);
    elapsed -= (hours * 3600);

    var minutes = parseInt(elapsed / 60);
    elapsed -= (minutes * 60);

    var seconds = parseInt(elapsed)

    $('#days-elapsed').text(days);
    $('#hours-elapsed').text(fix_digits(hours));
    $('#minutes-elapsed').text(fix_digits(minutes));
    $('#seconds-elapsed').text(fix_digits(seconds));

    setTimeout(get_time_elapsed, 1000);
}