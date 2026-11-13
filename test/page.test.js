// Checks your index.html for the parts every web page needs.
// Run it with: npm test (run npm install once first). You don't need to change this file.
const { test } = require('node:test');
const { readdirSync, readFileSync } = require('node:fs');
const path = require('node:path');
const { JSDOM } = require('jsdom');
const { HtmlValidate } = require('html-validate');

// The exact name matters: a web server treats Index.html and index.html as two different files.
const folder = path.join(__dirname, '..');
const files = readdirSync(folder);
const found = files.includes('index.html');
const lookalike = files.find((name) => name !== 'index.html' && name.toLowerCase().replace(/\s/g, '').startsWith('index.htm'));
const html = found ? readFileSync(path.join(folder, 'index.html'), 'utf8') : '';
const page = new JSDOM(html).window.document;
const texts = (selector) => [...page.querySelectorAll(selector)].map((element) => element.textContent.trim());

// Fails a check with a plain message, so the output shows what to fix and no stack trace to scroll past.
function check(passed, message) {
  if (!passed) {
    const problem = new Error(message);
    problem.stack = `Not yet: ${message}`;
    throw problem;
  }
}

const noPage = lookalike
  ? `There is a file named ${lookalike}, but the page must be named exactly index.html: all lowercase, no spaces, nothing after .html. Rename it.`
  : 'There is no index.html in this folder yet. Make it next to package.json, all in lowercase.';

test('1) index.html is in the folder', () => {
  check(found, noPage);
});

test('2) the page has a title', () => {
  check(found, noPage);
  check(page.title.trim(), "The title is empty. Type the page's name between <title> and </title>.");
});

test('3) the page has one main heading (h1)', () => {
  check(found, noPage);
  const headings = texts('h1');
  check(headings.length === 1, `A page has exactly one <h1>, its main heading. This page has ${headings.length}.`);
  check(headings[0], 'The main heading is empty. Type it between <h1> and </h1>.');
});

test('4) the page has two paragraphs of text', () => {
  check(found, noPage);
  const paragraphs = texts('p').filter((text) => text !== '');
  check(paragraphs.length >= 2, `Type a paragraph between each <p> and </p>. Paragraphs with text so far: ${paragraphs.length} of 2.`);
});

test('5) the page has no HTML mistakes', async () => {
  check(found, noPage);
  const validator = new HtmlValidate({
    extends: ['html-validate:standard'],
    rules: { 'empty-title': 'error', 'empty-heading': 'error' },
  });
  const report = await validator.validateString(html);
  const mistakes = report.results.flatMap((result) => result.messages).map((m) => `line ${m.line}: ${m.message}`);
  check(mistakes.length === 0, `The HTML checker found ${mistakes.length} mistake(s):\n${mistakes.join('\n')}`);
});
