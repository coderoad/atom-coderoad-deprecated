# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [0.7.0] - in progress
- update to 'react@15'
- move to 'material-ui@0.15'
- much improved setup ui & checks
  - check Node, NPM versions
  - Stepper UI
- loading tutorials
  - check for new versions
  - update tutorial button
- remove 'lodash' dependency
- attach hints to toolbar

## [0.6.0] - 2016-04-01
- fixes
- loaders now built into atom-coderoad
  `// load('file.js')`        - loads from workspace directory
  `// load('data.js', true)`  - loads from tutorial directory
- now allows for easy configuration of different language test runners

## [0.5.7] - 2016-03-17
- @action(openConsole)
- style improvements
- bug fixes for Atom 1.6+

## [0.5.6] - 2016-03-12
- fixes for Windows
- no need to pass `handleLog` to test runner

## [0.5.4] - 2016-03-09
- fix bug that prevented scroll in Atom 1.6+
- `< >` button to open console
- match colors to theme

## [0.5.3] - 2016-03-07
- fix tutorial progress issues
- use `::>` to set cursor position

## [0.5.2] - 2016-03-06
- smoother setup process
- style, ui improvements

## [0.5.1] - 2016-03-04
- ui changes
- basic animations
- bug fixes
- @onPageComplete message

## [0.4.18] - 2016-02-26
- hints
- improved alerts
- file paths that map to older versions of NPM
- modular/replaceable test runner
