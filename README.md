backlog-exporter-socks-plugin
=================

A plugin that adds SOCKS proxy support to the [backlog-exporter](https://github.com/ShuntaToda/backlog-exporter), allowing you to export Backlog data through a SOCKS proxy.

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
# Install the plugin
$ npx backlog-exporter@latest plugins install backlog-exporter-socks-plugin

# Set up your SOCKS proxy (supports both SOCKS4 and SOCKS5)
$ export SOCKS_PROXY=socks5://proxy.example.com:1080
# or
$ export SOCKS_PROXY=socks4://proxy.example.com:1080

# Now all backlog-exporter commands will use the SOCKS proxy
```
<!-- usagestop -->
# Commands
<!-- commands -->

## `npx backlog-exporter@latest socks-proxy`

Display the current SOCKS proxy configuration and usage information.

```
USAGE
  $ npx backlog-exporter@latest socks-proxy
```

## [backlog-exporter commands](https://github.com/ShuntaToda/backlog-exporter)

All backlog-exporter commands will automatically use the configured SOCKS proxy when the `SOCKS_PROXY` environment variable is set.
