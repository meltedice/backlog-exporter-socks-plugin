import {Hook} from '@oclif/core';
import {socksDispatcher} from 'fetch-socks';

/**
 * Use SOCKS proxy if SOCKS_PROXY environment variable is set.
 *
 * ex. SOCKS_PROXY=socks5://proxy.example.com:1080
 * ex. SOCKS_PROXY=socks4://proxy.example.com:1080
 *
 * @param _opts don't use
 */
const hook: Hook<'init'> = async function (_opts) {
  // ex: 'socks5://proxy.example.com:1080'
  if (process.env.SOCKS_PROXY !== undefined) {
    const proxyUrl = new URL(process.env.SOCKS_PROXY)

    if (proxyUrl.protocol.startsWith('socks')) {
      // eslint-disable-next-line n/no-unsupported-features/node-builtins
      const originalFetch = globalThis.fetch;

      const dispatcher = socksDispatcher({
        host: proxyUrl.hostname,
        port: Number(proxyUrl.port),
        type: proxyUrl.protocol === 'socks4:' ? 4 : 5,
      })

      // eslint-disable-next-line n/no-unsupported-features/node-builtins
      globalThis.fetch = async function(url, options) {
        const optionsWithDispatcher = { dispatcher, ...options }

        return originalFetch(url, optionsWithDispatcher);
      };

      console.info('Using SOCKS proxy:', process.env.SOCKS_PROXY)
    }
  }
};

export default hook;
