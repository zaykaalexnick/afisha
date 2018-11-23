import AnalyticsBundler from '~/core/Analytics/Bundler';

import Appmetrica from './Appmetrica';
import Amplitude from './Amplitude';

export default new AnalyticsBundler(new Appmetrica, new Amplitude);