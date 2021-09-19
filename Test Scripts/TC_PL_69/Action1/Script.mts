'==========Verify whether "Apply Now" button is enabled==========
datatable.Import "C:\Users\Test\Desktop\UFT Record and Playback\Data Sheets\Calculator_Personal finance.xlsx"
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Personal Online Banking").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").Link("Calculator").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").Image("calculator").Click @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebElement("Vehicle Finance").Click @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebElement("Non Qatari").Click @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebEdit("WebEdit").Set datatable.Value("Finance Amount_QAR_",1) @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebElement("2").Click @@ script infofile_;_ZIP::ssf7.xml_;_






