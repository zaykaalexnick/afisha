abstract class AbstractAnalytics {
    public abstract send(event: string, user: string, data?: any): void;
}

export default AbstractAnalytics;