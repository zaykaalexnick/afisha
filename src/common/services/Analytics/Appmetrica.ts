import AppMetrica from 'gl-react-native-appmetrica';
import AbstractAnalytics from '~/core/Analytics/AbstractAnalytics';

export default class Appmetrica extends AbstractAnalytics {
    private appmetrica: AppMetrica = AppMetrica;

    constructor() {
        super();
        this.appmetrica.activateWithApiKey('b7376623-dae7-4bfc-8b1f-3b95c265b1ac');
    }

    public send(event: string, user: string, data?: any): void {
        this.appmetrica.reportEvent(event, { ...data, userID: user });
    };
}