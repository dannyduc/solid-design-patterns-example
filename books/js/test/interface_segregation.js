describe('Interface Segregation', function() {
    describe('Teacher', function() {
        Teacher.mixin(UserLoginAction);
        Teacher.mixin(UserPasswordResetAction);

        it('can login', function() {
            var t = new Teacher('Jose Mota');
            expect(t.login).toBeDefined();
        });

        it('can request a password reset', function() {
            var t = new Teacher('Jose Mota');
            expect(t.resetPassword).toBeDefined();
        });
    });

    describe('Student', function() {
        Student.mixin(UserLoginAction);

        it('can login', function() {
            var s = new Student('John Doe');
            expect(s.login).toBeDefined();
        });

        it('cannot request a password reset', function() {
            var s = new Student('John Doe');
            expect(s.resetPassword).toBeUndefined();
        });
    });
});