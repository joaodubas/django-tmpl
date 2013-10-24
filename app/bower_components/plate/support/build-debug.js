var browserify = require('browserify')
  , mold = require('mold-source-map')
  , path = require('path')
  , fs = require('fs')

browserify()
  .require(require.resolve('../browser.js'), { entry: true })
  .bundle({ debug: true })
  .pipe(mold.transformSourcesRelativeTo(path.join(__dirname, '..', '..')))
  .pipe(fs.createWriteStream('dist/plate.debug.js'))