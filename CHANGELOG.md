# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [0.12.2] - 2016-08-25
- drop "core-coderoad" dependency
- remove additional dependencies for a smaller footprint

## [0.12.1] - 2016-08-18
- remove devDependencies, as Atom installs them and slows the install time significantly
- create folders if they do not already exist when writing files

# [0.12.0] - 2016-08-16
- add 'write' & 'writeFileFrom' actions

# [0.11.0] - 2016-08-09
- break runner calls into two steps:
  - load
  - run
- require Atom 1.8+, Node 4+

# [0.10.10] - 2016-07-30
- performance increase
- fix test run on page load

## [0.10.9] - 2016-07-24
- improved error handling

## [0.10.2] - 2016-06-28
- rely on core-coderoad@0.5
- require newer version of test runners
- update to material-ui@0.15.1

## [0.10.1] - 2016-06-18
- style fix for Atom 1.9
- rely on core-coderoad@0.4
    - drops node-gyp dependency from syntax-highlighter

## [0.10.0] - 2016-06-12
- throttle saves at 800ms
- extract common modules into [core-coderoad](https://github.com/coderoad/core-coderoad) to share with the new [tutorial builder](https://github.com/coderoad/builder-coderoad)

## [0.9.0] - 2016-05-02
- remove chapters, now only pages
- performance fixes

## [0.8.0] - 2016-04-27
- save tutorial progress to localStorage
- check for tutorial package updates
- style fixes

## [0.7.0] - 2016-04-23

#### Features
- much improved setup ui & checks
  - check Node, NPM versions
  - Stepper UI
  - loading tutorials
- attach hints to toolbar
- style fixes for Atom v1.8

#### Code Base
- follow AirBnB Javascript & React style guides
- update to 'react@15'
- move to 'material-ui@0.15'
- remove 'lodash' dependency
- remove all globals in favor of reducers

#### Small Breaking Changes
- 'project' renamed 'info'

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
