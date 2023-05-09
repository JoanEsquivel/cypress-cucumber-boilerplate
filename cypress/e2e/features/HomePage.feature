Feature: Home Page

    Feature Home page Validation

    Background:
        Given A web browser is at the CTP Home page - Repay demo
    
    Scenario: Create a new instance
    When A user enters the username "adoshetty@repay.com", the password "Admin@123", and clicks on the login button
    Then User clicks on Menu button
    Then click on Instance Management 
    Then click on Add a new Instance
    Then Enter the name "Ashwinitest", the software "Acumatica", and click on Add button
    Then Verify the success message is displayed "The instance was created successfully."
    