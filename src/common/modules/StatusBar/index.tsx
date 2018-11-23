import * as React from 'react';
import { StatusBar, StatusBarProps } from 'react-native';

interface IStatusBar {
    color: string;
}

const StatusBarModule: React.SFC<IStatusBar & StatusBarProps> = ({ color, ...props }) => (
    <StatusBar
        backgroundColor={color}
        barStyle="dark-content"
        hidden={false}
        translucent={false}
        { ...props }
    />
);

export default StatusBarModule;