function cov_vkhmrc8sf() {
  var path = "/Users/claudevernetmichel/Documents/mvp-frontend/pages/api/.ory/[...paths].ts";
  var hash = "2d0b04752d56c278655a487b31c7e265dd39bd52";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/claudevernetmichel/Documents/mvp-frontend/pages/api/.ory/[...paths].ts",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "2d0b04752d56c278655a487b31c7e265dd39bd52"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_vkhmrc8sf = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_vkhmrc8sf();
// @ory/integrations offers a package for integrating with NextJS.
import { config, createApiHandler } from '@ory/integrations/next-edge'; // We need to export the config.

export { config }; // And create the Ory Cloud API "bridge".

export default createApiHandler({
  fallbackToPlayground: true,
  // Because vercel.app is a public suffix and setting cookies for
  // vercel.app is not possible.
  dontUseTldForCookieDomain: true
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlsuLi5wYXRoc10udHMiXSwibmFtZXMiOlsiY29uZmlnIiwiY3JlYXRlQXBpSGFuZGxlciIsImZhbGxiYWNrVG9QbGF5Z3JvdW5kIiwiZG9udFVzZVRsZEZvckNvb2tpZURvbWFpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7OztBQWZaO0FBQ0EsU0FBU0EsTUFBVCxFQUFpQkMsZ0JBQWpCLFFBQXlDLDZCQUF6QyxDLENBRUE7O0FBQ0EsU0FBU0QsTUFBVCxHLENBRUE7O0FBQ0EsZUFBZUMsZ0JBQWdCLENBQUM7QUFDOUJDLEVBQUFBLG9CQUFvQixFQUFFLElBRFE7QUFFOUI7QUFDQTtBQUNBQyxFQUFBQSx5QkFBeUIsRUFBRTtBQUpHLENBQUQsQ0FBL0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAb3J5L2ludGVncmF0aW9ucyBvZmZlcnMgYSBwYWNrYWdlIGZvciBpbnRlZ3JhdGluZyB3aXRoIE5leHRKUy5cbmltcG9ydCB7IGNvbmZpZywgY3JlYXRlQXBpSGFuZGxlciB9IGZyb20gJ0BvcnkvaW50ZWdyYXRpb25zL25leHQtZWRnZSdcblxuLy8gV2UgbmVlZCB0byBleHBvcnQgdGhlIGNvbmZpZy5cbmV4cG9ydCB7IGNvbmZpZyB9XG5cbi8vIEFuZCBjcmVhdGUgdGhlIE9yeSBDbG91ZCBBUEkgXCJicmlkZ2VcIi5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFwaUhhbmRsZXIoe1xuICBmYWxsYmFja1RvUGxheWdyb3VuZDogdHJ1ZSxcbiAgLy8gQmVjYXVzZSB2ZXJjZWwuYXBwIGlzIGEgcHVibGljIHN1ZmZpeCBhbmQgc2V0dGluZyBjb29raWVzIGZvclxuICAvLyB2ZXJjZWwuYXBwIGlzIG5vdCBwb3NzaWJsZS5cbiAgZG9udFVzZVRsZEZvckNvb2tpZURvbWFpbjogdHJ1ZVxufSlcbiJdfQ==
