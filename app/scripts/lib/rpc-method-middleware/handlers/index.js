import getProviderState from './get-provider-state';
import logWeb3ShimUsage from './log-web3-shim-usage';
import watchAsset from './watch-asset';

const handlers = [getProviderState, logWeb3ShimUsage, watchAsset];
export default handlers;
