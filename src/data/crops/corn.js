const corn = {
    humanReadable: 'Corn',
    blurb: {
        seed: 'Plant these in the summer or fall. Takes 14 days to mature, and continues to produce after first harvest.',
        product: 'One of the most popular grains. The sweet, fresh cobs are a summer favorite.'
    },
    walkable: true,
    daysToHarvest:  {first: 14, regrowth: 4},
    seasons: {
        Spring: false,
        Summer: true,
        Fall: true,
        Winter: false
    },
    seedCost: {
        pierre: 150,
        joja: 187,
        travelingCart: {
            standard: {low: 225, high: 1000},
            special: null
        },
        nightMarket: 150
    },
    sellPrice: {
        base: {standard: 50, tiller: 55},
        silver: {standard: 50, tiller: 55},
        gold: {standard: 50, tiller: 55},
        iridium: {standard: 50, tiller: 55}
    },
    sdvWiki: {
        seed: {
            pageTitle: 'Corn Seeds',
            url: 'https://stardewvalleywiki.com/Corn_Seeds'
        },
        product: {
            pageTitle: 'Corn',
            url: 'https://stardewvalleywiki.com/Corn'
        }
    },
    notes: {

    }
}

export default corn;