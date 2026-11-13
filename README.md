# Exercise: Your First Web Page

Exercise code for the lesson **Exercise: Your First Web Page** in the HTML in Depth course on [ask-codey.com](https://www.ask-codey.com).

You'll make a web page for a made-up neighborhood event, Maple Street Game Night: a file named `index.html` with a title, a main heading and two paragraphs. You type the words; the page skeleton is ready for you. Five checks tell you when the page has everything it needs.

## Before you start

You need VS Code with the Live Server extension, a browser and Node.js 24 or newer, set up as in the lesson *Setup: VS Code, a Browser and Node.js*.

## What's here

- `skeleton.html`: the page skeleton, with an empty title, heading and two paragraphs, and a note above each one saying what goes there. Ready to use: you copy it into your own file.
- `test/page.test.js`: the five checks. You don't need to change this file.
- `package.json`: tells npm which tools the checks need (`jsdom` reads your page the way a browser does, and `html-validate` looks for HTML mistakes). Ready to use.
- `.gitignore`: keeps the `node_modules` folder that `npm install` makes out of Git. Ready to use.
- `index.html`: not here yet. You make it.

## What to do

1. **Open this folder in VS Code.** Choose **File > Open Folder** and pick this folder, the one with `package.json` directly inside it. If VS Code asks whether you trust the authors of the files, choose **Yes, I trust the authors**.
2. **Make `index.html`.** In VS Code's Explorer, click the **New File** icon and name the file `index.html`: all lowercase, no spaces, nothing after `.html`.
3. **Copy the skeleton in.** Open `skeleton.html`, select everything (**Ctrl+A**, or **Cmd+A** on macOS), copy it, and paste it into `index.html`.
4. **Type your page.** In `index.html`, type a name for the page between `<title>` and `</title>`, a main heading between `<h1>` and `</h1>`, and a paragraph between each `<p>` and `</p>`. Type only words: leave the tags as they are. Save with **Ctrl+S** (or **Cmd+S**).
5. **Open it with Live Server.** Right-click `index.html` in the Explorer and choose **Open with Live Server**. Change a word, save, and watch the browser update by itself.

## Check your work

Open VS Code's terminal with **Terminal > New Terminal** (or **Ctrl+`**, on Windows and macOS alike). The first time, install what the checks need:

```bash
npm install
```

Then run the checks, as often as you like:

```bash
npm test
```

Before `index.html` exists, all five checks fail: that is expected. Each check that passes shows a ✔, and each one that doesn't shows a ✖, with a message under **failing tests** that starts **Not yet:** and says what to fix. Fix one thing, save, and run `npm test` again (the up arrow key brings the command back).

## The rules

- The page is about Maple Street Game Night, or a game night of your own invention. Use made-up details, not your real address.
- Keep every tag from the skeleton. You type words between the tags, not new tags.
- The checklist the checks can't do: open the page with Live Server, read it in the browser, and make sure the words on the tab, the heading and the paragraphs are the ones you typed.

## Tips

- The notes in `skeleton.html` start with `<!--` and end with `-->`. They are comments: notes for the person editing the page, which the browser doesn't show.
- A white dot on a file's tab in VS Code means it has changes you haven't saved. The checks and the browser only see saved files.
- If `npm test` says it can't find `index.html`, look at the file's name in the Explorer. `Index.html` and `index.html.txt` are different names.

## Hand it in

When it works, put your solution in a public repo of your own on GitHub, then paste that repo's address into **Submit your exercise** on the lesson page at [ask-codey.com](https://www.ask-codey.com). That's what completes the lesson. You don't need Git: create the repo on GitHub, choose **Add file**, then **Upload files**, and upload everything in this folder except `node_modules` (it's the files `npm install` downloaded, far too many for GitHub's upload, and `npm install` makes it again). The lesson page shows each step, and the lesson *Put Your Work on GitHub* walks through every screen.
