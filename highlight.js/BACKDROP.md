The files in this library have been taken from two separate repositories:

- https://github.com/highlightjs/highlight.js
  - README.md
  - LICENSE
  - CHANGES.md
- https://github.com/highlightjs/cdn-release
  - highlight.min.js
  - styles/

This is because neither repository has everything we need. The 'highlight.js'
repo doesn't have minified versions of the CSS files, and the 'cdn-release' repo
doesn't have the README or LICENSE files (which I thought were important to
include).

Therefore, when updating this library, we need to download the latest release
from each repo linked above, and extract the specified files here.

