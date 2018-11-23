declare module 'gl-react-native-appmetrica' {
    export default class AppMetrica {
        public static activateWithApiKey(key: string): void;
        public static reportEvent(event: string, data?: any): void;
        public static reportError(event: string, data?: any): void;
    }
}