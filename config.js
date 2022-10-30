module.exports = {
    app: {
        token: 'MTAzNjMwNzQwNzkxMzA5NTMyOQ.GUBwM8.wppN4U7J05WRN7LQUhXk9CGom0Z2iOXo2tfXJU',
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
