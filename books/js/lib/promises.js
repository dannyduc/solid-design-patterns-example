function getJSON(url) {
    var promise = new RSVP.Promise(function(respond, failure) {
        $.ajax({
//            dataType: "json",
            url: url,
            success: function(data) {
                console.log('success: ' + data);
                respond(data);
            },
            error: function(xhr, status, error) {
//                debugger;
                console.log('error: ' + [xhr, status, error]);
                failure([xhr, status, error])
            }
        })
    });
    return promise;
}