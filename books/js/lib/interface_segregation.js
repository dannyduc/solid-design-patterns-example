var Teacher = function() {
    return this;
};

var Student = function() {
    return this;
};

var UserLoginAction = function() {};

UserLoginAction.prototype = {
    login: function (password) {},
};

var UserPasswordResetAction = function () {};

UserPasswordResetAction.prototype = {
    resetPassword: function() {}
};


