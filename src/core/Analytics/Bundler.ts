import AbstractAnalytics from "./AbstractAnalytics";
import { AsyncStorage } from "react-native";

export default class AnalyticsBundler {
    private providers: AbstractAnalytics[] = [];

    constructor(..._providers: AbstractAnalytics[]) {
        this.providers.push(..._providers);
    }

    private get uuid(): string {
        return String(Date.now()) + (Math.floor(Math.random() * 999) + 1000);
    }

    public async setUser(user: string): Promise<void> {
        await AsyncStorage.setItem('@user', user);
    }

    public async getUser(): Promise<string> {
        let userID = await AsyncStorage.getItem('@user');

        if (!userID) {
            userID = this.uuid;
            await AsyncStorage.setItem('@user', userID);
        }

        return userID;
    }

    public async removeUser(): Promise<void> {
        await AsyncStorage.removeItem('@user');
    }

    public send(event: string, data?: any): void {
        this.providers.forEach(async (provider) => provider.send(event, await this.getUser(), data));
    };
}