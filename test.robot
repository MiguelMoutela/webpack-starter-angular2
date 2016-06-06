*** Variables ***

${HOSTNAME}             127.0.0.1
${PORT}                 3000
${SERVER}               http://${HOSTNAME}:${PORT}/
${BROWSER}              firefox


*** Settings ***

Documentation   Webpack Starter Angular Acceptance Tests
Library         Process
Library         DebugLibrary
Library         Selenium2Library  timeout=10  implicit_wait=0
Suite Setup     Test Setup
Suite Teardown  Test Teardown


*** Keywords ***

Test Setup
  ${webpack-dev-server}=  Start Process  webpack-dev-server --bail --inline --port 3000 --content-base ${CURDIR}/dist   cwd=${CURDIR}  shell=true
  Set Suite Variable  ${WEBPACK-DEV-SERVER}  ${webpack-dev-server}
  Sleep  5s
  Open Browser  ${SERVER}  ${BROWSER}
  Set Window Size  1280  1024

Test Teardown
  Close Browser
  Log  ${WEBPACK-DEV-SERVER}
  Terminate Process  ${WEBPACK-DEV-SERVER}


*** Test Cases ***

Front Page
  Go To  ${SERVER}
  Wait until page contains  Hello World
  Page Should Contain  Hello World
