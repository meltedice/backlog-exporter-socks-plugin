backlog-exporter-socks-plugin
=================

A plugin that adds SOCKS proxy support to the [backlog-exporter](https://github.com/ShuntaToda/backlog-exporter), allowing you to export Backlog data through a SOCKS proxy.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/backlog-exporter-socks-plugin.svg)](https://npmjs.org/package/backlog-exporter-socks-plugin)
[![Downloads/week](https://img.shields.io/npm/dw/backlog-exporter-socks-plugin.svg)](https://npmjs.org/package/backlog-exporter-socks-plugin)

* [Usage](#usage)
* [Commands](#commands)

# Usage
```sh-session
$ npx backlog-exporter@latest plugins install backlog-exporter-socks-plugin
$ npx backlog-exporter@latest plugins
$ export SOCKS_PROXY=socks5://proxy.example.com:1080
$ npx backlog-exporter@latest socks-proxy
```

Once this plugin is installed, backlog-exporter will route all requests through the proxy when the `SOCKS_PROXY` environment variable is defined.
See backlog-exporter's usage on its [site](https://github.com/ShuntaToda/backlog-exporter).

<!-- usagestop -->
# Commands
* [`npx backlog-exporter@latest socks-proxy`](#backlog-exporter-socks-proxy-command)

## `npx backlog-exporter@latest socks-proxy`

Display current SOCKS proxy configuration for backlog-exporter.

This command only displays the current configuration.
