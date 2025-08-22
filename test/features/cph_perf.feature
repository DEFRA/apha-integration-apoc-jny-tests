@perf
Feature: (AIL-245) HOLDINGS endpoint tests

  Background:
    Given the auth token

  # Scenario Outline: 01 Verify that, Unauthorised response (401) should be returned if token is empty
  #   Given the user submits a CPH request with invalid token "<cphNumber>"
  #   When the request is processed by the system
  #   Then endpoint return unauthorised response code "<statuscode>"

  #   Examples:
  #     | cphNumber   | statuscode |
  #     | 02/055/0224 |        401 |

  # Scenario Outline: 02 Verify that, Forbidden response (403) should be returned if token is modified or tampered
  #   Given the user submits a CPH request with valid token but tampered "<cphNumber>"
  #   When the request is processed by the system
  #   Then endpoint return unauthorised response code "<statuscode>"

  #   Examples:
  #     | cphNumber   | statuscode |
  #     | 02/055/0224 |        403 |

  Scenario Outline: 03 Verify that a valid CPH number returns a successful response
    Given the user submits a CPH request with CPH number "<cphNumber>"
    When the request is processed by the system
    Then the API should return the details for the specified CPH number "<status>"

    Examples:
      | cphNumber   | status    |
      | 79/465/0625 | PERMANENT |
      | 10/101/0026 | PERMANENT |
      | 37/065/0124 | PERMANENT |
      | 10/191/0067 | PERMANENT |
      | 14/004/0068 | PERMANENT |
      | 06/083/0012 | PERMANENT |
      # | 06/026/0158 | PERMANENT |
      # | 10/284/0109 | PERMANENT |
      # | 35/169/0248 | PERMANENT |
      | 10/331/0007 | PERMANENT |
      | 07/122/0009 | PERMANENT |
      | 10/196/0005 | PERMANENT |
      | 10/245/0259 | PERMANENT |
      | 10/196/0010 | PERMANENT |
      | 35/251/0018 | PERMANENT |
      | 24/428/0078 | PERMANENT |
      | 10/232/0089 | PERMANENT |
      | 10/078/0042 | PERMANENT |
      | 22/028/0008 | PERMANENT |
      # | 17/488/7105 | PERMANENT |
      | 10/152/0006 | PERMANENT |
      | 10/213/0054 | PERMANENT |
      # | 07/117/0237 | PERMANENT |
      | 06/247/0007 | PERMANENT |
      | 34/651/0020 | PERMANENT |
      # | 06/026/0158 | PERMANENT |
      | 33/227/0010 | PERMANENT |
      | 10/234/0016 | PERMANENT |
      | 14/351/0106 | PERMANENT |
      | 10/079/0004 | PERMANENT |
      # | 07/117/0237 | PERMANENT |
      | 14/254/0024 | PERMANENT |
      # | 09/158/0140 | PERMANENT |
      # | 09/158/0140 | PERMANENT |
      | 41/158/0003 | PERMANENT |
      | 37/033/0002 | PERMANENT |
      # | 07/186/0552 | PERMANENT |
      | 45/176/0020 | PERMANENT |
      | 07/221/0044 | PERMANENT |
      | 36/396/0016 | PERMANENT |
      | 35/174/0175 | PERMANENT |
      | 37/033/0002 | PERMANENT |
      | 10/334/0025 | PERMANENT |
      | 10/325/0072 | PERMANENT |
      # | 37/185/0048 | PERMANENT |
      | 32/216/0009 | PERMANENT |
      | 14/004/0052 | PERMANENT |
      | 10/003/0011 | PERMANENT |
      | 17/210/0017 | PERMANENT |
      # | 10/311/0390 | PERMANENT |
      | 10/009/0005 | PERMANENT |
      | 35/022/0001 | PERMANENT |
      | 06/259/0015 | PERMANENT |
      | 10/155/0033 | PERMANENT |
      | 10/067/0022 | PERMANENT |
      | 37/020/0043 | PERMANENT |
      | 35/170/0005 | PERMANENT |
      | 07/027/0680 | PERMANENT |
      | 07/204/0006 | PERMANENT |
      | 11/042/0004 | PERMANENT |
      | 37/020/0043 | PERMANENT |
      | 17/435/0170 | PERMANENT |
      | 45/176/0020 | PERMANENT |
      | 14/267/0014 | PERMANENT |
      | 34/651/0020 | PERMANENT |
      | 41/098/0007 | PERMANENT |
      | 07/070/0029 | PERMANENT |
      | 14/001/0230 | PERMANENT |
      | 10/006/0056 | PERMANENT |
      | 11/161/0016 | PERMANENT |
      | 07/137/0038 | PERMANENT |
      | 06/280/0004 | PERMANENT |
      | 10/061/0156 | PERMANENT |
      | 37/064/0449 | PERMANENT |
      # | 17/488/7105 | PERMANENT |
      | 35/272/0273 | PERMANENT |
      | 37/191/0054 | PERMANENT |
      | 10/071/0148 | PERMANENT |
      | 15/272/0068 | PERMANENT |
      | 02/059/0003 | PERMANENT |
      | 36/017/0003 | PERMANENT |
      | 10/349/0114 | PERMANENT |
      | 45/155/0043 | PERMANENT |
      | 36/332/0104 | PERMANENT |
      | 36/242/0129 | PERMANENT |
      | 10/006/0196 | PERMANENT |
      | 10/181/0173 | PERMANENT |
      | 35/174/0175 | PERMANENT |
      | 10/216/0001 | PERMANENT |
      | 06/361/0040 | PERMANENT |
      | 15/306/0016 | PERMANENT |
      | 10/153/0029 | PERMANENT |
      | 48/131/0036 | PERMANENT |
      | 10/396/0088 | PERMANENT |
      | 37/144/0004 | PERMANENT |
      | 34/489/0074 | PERMANENT |
      | 07/223/0011 | PERMANENT |
      | 37/079/0154 | PERMANENT |
      | 35/032/0084 | PERMANENT |
      | 43/028/0010 | PERMANENT |
      | 17/322/0026 | PERMANENT |
      | 34/630/0017 | PERMANENT |
      | 36/231/0003 | PERMANENT |
      | 37/240/0007 | PERMANENT |
      | 10/344/0012 | PERMANENT |
      | 10/146/0052 | PERMANENT |
      | 36/285/0079 | PERMANENT |
      # | 07/203/0347 | PERMANENT |
      | 10/152/0006 | PERMANENT |
      | 17/190/0018 | PERMANENT |
      | 10/006/0056 | PERMANENT |
      | 15/025/0136 | PERMANENT |
      | 06/036/0006 | PERMANENT |
      | 07/029/0025 | PERMANENT |
      | 17/133/0036 | PERMANENT |
      | 34/420/0098 | PERMANENT |
      | 10/176/0026 | PERMANENT |
      # | 35/152/0258 | PERMANENT |
      | 36/098/0013 | PERMANENT |
      | 36/402/0132 | PERMANENT |
      | 34/715/0001 | PERMANENT |
      | 37/223/0082 | PERMANENT |
      | 36/231/0003 | PERMANENT |
      | 15/025/0136 | PERMANENT |
      | 37/241/0015 | PERMANENT |
      | 06/367/0013 | PERMANENT |
      | 10/391/0078 | PERMANENT |
      | 15/329/0030 | PERMANENT |
      | 06/367/0013 | PERMANENT |
      | 09/281/0006 | PERMANENT |
      | 14/257/0010 | PERMANENT |
      | 36/097/0009 | PERMANENT |
      | 07/016/0234 | PERMANENT |
      | 37/163/0019 | PERMANENT |
      | 34/693/0025 | PERMANENT |
      | 10/234/0016 | PERMANENT |
      | 10/047/0026 | PERMANENT |
      | 07/016/0234 | PERMANENT |
      | 07/146/0142 | PERMANENT |
      | 36/185/0017 | PERMANENT |
      | 07/146/0142 | PERMANENT |
      | 34/715/0027 | PERMANENT |
      | 36/285/0079 | PERMANENT |
      | 45/052/0001 | PERMANENT |
      | 15/306/0016 | PERMANENT |
      | 03/157/0225 | PERMANENT |
      | 02/081/0117 | PERMANENT |
      | 06/149/0013 | PERMANENT |
      | 07/014/0012 | PERMANENT |
      | 07/186/0780 | PERMANENT |
      | 36/443/0027 | PERMANENT |
      | 41/064/0098 | PERMANENT |
      | 36/443/0027 | PERMANENT |
      | 34/417/0079 | PERMANENT |
      | 36/158/0006 | PERMANENT |
      | 36/158/0006 | PERMANENT |
      | 07/117/0055 | PERMANENT |
      | 07/186/0780 | PERMANENT |
      | 17/429/0273 | PERMANENT |
      | 35/032/0084 | PERMANENT |
      | 40/035/0090 | PERMANENT |
      | 10/391/0078 | PERMANENT |
      | 10/391/0078 | PERMANENT |
      | 36/113/0032 | PERMANENT |
      | 10/408/0022 | PERMANENT |
      | 17/190/0018 | PERMANENT |
      | 09/113/0024 | PERMANENT |
      | 36/017/0125 | PERMANENT |
      | 36/017/0125 | PERMANENT |
      | 06/036/0006 | PERMANENT |
      | 37/206/0084 | PERMANENT |
      | 10/003/0011 | PERMANENT |
      | 37/206/0084 | PERMANENT |
      | 37/018/0012 | PERMANENT |
      | 15/271/0227 | PERMANENT |
      | 07/126/0008 | PERMANENT |
      | 37/270/0019 | PERMANENT |
      | 35/169/0012 | PERMANENT |
      | 35/169/0012 | PERMANENT |
      | 06/287/0013 | PERMANENT |
      | 35/209/0010 | PERMANENT |
      | 10/155/0033 | PERMANENT |
      | 37/067/0050 | PERMANENT |
      | 33/227/0010 | PERMANENT |
      # | 07/206/0232 | PERMANENT |
      | 10/325/0068 | PERMANENT |
      | 07/126/0008 | PERMANENT |
      | 10/061/0005 | PERMANENT |
      | 43/147/0011 | PERMANENT |
      # | 37/185/0048 | PERMANENT |
      | 45/012/7008 | PERMANENT |
      | 06/313/0006 | PERMANENT |
      | 10/232/0089 | PERMANENT |
      | 10/402/0035 | PERMANENT |
      | 10/331/0072 | PERMANENT |
      | 37/020/0043 | PERMANENT |
      | 10/152/0006 | PERMANENT |
      | 45/176/0020 | PERMANENT |
      | 09/113/0024 | PERMANENT |
      | 35/269/0310 | PERMANENT |
      | 42/038/0012 | PERMANENT |
      | 06/363/0007 | PERMANENT |
      | 10/474/0018 | PERMANENT |
      # | 35/152/0258 | PERMANENT |
      | 17/091/0002 | PERMANENT |
      | 10/181/0173 | PERMANENT |
      | 10/335/0045 | PERMANENT |
      | 06/266/0016 | PERMANENT |
      | 06/259/0015 | PERMANENT |
      | 45/012/7008 | PERMANENT |
      # | 43/066/0080 | PERMANENT |
      | 10/131/0135 | PERMANENT |
      # | 33/090/7002 | PERMANENT |
      | 41/158/0003 | PERMANENT |
      | 10/335/0045 | PERMANENT |
      | 07/050/0009 | PERMANENT |
      # | 22/176/0136 | PERMANENT |
      | 10/222/0008 | PERMANENT |
      # | 37/060/0095 | PERMANENT |
      # | 45/221/0277 | PERMANENT |
      # | 35/221/0277 | PERMANENT |
      # | 10/311/0259 | PERMANENT |
      # | 07/020/0132 | PERMANENT |
      | 34/654/0012 | PERMANENT |
      # | 10/284/0109 | PERMANENT |
      | 10/155/0131 | PERMANENT |
      # | 10/422/0046 | PERMANENT |
      | 18/156/0092 | PERMANENT |
      | 18/060/0007 | PERMANENT |
      | 06/313/0006 | PERMANENT |
      # | 10/455/0394 | PERMANENT |
      # | 37/038/0028 | PERMANENT |
      | 14/375/0011 | PERMANENT |
      | 35/170/0074 | PERMANENT |
      | 36/375/0093 | PERMANENT |
      | 10/196/0005 | PERMANENT |

  # Scenario Outline: 04 Verify that, Unsuccessful response (404) should be returned for a non-existent CPH number
  #   Given the user submits a CPH request with CPH number "<cphNumber>"
  #   When the request is processed by the system
  #   Then endpoint return unsuccessful response code "<statuscode>"

  #   Examples:
  #     | cphNumber   | statuscode |
  #     | 02/055/0224 |        404 |

  # Scenario Outline: 05 Verify that the appropriate error message is returned when a user supplies an invalid CPH number
  #   Given the user submits a CPH request with CPH number "<cphNumber>"
  #   When the request is processed by the system
  #   Then endpoint must return unsuccessful error response "<message>"

  #   Examples:
  #     | cphNumber     | message                                                                                                                                                                                                                                                                                                                                                            |
  #     | 02ww/055/2422 | "countyId" length must be 2 characters long. "countyId" with value "02ww" fails to match the required pattern: /^\\d+$/                                                                                                                                                                                                                                            |
  #     |   2w/055/2422 | "countyId" with value "2w" fails to match the required pattern: /^\\d+$/                                                                                                                                                                                                                                                                                           |
  #     | 02/055ss/0224 | "parishId" length must be 3 characters long. "parishId" with value "055ss" fails to match the required pattern: /^\\d+$/                                                                                                                                                                                                                                           |
  #     |   02/05s/0224 | "parishId" with value "05s" fails to match the required pattern: /^\\d+$/                                                                                                                                                                                                                                                                                          |
  #     |   02/055/022w | "holdingId" with value "022w" fails to match the required pattern: /^\\d+$/                                                                                                                                                                                                                                                                                        |
  #     |  02/055/022ws | "holdingId" length must be 4 characters long. "holdingId" with value "022ws" fails to match the required pattern: /^\\d+$/                                                                                                                                                                                                                                         |
  #     |   2w/05w/022w | "countyId" with value "2w" fails to match the required pattern: /^\\d+$/. "parishId" with value "05w" fails to match the required pattern: /^\\d+$/. "holdingId" with value "022w" fails to match the required pattern: /^\\d+$/                                                                                                                                   |
  #     | w/w/w         | "countyId" length must be 2 characters long. "countyId" with value "w" fails to match the required pattern: /^\\d+$/. "parishId" length must be 3 characters long. "parishId" with value "w" fails to match the required pattern: /^\\d+$/. "holdingId" length must be 4 characters long. "holdingId" with value "w" fails to match the required pattern: /^\\d+$/ |
