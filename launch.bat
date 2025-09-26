@echo off
cd /d "c:\Users\LiteGamer\Desktop\Royal_Library_Website"
start /b npm start
timeout /t 2 /nobreak > nul
start http://localhost:3000
echo Royal Library Website launched. Server running in background.
pause