#!/bin/sh

pwd=`pwd`
jest='/node_modules/@automated/plugin-jest'
bin='/node_modules/.bin/jest'
setupTestFrameworkScriptFile='/lib/setup/setup-test-framework-script-file.js'

# maintain arg quotes - https://stackoverflow.com/a/24179878/537998
function requote() {
  local res=""
  for x in "${@}" ; do
      # try to figure out if quoting was required for the $x:
      grep -q "[[:space:]]" <<< "$x" && res="${res} '${x}'" || res="${res} ${x}"
  done
  # remove first space and print:
  sed -e 's/^ //' <<< "${res}"
}
cliArgs=$(requote "${@}")

jestArgs="
--testRegex=__automated__/jest/.*.js$
--setupTestFrameworkScriptFile=$pwd$jest$setupTestFrameworkScriptFile
"

$pwd$jest$bin$jestArgs$cliArgs
