/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    loadJSModule: true,
    loadCSS: true,
  },
  extends: '@adobe/helix',
  rules: {
    // allow reassigning param
    'no-param-reassign': [2, { props: false }],
    'linebreak-style': ['error', 'unix'],
    // 'import/extensions': ['error', {
    //   js: 'always',
    // }],
    'prefer-destructuring': ['error', {
      array: false,
      object: true,
    }, {
      enforceForRenamedProperties: false,
    }],
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    requireConfigFile: false,
  },
};
