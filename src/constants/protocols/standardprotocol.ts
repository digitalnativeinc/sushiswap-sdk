import { ProtocolMap } from "types/ProtocolMap";
import { ChainId } from "../../enums";

export const STANDARD_PROTOCOL: ProtocolMap = {
  FACTORY_ADDRESS: {
    [ChainId.MAINNET]: "0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac",
    [ChainId.RINKEBY]: "0xF659492744608B595670c1508aa0F5b92B84B94d",
    [ChainId.ROPSTEN]: "0xa41A122F29ebfB4c36C8D8B3C008C8C71102Ade0",
    [ChainId.GÖRLI]: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
    [ChainId.KOVAN]: "0x414e4EDB62e8C95BA4E10703c49AC20533E6CcCe",
    [ChainId.SHIBUYA]: "0x0E60C35FCf3184dcE5CF04D4b736e56F2DE7CaF7",
    [ChainId.SHIDEN]: "0x284C9540f6c3F9EbA711BF3DEa2bFDBFa495D647",
    [ChainId.FANTOM]: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
    [ChainId.FANTOM_TESTNET]: "",
    [ChainId.MATIC]: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
    [ChainId.MATIC_TESTNET]: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
    [ChainId.XDAI]: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
    [ChainId.BSC]: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
    [ChainId.BSC_TESTNET]: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
    [ChainId.ARBITRUM]: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
    [ChainId.ARBITRUM_TESTNET]: "",
    [ChainId.MOONBEAM_TESTNET]: "0x2Ce3F07dD4c62b56a502E223A7cBE38b1d77A1b5",
    [ChainId.AVALANCHE]: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
    [ChainId.AVALANCHE_TESTNET]: "0xd00ae08403B9bbb9124bB305C09058E32C39A48c",
    [ChainId.HECO]: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
    [ChainId.HECO_TESTNET]: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
    [ChainId.HARMONY]: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
    [ChainId.HARMONY_TESTNET]: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
    [ChainId.OKEX]: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
    [ChainId.OKEX_TESTNET]: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
    [ChainId.CELO]: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
    [ChainId.PALM]: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
    [ChainId.PALM_TESTNET]: "",
    [ChainId.MOONRIVER]: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4"
  },
  ROUTER_ADDRESS: {
    [ChainId.MAINNET]: "0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F",
    [ChainId.RINKEBY]: "0x744E0aD1484044d505d18Fc9A2285766978B63Ed",
    [ChainId.ROPSTEN]: "0x264df23E4E62BB0d47473e853ab3f0E1e6193425",
    [ChainId.GÖRLI]: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
    [ChainId.KOVAN]: "0xDC4E3be13CD73BAC3C22489D224726d1Aa1B714e",
    [ChainId.SHIBUYA]: "0xF8D9C5094e96ccf7BA52BAbBc366f62569dFfB32",
    [ChainId.SHIDEN]: "0x7d439A0B65d4cC59136d695F25e44878444F5272",
    [ChainId.FANTOM]: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
    [ChainId.FANTOM_TESTNET]: "",
    [ChainId.MATIC]: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
    [ChainId.MATIC_TESTNET]: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
    [ChainId.XDAI]: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
    [ChainId.BSC]: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
    [ChainId.BSC_TESTNET]: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
    [ChainId.ARBITRUM]: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
    [ChainId.ARBITRUM_TESTNET]: "",
    [ChainId.MOONBEAM_TESTNET]: "0xeB5c2BB5E83B51d83F3534Ae21E84336B8B376ef",
    [ChainId.AVALANCHE]: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
    [ChainId.AVALANCHE_TESTNET]: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
    [ChainId.HECO]: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
    [ChainId.HECO_TESTNET]: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
    [ChainId.HARMONY]: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
    [ChainId.HARMONY_TESTNET]: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
    [ChainId.OKEX]: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
    [ChainId.OKEX_TESTNET]: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
    [ChainId.CELO]: "0x1421bDe4B10e8dd459b3BCb598810B1337D56842",
    [ChainId.PALM]: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
    [ChainId.PALM_TESTNET]: "",
    [ChainId.MOONRIVER]: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506"
  },
  INIT_CODE_HASH: {
    FACTORY: {
      [ChainId.RINKEBY]:
        "0x58b6b98149f255c091cb484ebd5bb0ed5aff4516a67cf1551ce2ba53d69e7a8c",
      [ChainId.SHIBUYA]:
        "0x324d7ced3a19bff8f7a62f474e7d22b44450225b20944731595e8e252d3784bd",
      [ChainId.SHIDEN]:
        "0x3ce671ad178dff3339aa5f2b267599856f8c32e987d796e6b7ac30b7a9eee1e0"
    }
  },
  DIVIDEND_POOL_WHITELIST: {
    [ChainId.MAINNET]: [],
    [ChainId.RINKEBY]: [
      {
        address: "0x5ea23619fe6d692963e86574d9d1c798f4fc1626",
        token0: "0xc778417e063141139fce010982780140aa0cd5ab",
        token1: "0xc7ad46e0b8a400bb3c915120d284aafba8fc4735"
      }
    ],
    [ChainId.ROPSTEN]: [],
    [ChainId.GÖRLI]: [],
    [ChainId.KOVAN]: [],
    [ChainId.SHIBUYA]: [
      {
        address: "0x7c0D5aEDFA1AF74C75362CcA3608159A61A4d80c",
        token0: "0x321F318e7C276c93Cf3094fd3a9d7c4362fd19FB",
        token1: "0xB0a1AA4CB76c0e35d9Ac9eba422bF76534Bf155A"
      }
    ],
    [ChainId.FANTOM]: [],
    [ChainId.FANTOM_TESTNET]: [],
    [ChainId.MATIC]: [],
    [ChainId.MATIC_TESTNET]: [],
    [ChainId.XDAI]: [],
    [ChainId.BSC]: [],
    [ChainId.BSC_TESTNET]: [],
    [ChainId.ARBITRUM]: [],
    [ChainId.ARBITRUM_TESTNET]: [],
    [ChainId.MOONBEAM_TESTNET]: [],
    [ChainId.AVALANCHE]: [],
    [ChainId.AVALANCHE_TESTNET]: [],
    [ChainId.HECO]: [],
    [ChainId.HECO_TESTNET]: [],
    [ChainId.HARMONY]: [],
    [ChainId.HARMONY_TESTNET]: [],
    [ChainId.OKEX]: [],
    [ChainId.OKEX_TESTNET]: [],
    [ChainId.CELO]: [],
    [ChainId.PALM]: [],
    [ChainId.PALM_TESTNET]: [],
    [ChainId.MOONRIVER]: []
  },
  DIVIDEND_POOL_ADDRESS: {
    [ChainId.MAINNET]: "",
    [ChainId.RINKEBY]: "0x45Fa9F11B06dfF3f4B04746629523c21FB2caDb9",
    [ChainId.ROPSTEN]: "",
    [ChainId.GÖRLI]: "",
    [ChainId.KOVAN]: "",
    [ChainId.SHIBUYA]: "0x368ea929c4B871BF68678cDF07ABB7e4bC9e59c3",
    [ChainId.SHIDEN]: "0x4633C1F0F633Cc42FD0Ba394762283606C88ae52",
    [ChainId.FANTOM]: "",
    [ChainId.FANTOM_TESTNET]: "",
    [ChainId.MATIC]: "",
    [ChainId.MATIC_TESTNET]: "",
    [ChainId.XDAI]: "",
    [ChainId.BSC]: "",
    [ChainId.BSC_TESTNET]: "",
    [ChainId.ARBITRUM]: "",
    [ChainId.ARBITRUM_TESTNET]: "",
    [ChainId.MOONBEAM_TESTNET]: "",
    [ChainId.AVALANCHE]: "",
    [ChainId.AVALANCHE_TESTNET]: "",
    [ChainId.HECO]: "",
    [ChainId.HECO_TESTNET]: "",
    [ChainId.HARMONY]: "",
    [ChainId.HARMONY_TESTNET]: "",
    [ChainId.OKEX]: "",
    [ChainId.OKEX_TESTNET]: "",
    [ChainId.CELO]: "",
    [ChainId.PALM]: "",
    [ChainId.PALM_TESTNET]: "",
    [ChainId.MOONRIVER]: ""
  }
};
