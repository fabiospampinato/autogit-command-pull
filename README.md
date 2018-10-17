# Autogit Command - Pull

A command for pulling from a remote.

## Install

```sh
npm install --save autogit-command-pull
```

## Usage

#### Options

This command uses the following options object:

```js
{
  remote: 'origin', // The remote to pull from
  branch: '' // The branch to pull from, if not set the current branch will be used
}
```

#### Configuration

Add this command to your configuration:

```js
const pull = require ( 'autogit-command-pull' );

module.exports = {
  commands: {
    pull: pull ({ /* YOUR OPTIONS */ })
  }
}
```

#### CLI

Call it from the CLI with:

```sh
autogit pull
```

## License

MIT © Fabio Spampinato
