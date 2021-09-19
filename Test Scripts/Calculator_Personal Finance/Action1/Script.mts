datatable.Import "C:\Users\Test\Desktop\UFT Record and Playback\Data Sheets\Calculator_Personal finance.xlsx"

Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Personal Online Banking").Click @@ script infofile_;_ZIP::ssf17.xml_;_
wait 5
Browser("Dukhan Bank_2").Page("Dukhan Bank").Link("Calculator").Click @@ script infofile_;_ZIP::ssf18.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").Image("calculator").Click @@ script infofile_;_ZIP::ssf19.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebElement("▼Finance Type*Vehicle").Click @@ script infofile_;_ZIP::ssf20.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebElement("Personal Finance").Click @@ script infofile_;_ZIP::ssf21.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebElement("Non Qatari").Click @@ script infofile_;_ZIP::ssf22.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebEdit("WebEdit").Set datatable.Value("Finance Amount_QAR_",1) @@ script infofile_;_ZIP::ssf23.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebElement("2").Click @@ script infofile_;_ZIP::ssf24.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebButton("Apply Now").Click @@ script infofile_;_ZIP::ssf25.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebElement("Full Name*").Click @@ script infofile_;_ZIP::ssf26.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebEdit("WebEdit_2").Set datatable.Value("Full Name",1) @@ script infofile_;_ZIP::ssf27.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebElement("QID*").Click @@ script infofile_;_ZIP::ssf28.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebEdit("WebEdit_3").Set datatable.Value("QID",1) @@ script infofile_;_ZIP::ssf29.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebEdit("WebEdit_4").Set datatable.Value("Mobile Number",1) @@ script infofile_;_ZIP::ssf30.xml_;_
Browser("Dukhan Bank_2").InsightObject("InsightObject").Click @@ hightlight id_;_5_;_script infofile_;_ZIP::ssf31.xml_;_
wait 4
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebButton("Submit").Click @@ script infofile_;_ZIP::ssf32.xml_;_
 @@ script infofile_;_ZIP::ssf15.xml_;_
