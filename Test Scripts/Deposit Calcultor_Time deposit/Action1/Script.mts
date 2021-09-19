datatable.Import "C:\Users\Test\Desktop\UFT Record and Playback\Data Sheets\Deposit Calculator_Time Deposit.xlsx" @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Personal Online Banking").Click @@ script infofile_;_ZIP::ssf7.xml_;_
wait 5
Browser("Dukhan Bank_2").Page("Dukhan Bank").Link("Calculator").Click @@ script infofile_;_ZIP::ssf8.xml_;_
wait 2
Browser("Dukhan Bank_2").Page("Dukhan Bank").Image("finance").Click @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebElement("Time Deposit").Click @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebElement("3 - MONTH").Click @@ script infofile_;_ZIP::ssf11.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebElement("Amount*").Click @@ script infofile_;_ZIP::ssf12.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebEdit("amount").Set datatable.Value("Amount",1) @@ script infofile_;_ZIP::ssf13.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebElement("WebElement").Click @@ script infofile_;_ZIP::ssf14.xml_;_
'Browser("Dukhan Bank_2").Page("Dukhan Bank").WebButton("Ok").Click @@ script infofile_;_ZIP::ssf15.xml_;_

