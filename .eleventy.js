const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/css');
  eleventyConfig.addPassthroughCopy("./src/assets/");

  eleventyConfig.addWatchTarget('./src/css/');

  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addFilter('randomItem', (arr) => {
    arr.sort(() => {
      return 0.5 - Math.random();
    });
    return arr.slice(0, 1);
  });

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
