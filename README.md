highlight.js
============

This module integrates the [highlight.js](https://highlightjs.org/) library with
Backdrop, providing syntax highlighting for code blocks.

Code blocks can* be formatted like so:

```html
<pre><code class="[LANG]">
  // Code here...
</code></pre>
```

\* The `<pre>` wrapper and the `class` attribute are optional.

The class can also be prefixed with `language-` or `lang-`. If you don't specify
a language in the class attribute, highlight.js will try to detect the language
automatically. See [How to use highlight.js](https://highlightjs.org/usage/) for
more details.

Installation
------------

- Install this module using the official Backdrop CMS instructions at
  https://backdropcms.org/guide/modules.

- Visit the configuration page under Administration > Configuration > Content
  authoring > highlight.js (admin/config/content/highlightjs) to select a style,
  and whether your code blocks are formatted as `<pre><code>` or just `<code>`.

Issues
------

Bugs and Feature requests should be reported in the Issue Queue:
https://github.com/backdrop-contrib/highlightjs/issues.

Current Maintainers
-------------------

- Peter Anderson (https://github.com/BWPanda).

Credits
-------

- Written for Backdrop by Peter Anderson (https://github.com/BWPanda).

highlight.js for Backdrop is *not* a port of Drupal's
[highlight js](https://www.drupal.org/project/highlightjs) module, though they
both integrate the highlight.js library.

License
-------

This project is GPL v2 software. See the LICENSE.txt file in this directory for
complete text.
