# Mimetype

Possible parameters for getting mimetype

## As String

```javascript
contents(dir, 'mimetype')
```

## As Array

```javascript
contents(dir, ['mimetype'])
```

as array with different types:

```javascript
contents(dir, ['mimetype', 'mime'])
```

## Returns

```bash
[
  {
    path: { full: '/mimetype', file: '/' },
    filename: 'mimetype',
    ext: null,
    size: 20,
    dirname: 'moby-dick',
  },
  {
    path: { full: '/mimetype', file: '/' },
    filename: 'mimetype',
    ext: null,
    size: 20,
    dirname: 'moby-dick',
  },
]
```
