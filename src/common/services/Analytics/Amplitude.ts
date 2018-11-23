import AmplitudeAnalytics from 'gl-react-native-amplitude-analytics';
import AbstractAnalytics from '~/core/Analytics/AbstractAnalytics';

export default class Amplitude extends AbstractAnalytics {
    private amplutide: AmplitudeAnalytics;

    constructor() {
        super();
        this.amplutide = new AmplitudeAnalytics('8a4ff5b5aa5d0301c29232e693dd8a6b');
    }

    public send(event: string, user: string, data?: any): void {
        this.amplutide.logEvent(event, { ...data, userID: user });
    };
}