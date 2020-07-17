@ECHO OFF
CHCP 65001
SETLOCAL ENABLEEXTENSIONS

WHERE /Q npm ^
        || ECHO The npm executable not found. ^
        && CALL :pause_if_double_click ^
        && EXIT /B 1

npm install --global stylus ^
        || ECHO npm install stylus failed. ^
        && CALL :pause_if_double_click ^
        && EXIT /B 2

npm update --global stylus ^
        || ECHO npm update stylus failed. ^
        && CALL :pause_if_double_click ^
        && EXIT /B 3

CALL :pause_if_double_click
EXIT /B 0

:pause_if_double_click
        ECHO %CMDCMDLINE% | FINDSTR /L %COMSPEC% 1>NUL 2>NUL ^
                && PAUSE
        EXIT /B 0
