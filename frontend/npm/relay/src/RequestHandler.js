// @flow

import RelayQueryResponseCache from 'relay-runtime/lib/RelayQueryResponseCache';
import type {Variables, UploadableMap, CacheConfig} from 'react-relay';
import type {RequestNode} from 'relay-runtime';

import {isMutation, isQuery, forceFetch, type ExecutePayload, type Sink} from './helpers';

/**
 * This takes care about handling simple request to your GraphQL underlying service.
 * It uses burst cache to reduce number of requests being sent.
 */
export default class RequestHandler {
  requestExecutor: Object; // TODO
  burstCache: RelayQueryResponseCache;

  constructor(requestExecutor: Object, burstCache: RelayQueryResponseCache | boolean = false) {
    this.requestExecutor = requestExecutor;
    this.burstCache = burstCache;
  }

  handle = async (
    request: RequestNode,
    variables: Variables,
    cacheConfig: CacheConfig,
    uploadables: ?UploadableMap,
    sink: Sink<ExecutePayload>,
    complete: boolean = false,
  ) => {
    const queryID = request.text;

    if (isMutation(request)) {
      if (this.burstCache) {
        this.burstCache.clear();
      }
      return this.requestExecutor.execute(
        request,
        variables,
        cacheConfig,
        uploadables,
        sink,
        complete,
      );
    }

    if (this.burstCache) {
      const fromCache = this.burstCache.get(queryID, variables);
      if (isQuery(request) && fromCache !== null && !forceFetch(cacheConfig)) {
        sink.next(fromCache);
        if (complete) {
          sink.complete();
        }
        return fromCache;
      }
    }

    const fromServer = await this.requestExecutor.execute(
      request,
      variables,
      cacheConfig,
      uploadables,
      sink,
      complete,
    );
    if (fromServer && this.burstCache) {
      this.burstCache.set(queryID, variables, fromServer);
    }

    return fromServer;
  };
}