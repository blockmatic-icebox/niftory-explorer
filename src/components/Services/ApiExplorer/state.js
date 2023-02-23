const defaultHeader = [
  {
    key: 'content-type',
    value: 'application/json',
    isActive: true,
    isNewHeader: false,
    isDisabled: false,
  },
  {
    key: 'X-Niftory-API-Key',
    value: 'beYyMaLIucJIt6CPFCAni2L0mYQ7nXnllNLYKVAgcTM=',
    isActive: true,
    isNewHeader: false,
    isDisabled: false,
  },
   {
    key: 'Authorization',
    value: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjZKcFhrRFM1UDFGY2hnT0tDQ242VVRLZkpnTGpMN09WR1JfakN6NUxENzAifQ.eyJzdWIiOiJjbGVnem1yOWQwMDFmbWkwdTlodWwwaDF6IiwiZW1haWwiOiJjb250YWN0QGdhYm9lc3F1aXZlbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6IkdhYm8gRXNxdWl2ZWwiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUdObXl4WW9xZTlhNDhjT195TmZjN2pPVVlZeW9oeDM4bkx6eWJvNGRTc3ZaQT1zOTYtYyIsImF0X2hhc2giOiJ5MVV6TlJwS2dsdEplb2FLb3EwQnBBIiwiYXVkIjoiY2xiNXRnZTB1MDAxOTBobGJsdmVoMzMxbCIsImV4cCI6MTY3NzE1MzMxMSwiaWF0IjoxNjc3MTQ5NzExLCJpc3MiOiJodHRwczovL3N0YWdpbmcubmlmdG9yeS5jb20ifQ.PSTDPdG_q0ww-DZMKtY9HAO585ewqmceFlqUYSNieD_b_EG1d79yaFSztD-wwCA-cNqRZrQAmmoLaG7VGqy9n-vt4TWcx8doNFB3Qx67B8BRwmTDvCeCkkh5x8bOyxWK0bZiwirzUmWEraIF1lPn9it9EK0u-0_14-IhT-I8cGJUV8-qzMEOsjZWxUS_CsHAEHGqzDb8K0KrMD-RNKLikHFJSibsNR1md1V_boy6xGAxm_VLf2NW_oQZI-hW8CPkqZQu9aH2hJXOaMprTZIvPuGiHI9tcYF7VKzq0gJ199zZ2y-ZkYL4lihu5-Ji2zTxr2hvcBaGSDmjw8yiGaCPxw',
    isActive: true,
    isNewHeader: false,
    isDisabled: false,
  }
];
defaultHeader.push({
  key: '',
  value: '',
  isActive: false,
  isNewHeader: true,
});

const getUrl = path => {
  return `${window.__env.graphqlEndpoint}`;
};

const dataApisContent = [];
dataApisContent.push({
  id: 'DataApi',
  details: {
    title: '',
    description:
      'Explore GraphQL APIs with headers',
    category: 'data',
  },
  request: {
    method: 'POST',
    url: getUrl('/'),
    headers: defaultHeader,
    bodyType: 'graphql',
    params: JSON.stringify({}, null, 4),
  },
});

const dataApis = {
  title: 'Data',
  content: dataApisContent,
};

const explorerData = {
  sendingRequest: false,
  enableResponseSection: false,
  response: {},
};

const defaultApi = dataApis.content[0];

const defaultState = {
  currentTab: 0,
  displayedApi: defaultApi,
  modalState: {
    isOpen: false,
    isCopied: false,
  },
  explorerData,
  headerFocus: false,
  graphqlEndpoint: '',
};

export default defaultState;

export { defaultApi, defaultHeader };
