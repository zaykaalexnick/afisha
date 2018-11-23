import BaseStore from "./BaseStore";

interface IStores {
    [name: string]: BaseStore;
}

class MobxBundler {
    private stores: IStores = {};

    public create(_stores: IStores): void {
        this.stores = _stores;
    }

    public getInstances(): IStores {
        return this.stores;
    }
}

export default new MobxBundler;