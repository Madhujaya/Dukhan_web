
datatable.Import "C:\Users\Test\Desktop\UFT Record and Playback\Data Sheets\Exchange Rate_PL_TC_53.xlsx"
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Personal Online Banking").Click @@ script infofile_;_ZIP::ssf1.xml_;_
wait 5
Browser("Dukhan Bank_2").Page("Dukhan Bank").Link("Currency Converter").Click @@ script infofile_;_ZIP::ssf2.xml_;_
wait 3
Browser("Dukhan Bank_2").Page("Dukhan Bank").Link("Exchange Rate").Click @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebEdit("QAR_Field").Set datatable.Value("QAR_Field",1) @@ script infofile_;_ZIP::ssf4.xml_;_
