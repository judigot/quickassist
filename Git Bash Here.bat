@echo off
set gitdir=C:\judigot\Desktop\Programming\Programs\PortableGit
set path=%gitdir%\cmd;%path%
set HOME=%cd%

start "" "%gitdir%\bin\sh.exe" --login