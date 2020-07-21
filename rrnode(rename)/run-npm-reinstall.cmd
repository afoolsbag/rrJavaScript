@ECHO OFF
CHCP 65001
SETLOCAL ENABLEEXTENSIONS
SET script_directory=%~dp0

WHERE /Q npm ^
        || ECHO The npm executable not found. ^
        && CALL :pause_if_double_click ^
        && EXIT /B 1

CD "%script_directory%" ^
        || ECHO Change directory to project directory failed. ^
        && CALL :pause_if_double_click ^
        && EXIT /B 2

DEL /Q package-lock.json 1>NUL 2>NUL ^
        || ECHO Delete package-lock.json failed. ^
        && CALL :pause_if_double_click ^
        && EXIT /B 3

npm install ^
        || ECHO Run npm install failed. ^
        && CALL :pause_if_double_click ^
        && EXIT /B 4

npm prune ^
        || ECHO Run npm prune failed. ^
        && CALL :pause_if_double_click ^
        && EXIT /B 5

CALL :pause_if_double_click
EXIT /B 0

:pause_if_double_click
        ECHO %CMDCMDLINE% | FINDSTR /L %COMSPEC% 1>NUL 2>NUL ^
                && PAUSE
        EXIT /B 0
