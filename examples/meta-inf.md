# META INF

## META INF

### As String

```javascript
contents(dir, 'META-INF')
```

### As Array

```javascript
contents(dir, ['META-INF'])
```

### Regex

```javascript
contents(dir, '(META-INF)')
```

### Returns

```bash
[
  {
    path: { full: '/META-INF/container.xml', file: '/META-INF/' },
    filename: 'container.xml',
    ext: '.xml',
    size: 240,
    dirname: 'META-INF'
  }
]
```

## Container

_container.xml_ that exists in the META-INF directory.

```javascript
contents(dir, 'container')
```

### Returns

```bash
[
  {
    path: { full: '/META-INF/container.xml', file: '/META-INF/' },
    filename: 'container.xml',
    ext: '.xml',
    size: 240,
    dirname: 'META-INF'
  }
]
```

if any XML file exists in the META-INF directory.

```javascript
contents(dir, `[A-Za-z]*.xml`)
```

### Returns

```bash
[
  {
    path: { full: '/META-INF/container.xml', file: '/META-INF/' },
    filename: 'container.xml',
    ext: '.xml',
    size: 240,
    dirname: 'META-INF'
  }
]
```
