datatable.Import "C:\Users\Test\Desktop\UFT Record and Playback\Data Sheets\Calculator_Home finance.xlsx"
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Personal Online Banking").Click
Browser("Dukhan Bank_2").Page("Dukhan Bank").Link("Calculator").Click @@ script infofile_;_ZIP::ssf2.xml_;_
wait 5
Browser("Dukhan Bank_2").Page("Dukhan Bank").Image("calculator").Click @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebElement("Home Finance").Click @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebElement("Non Qatari").Click @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebEdit("WebEdit").Set datatable.Value("Finance Amount_QAR_",1) @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebElement("2").Click @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebButton("Apply Now").Click @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebElement("Full Name*").Click @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebEdit("WebEdit_2").Set datatable.Value("Full Name",1) @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebElement("QID*").Click @@ script infofile_;_ZIP::ssf11.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebEdit("WebEdit_3").Set datatable.Value("QID",1) @@ script infofile_;_ZIP::ssf12.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebEdit("WebEdit_4").Set datatable.Value("Mobile Number",1) @@ script infofile_;_ZIP::ssf13.xml_;_
Browser("Dukhan Bank_2").InsightObject("InsightObject").Click @@ hightlight id_;_5_;_script infofile_;_ZIP::ssf14.xml_;_
wait 5
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebButton("Submit").Click @@ script infofile_;_ZIP::ssf15.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebButton("Ok").Click @@ script infofile_;_ZIP::ssf16.xml_;_
