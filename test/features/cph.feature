@wip
Feature: cph
  
  Scenario Outline: 01 Successfully match a valid CPH number
    Given the user submits a CPH request with CPH number "<cphNumber>"
    When the request is processed by the system
    Then the API should return the details for the specified CPH number "<status>"

    Examples:
      | cphNumber   | status    |
      | 12/345/6789 | PERMANENT |
      | 02/057/0003 | PERMANENT |
      | 02/057/0030 | PERMANENT |
      | 02/068/0010 | PERMANENT |
      | 02/081/0034 | PERMANENT |
      | 02/082/0093 | PERMANENT |
      | 02/083/0024 | PERMANENT |
 
  Scenario Outline: 02 CPH number match unsuccessful
    Given the user submits a CPH request with CPH number "<cphNumber>"
    When the request is processed by the system
    Then endpoint return unsuccessful response code "<statuscode>"

    Examples:
      | cphNumber   | statuscode |
      | 02/055/0224 |        404 |


  Scenario Outline: 03 Verify the error message, when user supplier invalid CPH number
    Given the user submits a CPH request with CPH number "<cphNumber>"
    When the request is processed by the system
    Then endpoint must return unsuccessful response "<message>"

    Examples:
      | cphNumber      | message                                                                                                                                                                                                                              |
      |  02ww/055/0224 | "countyId" with value "02ww" fails to match the required pattern: /^\\d+$/                                                                                                                                                           |
      |  02/055ss/0224 | "parishId" with value "055ss" fails to match the required pattern: /^\\d+$/                                                                                                                                                          |
      |  02/055/0224ww | "holdingsId" with value "0224ww" fails to match the required pattern: /^\\d+$/                                                                                                                                                       |
      | 02w/055w/0224w | "countyId" with value "02w" fails to match the required pattern: /^\\d+$/. "parishId" with value "055w" fails to match the required pattern: /^\\d+$/. "holdingsId" with value "0224w" fails to match the required pattern: /^\\d+$/ |
