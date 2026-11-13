@echo off
cd /d D:\tt.io\TTclient
set commit=%1
git add .
git commit -m %commit%
git push
