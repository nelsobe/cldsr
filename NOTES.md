# Notes on REACT and CLDSR

## Notes on deploying to github pages

NOTE: I _thought_ I had it working for just pushing pages up to repo (not doing a build). But now as I write this - I cannot reproduce it. So, for now I am just doing builds as documented here.

### Documented Process For Doing Builds

- The process is documented reasonably well at this page: https://medium.com/@aishwaryaparab1/deploying-vite-deploying-vite-app-to-github-pages-166fff40ffd3
  - The only missing thing was you need to create a new repo in github first.
  - The rest of the steps include:
    - `git branch -M main`
    - `git remote add origin http://github.com/{username}/{repo-name}.git`
    - `git push -u origin main`
    - Update vite.config.js to have this as base: `base: "/cldsr/"`
    - `npm install gh-pages --save-dev`
    - Update the scripts section of package.json to include:
      `"predeploy" : "npm run build",`
      `"deploy" : "gh-pages -d dist",`
    - Put this near top pf package.json: `"homepage": "https://{username}.github.io/{repo-name}/"`a
    - `npm run deploy`
    - Go into github repo->Settings->Pages and select serve from branch gh-pages
    - Wait for it to deploy (see below)

### Adding contents to repo

- Just copy the `contents` directory to the repo (top level). This seems to work for the BUILD version. In fact, when switching to run locally (`npm run dev`) it is still found using the github pages address (discussed below)

### Telling Github Pages What To Serve as index.html page

- If you are pushing your code up to github (I will call the PUSH method), then you need to:

  1. Do a `git commit` followed by a `git push`
  2. Go to github for your repo->Settings->Pages and select serve from branch main.

- If you are running the result of a build (`npm run deploy` - I will call this the BUILD method), then:

  1. You need not `git commit` nor `git push` - that is taken care of in the `npm run deploy` script.
  2. But you do need to go to github for your repo->Settings->Pages and tell it to serve from branch gh-pages.

### Time to Go Live

- Once you do `npm run deploy` (maybe is also true for `git push`), it can take a few minutes for it to go live. Sometimes it is only a couple of minutes, sometimes it may be 8+ minutes. Not sure why, but not realizing this is really confusing since it seems your changes didn't work. I did 2 things to deal with this:
  - Each time I make a change I also make a change in the page title's <h1> (as in add an extra character). That way when that shows up I know it is the new one.
  - If you go into Settings->Pages it will have a message at the top that says "Your site is live at ..., Last deployed xxx minutes ago."
    - You can continually refresh that page until you see a 0 minutes ago and then you know it finally took.

### Using `fetch` in a Website Hosted on Github Pages

- The normal address for a fetch doesn't work. That is, even though the URL is: "https://nelsobe.github.io/cldsr", you cannot just tack "/contents/eng/1Ne/t.txt" onto it and get your file.
  - Rather, you must use for your base address: "https://raw.githubusercontent.com/nelsobe/cldsr/main", where the "main" is the branch name. This seems to be what you use for either the PUSH or the BUILD method. And, even though the BUILD method serves from the gh-pages branch, the above main branch address works.
