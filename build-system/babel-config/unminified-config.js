/**
 * Copyright 2020 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

const {getReplacePlugin} = require('./replace-plugin');

/**
 * Gets the config for babel transforms run during `gulp build`.
 *
 * @return {!Object}
 */
function getUnminifiedConfig() {
  const reactJsxPlugin = [
    '@babel/plugin-transform-react-jsx',
    {
      pragma: 'Preact.createElement',
      pragmaFrag: 'Preact.Fragment',
      useSpread: true,
    },
  ];
  const presetEnv = [
    '@babel/preset-env',
    {
      bugfixes: true,
      modules: 'commonjs',
      loose: true,
      targets: {'browsers': ['Last 2 versions']},
    },
  ];
  const replacePlugin = getReplacePlugin();
  const unminifiedPlugins = [
    replacePlugin,
    './build-system/babel-plugins/babel-plugin-transform-json-configuration',
    './build-system/babel-plugins/babel-plugin-transform-fix-leading-comments',
    '@babel/plugin-transform-react-constant-elements',
    '@babel/plugin-transform-classes',
    reactJsxPlugin,
  ];
  const unminifiedPresets = [presetEnv];
  return {
    compact: false,
    plugins: unminifiedPlugins,
    presets: unminifiedPresets,
  };
}

module.exports = {
  getUnminifiedConfig,
};
