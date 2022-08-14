import Reactotron, {networking} from 'reactotron-react-native';
import { AsyncStorage } from '@react-native-async-storage/async-storage'
import { reactotronRedux } from 'reactotron-redux';
import { defaultTRenderEngineProviderProps } from 'react-native-render-html/lib/typescript/TRenderEngineProvider';

const reactotron = Reactotron
  .setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure() // controls connection & communication settings
  .use(networking()) 
  .useReactNative() // add all built-in react native plugins
  .use(reactotronRedux())
  .connect() // let's connect!


  export default reactotron;