# Website juliakaltenborn.github.io

## Installation
Get:
- bundle
- sass stuff
- ruby
- gem

## Usage

Watch changes in your css file:
```
sass --watch _sass/mystyles.scss:assets/css/mystyles.css
```

Build it (needs to be done evertime you change configs, yamls, etc.)

```
bundle exec jekyll build --watch
```

Run website

```
bundle exec jekyll serve --incremental
```
