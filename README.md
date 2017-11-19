# Jest Plugin for [Automated](https://github.com/automated-tools/automated)

[![Greenkeeper badge](https://badges.greenkeeper.io/automated-tools/plugin-jest.svg)](https://greenkeeper.io/)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fautomated-tools%2Fplugin-jest.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fautomated-tools%2Fplugin-jest?ref=badge_shield)

Adds Jest snapshots

# Setup

Add the following to your `.gitignore`

```
*/.automated/jest/__index.js
```

Install automated

```bash
yarn add automated
```

Run automated

```bash
yarn automated
```

Add [Jest CLI options](https://facebook.github.io/jest/docs/en/cli.html) like
this

```bash
yarn automated jest\[--updateSnapshot --watch\]
```


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fautomated-tools%2Fplugin-jest.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fautomated-tools%2Fplugin-jest?ref=badge_large)