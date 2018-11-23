import { ObservableMap } from 'mobx';
import Pending from './Pending';

interface IStore {
    status: ObservableMap<any, Pending>;
    errors: ObservableMap<any, string>;
}

export default IStore;