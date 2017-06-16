
require('babel-register');

const routes = require('../src/common/components/Routes');
const Sitemap = require('react-router-sitemap').default;


new Sitemap(routes)
    .build('https://example.net/')
    .save('./sitemap-builder/sitemap.xml');

process.exit();




