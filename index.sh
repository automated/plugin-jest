#!/bin/sh

# jest="jest \
#   --testRegex=__tests__/jest/.*.js$ \
# ";
#
# echo $pwd$binPath$jest;

# jest

pwd=`pwd`

jestBin='/node_modules/@automated/plugin-jest/node_modules/.bin/jest'

jestArgs=' --testRegex=__automated__/jest/.*.js$'

$pwd$jestBin$jestArgs

# /node_modules/@automated/plugin-jest/node_modules/.bin/jest \
# --testRegex=__tests__/jest/.*.js$
