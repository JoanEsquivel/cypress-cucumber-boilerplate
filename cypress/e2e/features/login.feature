Feature: Login page

    Feature Login page will work depending on the user credentials.

    Background:
        Given A web browser is at the CTP login page
    
    Scenario: Success Login & Verify the title/url of the HomePage
        When A user enters the username "adoshetty@repay.com", the password "Admin@123", and clicks on the login button
        Then Verify the Title of the Page as "Dashboard - ClickToPay"
        Then Verify the url of the page as "aps-clicktopay.uat.repay.net"
    
    Scenario: Incorrect Username Login
        When A user provides incorrect credentials, and clicks on the login button
            | username           | password     |
            | testName@repay.com | secret_sauce |
        Then The error message "Invalid login attempt." is displayed
    
    Scenario: Incorrect Password Login
        When A user provides incorrect credentials, and clicks on the login button
            | username                | password     |
            | adoshetty@repay.com | testPassword |
        Then The error message "Invalid login attempt." is displayed

        