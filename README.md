# Epub Knowledge Contents

This package is a foundation block intended to be used for other NPM packages and is designed to retrieve all contents of a passed directory and return it as an object.

## Install

npm:

```javascript
npm i @epubknowledge/contents
```

yarn:

```javascript
yarn add @epubknowledge/contents
```

If either command cause an error in the terminal reference this [issue](https://github.com/epubknowledge/contents/issues/1).

### Use

```javascript
const contents = require('@epubknowledge/contents')
```

## Options

Currently this takes two options:

```javascript
contents(directory, arguments)
```

## Returned Object

Explained parameters returned and with an example from _Moby Dick's_ _package.opf_:

```bash
{
  path: {
    full: '/OPS/package.opf', ## Full path of file that includes filename
    file: '/OPS/' ## Path without filename
  },
  filename: 'package.opf', ## The name of the file
  ext: '.opf', ## The file extension, will default to null on hidden or files that dont have an extension
  size: 22175, ## The size of the file
  dirname: 'OPS' ## The directory the file or folder is located in
}
```

### Directory

The first option `directory` is **required** and accepts two path types:

- **relative:** `desktop`
- **absolute:** `/Users/username/desktop`

If you're still unaware of what the differences are read:

- [Difference between Relative path and absolute path in javascript](https://stackoverflow.com/questions/21306512/difference-between-relative-path-and-absolute-path-in-javascript)
- [Absolute vs. Relative Paths](https://medium.com/@colinlmcdonald/absolute-vs-relative-paths-7ffd8e31d49c)

When `directory` is passed into `contents()` it will validate if is directory and and if it exists. If both tests fail the code will error out. If the submitted `directory` is relative it will build it as an absolute path.

### Arguments

Second option takes regex and it can be either a string or array. If the regex passed is invalid the then returned object will be empty. For further help with regex visit [Examples](examples.md).

## Disclaimer

Test ePub source files used in the regex examples and as a test case come from IDPF's epub example "**Moby Dick**"<sup>[\*](#ref)</sup>.

<a name="ref">Reference</a>: [IDPF](https://github.com/IDPF/epub3-samples) | "_[Moby Dick](https://github.com/IDPF/epub3-samples/tree/main/30/moby-dick)_"
