//var Liker = function() {
//    $('#like').on('click', function(e) {
//        e.preventDefault();
//
//        // increment number of likes
//        $(this).html(parseInt($(this).html()) + 1);
//
//        $('#like_count').append('<li>' + new Date().toString() + '</li>');
//    });
//};

var Liker = function() {
//    debugger;
    this.like = 1;

    this.bind();
};

Liker.prototype = {
    updateLike: function() {
        this.like++;
        this.publish('liked');
    },

    render: function() {
        this.updateButton();
        this.logEntry();
    },

    updateButton: function () {
        $('#like').html(this.like);
    },

    logEntry: function () {
        $('#like_count').append('<li>' + new Date().toString() + '</li>');
    },

    bind: function() {
        var that = this;
        $('#like').on('click', function(e) {
            e.preventDefault();
            that.updateLike();
        });

        this.subscribe('liked', this.render);
    }
};

Liker.mixin(PubSub);
