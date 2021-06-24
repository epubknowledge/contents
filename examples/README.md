# Regex Examples

Examples are intended to assist on how to pass regex to `content()` second argument. Tests below are based on IDPF's "**Moby Dick**<sup>[\*](#ref)</sup>" epub 3 example.

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

## Other Recipes

- [mimetype](mimetype.md)
- [Meta Inf](meta-inf.md)
- [](.md)
- [](.md)
- [](.md)
- [](.md)
- [](.md)

<a name="ref">Reference</a>: [IDPF](https://github.com/IDPF/epub3-samples) | "_[Moby Dick](https://github.com/IDPF/epub3-samples/tree/main/30/moby-dick)_"
