Feature: Login page

    Feature Login page will work depending on the user credentials.

    Background:
        Given A user opens a saucelabs website
    Scenario: Success Login
        When A user enters the username "standard_user"
        And A user enters the password "secret_sauce"
        And A user clicks on the login button
        Then the url will contains the inventory subdirectory
    Scenario: Blocked Login
        When A user enters the username "locked_out_user"
        And A user enters the password "secret_sauce"
        And A user clicks on the login button
        Then The error message "Epic sadface: Sorry, this user has been locked out." is displayed
    Scenario: Incorrect Username Login
        When A user provides incorrect credentials
            | username | password     |
            | testName | secret_sauce |
        And A user clicks on the login button
        Then The error message "Epic sadface: Username and password do not match any user in this service" is displayed
    Scenario: Incorrect Password Login
        When A user provides incorrect credentials
            | username      | password     |
            | standard_user | testPassword |
        And A user clicks on the login button
        Then The error message "Epic sadface: Username and password do not match any user in this service" is displayed