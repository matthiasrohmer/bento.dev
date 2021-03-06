/**
 * Copyright 2021 The AMP HTML Authors. All Rights Reserved.
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

const gulp = require('gulp');
const gulpSass = require('gulp-sass')(require('sass'));

// Flags wether we compress the output etc
const isProduction = process.env.NODE_ENV === 'production';

module.exports = async function sass(callback) {
  return gulp
    .src(['./styles/bento-dev.scss'], {sourcemaps: !isProduction})
    .pipe(gulpSass().on('error', gulpSass.logError))
    .pipe(gulp.dest('./assets/css', {sourcemaps: !isProduction}))
    .on('done', callback);
};
