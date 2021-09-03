const cauliflower = {
    humanReadable: 'cauliflower',
    blurb: {
        seed: 'Plant these in the spring. Takes 12 days to produce a large cauliflower.',
        product: 'Valuable, but slow-growing. Despite its pale color, the florets are packed with nutrients.'
    },
    walkable: true,
    daysToHarvest:  {first: 12, regrowth: null},
    seasons: {
        Spring: true,
        Summer: false,
        Fall: false,
        Winter: false
    },
    seedCost: {
        pierre: 80,
        joja: 100,
        travelingCart: {
            standard: {low: 120, high: 1000},
            special: null
        },
        nightMarket: 80
    },
    sellPrice: {
        base: {standard: 175, tiller: 192},
        silver: {standard: 218, tiller: 239},
        gold: {standard: 262, tiller: 288},
        iridium: {standard: 350, tiller: 385}
    },
    sdvWiki: {
        seed: {
            pageTitle: 'Cauliflower Seeds',
            url: 'https://stardewvalleywiki.com/Cauliflower_Seeds'
        },
        product: {
            pageTitle: 'Cauliflower',
            url: 'https://stardewvalleywiki.com/Cauliflower'
        }
    },
    notes: {

    }
}

export default cauliflower;