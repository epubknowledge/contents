# Regex examples

Examples are intended to assist on how to pass regex to `content()` second argument. Tests below are based on IDPF's "**Moby Dick**[^ref]" epub 3 example.

`dir` in `contents()` is a valid/exists directory

## Get everything in directory

without second option:

```javascript
contents(dir)
```

or with a blank second option:

```javascript
contents(dir, '')
```

Result:

```javascript
Returns object with everything
```

[^ref]: [IDPF](https://github.com/IDPF/epub3-samples) | "_[Moby Dick](https://github.com/IDPF/epub3-samples/tree/main/30/moby-dick)_"
