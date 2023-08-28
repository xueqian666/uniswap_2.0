import { abis } from '@my-app/contracts';
import { getPairsInfo } from './getPairsInfo';

 export const getFactoryInfo = async (factoryAddress, web3) => {
  const factory = new web3.eth.Contract(abis.factory, factoryAddress);
  console.log(`Factory Info`)
  const factoryInfo = {
    feeTo: await factory.methods.feeTo().call(),
    feeToSetter: await factory.methods.feeToSetter().call(),
    allPairsLength: await factory.methods.allPairsLength().call(),
    allPairs: [],
  };
  for (let i = 0; i < factoryInfo.allPairsLength; i++) {
    factoryInfo.allPairs[i] = await factory.methods.allPairs(i).call();
  }
  console.log(`All pairs: ${factoryInfo.allPairs}`)
  factoryInfo.pairsInfo = await getPairsInfo(factoryInfo.allPairs, web3);

  console.log(`Factory's pairs: ${factoryInfo.pairsInfo}`)
  return factoryInfo;
 }