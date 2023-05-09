Feature: Instance Management - Orders Page
    Background: User is logged Instance
    Given A User Navigate to the login page
    When A user enters the username "adoshetty@repay.com", the password "Admin@123", and clicks on the login button
    
    Scenario: Create a new instance
    Given A user is on Dashborad Page
    Then User clicks on Menu button
    Then click on Instance Management 
    Then click on Add a new Instance
    Then Enter the name "Ashwinitest", the software "Acumatica", and click on Add button
    Then Verify the success message is displayed "The instance was created successfully."

    Scenario: Verify the Sales_Orders Details
    And click on search 
    Then enter the "KDN Acumatica - Automation" and click on enter
    And click on eye icon
    Then click on Orders
    Then click on order details link
    And Verify the Amount Due "$0.00"



   