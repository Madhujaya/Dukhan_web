'Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Personal Online Banking").Click @@ script infofile_;_ZIP::ssf7.xml_;_
'wait 5
Browser("Dukhan Bank_2").Page("Dukhan Bank").Link("Products & Promotions").Click @@ script infofile_;_ZIP::ssf8.xml_;_
wait 3
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebElement("Dukhan Bank Products").Click @@ script infofile_;_ZIP::ssf9.xml_;_
wait(5)
setting.webpackage("ReplayType") = 2
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebElement("Financing").Click @@ script infofile_;_ZIP::ssf10.xml_;_
setting.webpackage("ReplayType")=1
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebElement("Car Finance").Click 10,10 @@ script infofile_;_ZIP::ssf11.xml_;_
wait 4

Browser("Dukhan Bank_2").Page("Dukhan Bank").Link("Products & Promotions").WebElement("Home Finance").Click







