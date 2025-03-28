import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('hello', () => {
  it('runs hello', async () => {
    const {stdout} = await runCommand('socks-proxy')
    expect(stdout).to.contain('To use the socks proxy, you need to set the environment variable SOCKS_PROXY to the address of the socks proxy.')
  })
})
