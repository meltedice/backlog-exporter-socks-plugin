import {Args, Command} from '@oclif/core'

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
    this.log(`  export SOCKS_PROXY=socks5://example.com:1080`)
    this.log(`This will tell the system to use the socks proxy at example.com:1080 to connect to the internet.`)
    this.log('')
    this.log('Your current SOCKS_PROXY environment variable is:', process.env.SOCKS_PROXY)
    if (process.env.SOCKS_PROXY?.startsWith('socks')) {
      this.log('You will call all Backlog APIs through the socks proxy.')
    } else {
      this.log('You will not call all Backlog APIs through the socks proxy.')
    }
  }
}
