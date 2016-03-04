# eslint-plugin-consistent-return-legacy [![Build Status](https://travis-ci.org/erikdesjardins/eslint-plugin-consistent-return-legacy.svg?branch=master)](https://travis-ci.org/erikdesjardins/eslint-plugin-consistent-return-legacy)

The consistent-return rule from ESLint 1.x.

In ESLint 1.x (as in this plugin), the rule only verifies that all or none of the return statements return a value.

For example, this would be legal:

```js
function() {
	if (foo) return foo;

	if (bar) return bar;
}
```

In ESLint 2+, it verifies that all or none of the *code paths* return a value.

So the first example would not be legal; you'd need to do this:

```js
function() {
	if (foo) return foo;

	if (bar) return bar;
	
	return baz;
}
```

In some code the new behavior may produce many false negatives, e.g. when returning `false` in jQuery event handlers.

## Usage

`npm i --save-dev eslint-plugin-consistent-return-legacy`

```json
{
	"plugins": [
		"consistent-return-legacy"
	],
	"rules": {
		"consistent-return-legacy/consistent-return": 2
	}
}
```
