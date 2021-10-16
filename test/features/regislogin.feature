Feature: My Store registraction feature

    Scenario Outline: My Store test
      Given i am on page
        Then  user click on sign button
        Given user enter username <emailid>
        
          Then user click on create an account
          
        # When title name is your loga
        # Then user click on sign button
        # Then user enter "<Username>"
        # Then user click on login button
        # Then user naviagte to homepage
        # Then close browser

        Examples:
            | emailid          | 
            | cs.niet@gmail.com| 
