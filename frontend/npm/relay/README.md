- [Relay Docs](https://facebook.github.io/relay/docs/en/introduction-to-relay.html)
- [Relay Modern Network Deep Dive](https://medium.com/entria/relay-modern-network-deep-dive-ec187629dfd3) (big inspiration)
- https://github.com/mrtnzlml/meta/blob/master/relay.md

# Features

- network, in-memory or `AsyncStorage` fetching
- uploadables
- request burst cache (response cache)
- batch requests
- fetch [ponyfill](https://ponyfill.com/) with retries and timeouts

TODO:

- subscriptions
- deferrable requests (only simple requests allowed now)
- handle partial errors (is it necessary thought? there is RelayNetworkLogger instead)