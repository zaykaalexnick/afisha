import * as React from 'react';
import { Provider } from 'mobx-react';
import { ThemeProvider } from 'styled-components';

import MobxBundler from '~/core/Mobx/Bundler';

import StatusBar from '~/common/modules/StatusBar';

import theme from '~/common/theme';

import { View, Text } from 'react-native';

export default class App extends React.Component {
    render(): React.ReactNode {
        return (
            <React.Fragment>
                <StatusBar color={theme.header.background} />
                <Provider { ...MobxBundler.getInstances() }>
                    <ThemeProvider theme={theme}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Text>Hello</Text>
                        </View>
                    </ThemeProvider>
                </Provider>
            </React.Fragment>
        );
    }
}