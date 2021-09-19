'================Verify whether the user is able to view the converted rate of QAR in any other currency listed============ @@ script infofile_;_ZIP::ssf19.xml_;_
datatable.Import "C:\Users\Test\Desktop\UFT Record and Playback\Data Sheets\Currency Converter_TC_PL_51.xlsx"
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Personal Online Banking").Click @@ script infofile_;_ZIP::ssf31.xml_;_
wait 5
Browser("Dukhan Bank_2").Page("Dukhan Bank").Link("Currency Converter").Click @@ script infofile_;_ZIP::ssf32.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebEdit("currencyIhave").Set datatable.Value("currencyIhave",1) @@ script infofile_;_ZIP::ssf33.xml_;_
wait 10
Browser("Dukhan Bank_2").Page("Dukhan Bank").Link("AED").Click @@ script infofile_;_ZIP::ssf34.xml_;_
Browser("Dukhan Bank_2").Page("Dukhan Bank").WebElement("INR").Click @@ script infofile_;_ZIP::ssf35.xml_;_
 







