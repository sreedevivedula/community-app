Feature: Regular Loan Repayment
    As a user of MIFOSX
    I want to manage loan applications and their repayments
    So that I can generate more business using the online platform

Scenario:
    Given I am logged into MIFOSX as a "user"
    And I create a client "Tania Biyani"
    And I create a loan application for "Tania Biyani" with the below information
    | product            | Bal Vidya |
    | principal amount   | 6000      |
    | loan term          | 15        |
    | number of payments | 30        |
    | repayment          | 15 days   |
    Then I should see the above loan added
    And the above loan should be in "pending" state

    When I approve the above loan
    Then the above loan should move to "active" state

    When I disburse the above loan on "March 1st 2014"
    And I add 30 repayments to the above loan
    Then the above loan should move to "closed" state
