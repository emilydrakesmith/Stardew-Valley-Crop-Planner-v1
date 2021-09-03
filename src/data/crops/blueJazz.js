const blueJazz = {
    humanReadable: 'Blue Jazz',
    blurb: {
        seed: 'Plant in spring. Takes 7 days to produce a blue puffball flower.',
        product: 'The flower grows in a sphere to invite as many butterflies as possible.'
    },
    walkable: true,
    daysToHarvest: {first: 7, regrowth: null},
    seasons: {
        Spring: true,
        Summer: false,
        Fall: false,
        Winter: false
    },
    seedCost: {
        pierre: 30,
        joja: 37,
        travelingCart: {
            standard: {low: 100, high: 1000},
            special: null
        },
        nightMarket: 30
    },
    sellPrice: {
        base: {standard: 50, tiller: 55},
        silver: {standard: 62, tiller: 68},
        gold: {standard: 75, tiller: 82},
        iridium: {standard: 100, tiller: 110},
    },
    sdvWiki: {
        seed: {
            pageTitle: 'Jazz Seeds',
            url: 'https://stardewvalleywiki.com/Jazz_Seeds'
        },
        product: {
            pageTitle: 'Blue Jazz',
            url: 'https://stardewvalleywiki.com/Blue_Jazz'
        }
    },
    notes: {

    }
}

export default blueJazz;