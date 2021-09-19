datatable.Import "C:\Users\Test\Desktop\UFT Record and Playback\Data Sheets\Deposit Calculator_Profit In Advance Deposit.xlsx"
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Personal Online Banking").Click @@ script infofile_;_ZIP::ssf1.xml_;_
wait 5
Browser("Dukhan Bank_2").Page("Dukhan Bank").Link("Calculator").Click @@ script infofile_;_ZIP::ssf2.xml_;_
wait 3
Browser("Dukhan Bank_2").Page("Dukhan Bank").Image("finance").Click @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebElement("Profit in advance deposit").Click @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebElement("6 - MONTH").Click @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebElement("Amount*").Click @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebEdit("amount").Set datatable.Value("Amount",1) @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebElement("WebElement").Click @@ script infofile_;_ZIP::ssf8.xml_;_
'Browser("Dukhan Bank_2").Page("Dukhan Bank").WebButton("Ok").Click @@ script infofile_;_ZIP::ssf9.xml_;_
