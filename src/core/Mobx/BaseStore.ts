import { observable } from "mobx";
import IStore from "./IStore";

export default class BaseStore implements IStore {
    @observable
    status = observable.map();

    @observable
    errors = observable.map();
}