module.exports = {
    app: {
        token: 'MTAzNjMwNzQwNzkxMzA5NTMyOQ.GCSFVn.78a6TsDbSuGFUNA8HPhCmR7XbKRkr1f0V0yyIE',
        playing: 'by Zerio ❤️',
        global: true,
        guild: 'XXX'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
