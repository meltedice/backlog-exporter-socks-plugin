backlog-exporter-socks-plugin
=================

Adding SOCKS proxy support to the backlog-exporter


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/backlog-exporter-socks-plugin.svg)](https://npmjs.org/package/backlog-exporter-socks-plugin)
[![Downloads/week](https://img.shields.io/npm/dw/backlog-exporter-socks-plugin.svg)](https://npmjs.org/package/backlog-exporter-socks-plugin)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g backlog-exporter-socks-plugin
$ backlog-exporter-socks-plugin COMMAND
running command...
$ backlog-exporter-socks-plugin (--version)
backlog-exporter-socks-plugin/0.0.0 darwin-arm64 node-v20.18.0
$ backlog-exporter-socks-plugin --help [COMMAND]
USAGE
  $ backlog-exporter-socks-plugin COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`backlog-exporter-socks-plugin hello PERSON`](#backlog-exporter-socks-plugin-hello-person)
* [`backlog-exporter-socks-plugin hello world`](#backlog-exporter-socks-plugin-hello-world)
* [`backlog-exporter-socks-plugin help [COMMAND]`](#backlog-exporter-socks-plugin-help-command)
* [`backlog-exporter-socks-plugin plugins`](#backlog-exporter-socks-plugin-plugins)
* [`backlog-exporter-socks-plugin plugins add PLUGIN`](#backlog-exporter-socks-plugin-plugins-add-plugin)
* [`backlog-exporter-socks-plugin plugins:inspect PLUGIN...`](#backlog-exporter-socks-plugin-pluginsinspect-plugin)
* [`backlog-exporter-socks-plugin plugins install PLUGIN`](#backlog-exporter-socks-plugin-plugins-install-plugin)
* [`backlog-exporter-socks-plugin plugins link PATH`](#backlog-exporter-socks-plugin-plugins-link-path)
* [`backlog-exporter-socks-plugin plugins remove [PLUGIN]`](#backlog-exporter-socks-plugin-plugins-remove-plugin)
* [`backlog-exporter-socks-plugin plugins reset`](#backlog-exporter-socks-plugin-plugins-reset)
* [`backlog-exporter-socks-plugin plugins uninstall [PLUGIN]`](#backlog-exporter-socks-plugin-plugins-uninstall-plugin)
* [`backlog-exporter-socks-plugin plugins unlink [PLUGIN]`](#backlog-exporter-socks-plugin-plugins-unlink-plugin)
* [`backlog-exporter-socks-plugin plugins update`](#backlog-exporter-socks-plugin-plugins-update)

## `backlog-exporter-socks-plugin hello PERSON`

Say hello

```
USAGE
  $ backlog-exporter-socks-plugin hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ backlog-exporter-socks-plugin hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/meltedice/backlog-exporter-socks-plugin/blob/v0.0.0/src/commands/hello/index.ts)_

## `backlog-exporter-socks-plugin hello world`

Say hello world

```
USAGE
  $ backlog-exporter-socks-plugin hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ backlog-exporter-socks-plugin hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/meltedice/backlog-exporter-socks-plugin/blob/v0.0.0/src/commands/hello/world.ts)_

## `backlog-exporter-socks-plugin help [COMMAND]`

Display help for backlog-exporter-socks-plugin.

```
USAGE
  $ backlog-exporter-socks-plugin help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for backlog-exporter-socks-plugin.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.27/src/commands/help.ts)_

## `backlog-exporter-socks-plugin plugins`

List installed plugins.

```
USAGE
  $ backlog-exporter-socks-plugin plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ backlog-exporter-socks-plugin plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.36/src/commands/plugins/index.ts)_

## `backlog-exporter-socks-plugin plugins add PLUGIN`

Installs a plugin into backlog-exporter-socks-plugin.

```
USAGE
  $ backlog-exporter-socks-plugin plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into backlog-exporter-socks-plugin.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the BACKLOG_EXPORTER_SOCKS_PLUGIN_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the BACKLOG_EXPORTER_SOCKS_PLUGIN_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ backlog-exporter-socks-plugin plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ backlog-exporter-socks-plugin plugins add myplugin

  Install a plugin from a github url.

    $ backlog-exporter-socks-plugin plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ backlog-exporter-socks-plugin plugins add someuser/someplugin
```

## `backlog-exporter-socks-plugin plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ backlog-exporter-socks-plugin plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ backlog-exporter-socks-plugin plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.36/src/commands/plugins/inspect.ts)_

## `backlog-exporter-socks-plugin plugins install PLUGIN`

Installs a plugin into backlog-exporter-socks-plugin.

```
USAGE
  $ backlog-exporter-socks-plugin plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into backlog-exporter-socks-plugin.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the BACKLOG_EXPORTER_SOCKS_PLUGIN_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the BACKLOG_EXPORTER_SOCKS_PLUGIN_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ backlog-exporter-socks-plugin plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ backlog-exporter-socks-plugin plugins install myplugin

  Install a plugin from a github url.

    $ backlog-exporter-socks-plugin plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ backlog-exporter-socks-plugin plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.36/src/commands/plugins/install.ts)_

## `backlog-exporter-socks-plugin plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ backlog-exporter-socks-plugin plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ backlog-exporter-socks-plugin plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.36/src/commands/plugins/link.ts)_

## `backlog-exporter-socks-plugin plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ backlog-exporter-socks-plugin plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ backlog-exporter-socks-plugin plugins unlink
  $ backlog-exporter-socks-plugin plugins remove

EXAMPLES
  $ backlog-exporter-socks-plugin plugins remove myplugin
```

## `backlog-exporter-socks-plugin plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ backlog-exporter-socks-plugin plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.36/src/commands/plugins/reset.ts)_

## `backlog-exporter-socks-plugin plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ backlog-exporter-socks-plugin plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ backlog-exporter-socks-plugin plugins unlink
  $ backlog-exporter-socks-plugin plugins remove

EXAMPLES
  $ backlog-exporter-socks-plugin plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.36/src/commands/plugins/uninstall.ts)_

## `backlog-exporter-socks-plugin plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ backlog-exporter-socks-plugin plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ backlog-exporter-socks-plugin plugins unlink
  $ backlog-exporter-socks-plugin plugins remove

EXAMPLES
  $ backlog-exporter-socks-plugin plugins unlink myplugin
```

## `backlog-exporter-socks-plugin plugins update`

Update installed plugins.

```
USAGE
  $ backlog-exporter-socks-plugin plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.36/src/commands/plugins/update.ts)_
<!-- commandsstop -->
