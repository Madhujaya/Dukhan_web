
'==============Verify whether "Submit" button is enabled state after user fill all the mandatory fields==================
datatable.Import "C:\Users\Test\Desktop\UFT Record and Playback\Data Sheets\TC_PL_74.xlsx" @@ script infofile_;_ZIP::ssf27.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Personal Online Banking").Click @@ script infofile_;_ZIP::ssf28.xml_;_
wait 3
Browser("Dukhan Bank_2").Page("Dukhan Bank").Link("Calculator").Click @@ script infofile_;_ZIP::ssf29.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").Image("calculator").Click @@ script infofile_;_ZIP::ssf30.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebElement("Vehicle Finance").Click @@ script infofile_;_ZIP::ssf31.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebElement("Qatari").Click @@ script infofile_;_ZIP::ssf32.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebEdit("WebEdit").Set datatable.Value("Finance Amount_QAR_",1) @@ script infofile_;_ZIP::ssf33.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebElement("2").Click @@ script infofile_;_ZIP::ssf34.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebButton("Apply Now").Click @@ script infofile_;_ZIP::ssf35.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebEdit("WebEdit_2").Set datatable.Value("Full Name",1) @@ script infofile_;_ZIP::ssf36.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebElement("QID*").Click @@ script infofile_;_ZIP::ssf37.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebEdit("WebEdit_3").Set datatable.Value("QID",1) @@ script infofile_;_ZIP::ssf38.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebElement("Mobile Number*").Click @@ script infofile_;_ZIP::ssf39.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebEdit("WebEdit_4").Set datatable.Value("Mobile Number",1) @@ script infofile_;_ZIP::ssf40.xml_;_
Browser("Dukhan Bank_2").InsightObject("InsightObject").Click @@ hightlight id_;_5_;_script infofile_;_ZIP::ssf41.xml_;_
