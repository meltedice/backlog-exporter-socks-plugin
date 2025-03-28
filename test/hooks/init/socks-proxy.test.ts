import {runHook} from '@oclif/test'
import {expect} from 'chai'

describe('hooks', () => {
  // eslint-disable-next-line n/no-unsupported-features/node-builtins
  const originalFetch = globalThis.fetch
  const originalEnv = process.env

  beforeEach(() => {
    // reset environment
    process.env = {...originalEnv}
    // eslint-disable-next-line n/no-unsupported-features/node-builtins
    globalThis.fetch = originalFetch
  })

  afterEach(() => {
    // restore environment
    process.env = originalEnv
    // eslint-disable-next-line n/no-unsupported-features/node-builtins
    globalThis.fetch = originalFetch
  })

  it('should not modify fetch when SOCKS_PROXY is not set', async () => {
    await runHook('init', {id: 'socks-proxy-command'})
    // eslint-disable-next-line n/no-unsupported-features/node-builtins
    expect(globalThis.fetch).to.equal(originalFetch)
  })

  it('should modify fetch when SOCKS_PROXY is set with socks5', async () => {
    process.env.SOCKS_PROXY = 'socks5://proxy.example.com:1080'
    await runHook('init', {id: 'socks-proxy-command'})
    // eslint-disable-next-line n/no-unsupported-features/node-builtins
    expect(globalThis.fetch).to.not.equal(originalFetch)
  })

  it('should modify fetch when SOCKS_PROXY is set with socks4', async () => {
    process.env.SOCKS_PROXY = 'socks4://proxy.example.com:1080'
    await runHook('init', {id: 'socks-proxy-command'})
    // eslint-disable-next-line n/no-unsupported-features/node-builtins
    expect(globalThis.fetch).to.not.equal(originalFetch)
  })
})
