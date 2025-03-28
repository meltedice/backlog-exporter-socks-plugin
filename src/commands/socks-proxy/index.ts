import {Args, Command, Flags} from '@oclif/core'

export default class SocksProxy extends Command {
  static args = {
    person: Args.string({description: 'Person to say hello to', required: true}),
  }
  static description = 'Say hello'
  static examples = [
    {
      command: `<%= config.bin %> <%= command.id %>`,
      description: 'Display how to use the socks proxy',
    },
  ]
  static flags = {}

  async run(): Promise<void> {
    this.log(`To use the socks proxy, you need to set the environment variable SOCKS_PROXY to the address of the socks proxy.`)
    this.log(`For example:`)
    this.log(`export SOCKS_PROXY=socks5://example.com:1080`)
    this.log(`This will tell the system to use the socks proxy at example.com:1080 to connect to the internet.`)
  }
}
