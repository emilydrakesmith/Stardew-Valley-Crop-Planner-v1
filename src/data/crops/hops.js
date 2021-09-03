const hops = {
    humanReadable: 'Hops',
    blurb: {
        seed: 'Plant these in the summer. Takes 11 days to grow, but keeps producing after that. Grows on a trellis.',
        product: 'A bitter, tangy flower used to flavor beer.'
    },
    walkable: false,
    daysToHarvest:  {first: 11, regrowth: 1},
    seasons: {
        Spring: false,
        Summer: true,
        Fall: false,
        Winter: false
    },
    seedCost: {
        pierre: 60,
        joja: 75,
        travelingCart: {
            standard: {low: 100, high: 1000},
            special: null
        },
        nightMarket: 60
    },
    sellPrice: {
        base: {standard: 25, tiller: 27},
        silver: {standard: 31, tiller: 34},
        gold: {standard: 37, tiller: 40},
        iridium: {standard: 50, tiller: 55}
    },
    sdvWiki: {
        seed: {
            pageTitle: 'Hops Starter',
            url: 'https://stardewvalleywiki.com/Hops_Starter'
        },
        product: {
            pageTitle: 'Hops',
            url: 'https://stardewvalleywiki.com/Hops'
        }
    },
    notes: {
        1: 'This plant grows on a trellis and creates a barrier to walking.'
    }
}

export default hops;