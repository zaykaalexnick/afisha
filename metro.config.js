module.exports = {
    resolver: {
        sourceExts: ['tsx', 'ts', 'jsx', 'js']
    },
    transformer: {
        babelTransformerPath: require.resolve('react-native-typescript-transformer'),
        enableBabelRCLookup: false
    },
    serializer: {

    },
    server: {

    },
};