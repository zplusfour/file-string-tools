# file-tools npm package&nbsp; [![npm version](https://badge.fury.io/js/file-tools.svg)](https://badge.fury.io/js/type-file-extension)

## Usage
First, Install the `file-tools`, type in the terminal:

```sh
$ npm install file-tools
```

## Example

```js
const FileTOOLS = require('file-tools');
const tool = new FileTOOLS();

console.log(tools.ext("hello.txt")) // .txt
console.log(tools.name("hello.txt")) // hello
```