$pwd = Get-Location
Set-Location "C:\Program Files (x86)\Google\Chrome\Application"
./chrome.exe --disable-web-security --user-data-dir="${pwd}/allure-reports"
Set-Location $pwd
