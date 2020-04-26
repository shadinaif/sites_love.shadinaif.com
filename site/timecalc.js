function get_time_elapsed() {
    var elapsed = (Date.now() - Date.parse('2016-08-18 21:00:00')) / 1000;

    var days = parseInt(elapsed / 3600 / 24);
    elapsed -= (days * 3600 * 24);

    var hours = parseInt(elapsed / 3600)
    elapsed -= (hours * 3600);

    var minutes = parseInt(elapsed / 60)
    elapsed -= (minutes * 60);

    var seconds = parseInt(elapsed)

    $('#days-elapsed').text(days);
    $('#hours-elapsed').text(hours);
    $('#minutes-elapsed').text(minutes);
    $('#seconds-elapsed').text(seconds);

    setTimeout(get_time_elapsed, 1000);
}