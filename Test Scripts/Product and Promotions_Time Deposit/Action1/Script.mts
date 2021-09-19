

Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Personal Online Banking").Click @@ hightlight id_;_1051002_;_script infofile_;_ZIP::ssf32.xml_;_
wait 5
Browser("Dukhan Bank_2").Page("Dukhan Bank").Link("Products & Promotions").Click @@ script infofile_;_ZIP::ssf12.xml_;_
wait(5)
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebElement("Dukhan Bank Products").Click @@ script infofile_;_ZIP::ssf13.xml_;_
wait(5)
setting.webpackage("ReplayType") = 2
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebElement("Time Deposits").Click 10,10 @@ script infofile_;_ZIP::ssf14.xml_;_
setting.webpackage("ReplayType") = 1 @@ hightlight id_;_1051002_;_script infofile_;_ZIP::ssf24.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebElement("Profit in advance deposit").Click @@ script infofile_;_ZIP::ssf15.xml_;_







