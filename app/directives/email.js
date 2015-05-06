app.directive('email', function()
{
    var validate = function(email)
    {
        if (email && email.length > 0) {
            var match = email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/);

            return !!match;
        }

        return true;
    };

    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, controller)
        {
            var emailValidator = function(value)
            {
                if (!validate(value)) {
                    controller.$setValidity('email', false);

                    return value;
                }

                controller.$setValidity('email', true);
                return value;
            };

            controller.$parsers.push(emailValidator);
            controller.$formatters.push(emailValidator);
        }
    };
});