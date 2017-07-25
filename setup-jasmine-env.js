/* eslint no-undef: 0, import/no-extraneous-dependencies:0, import/newline-after-import: 0, prefer-template: 0, no-path-concat: 0*/

// Snippet from https://github.com/facebook/jest/issues/104#issuecomment-252786382
// This makes Jest generate JUnit XML test results, which can be included in Jenkins

const reporters = require('jasmine-reporters');
const reporter = new reporters.JUnitXmlReporter({

  // Jest runs many instances of Jasmine in parallel. Force distinct file output
  // per test to avoid collisions.
    consolidateAll: false,
    filePrefix: 'jest-junit-result-',
    savePath: __dirname + '/junit-results/'
});
jasmine.getEnv().addReporter(reporter);
