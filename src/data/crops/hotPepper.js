const hotPepper = {
    humanReadable: 'Hot Pepper',
    blurb: {
        seed: 'Plant these in the summer. Takes 5 days to mature, and continues to produce after first harvest.',
        product: 'Fiery hot with a hint of sweetness.'
    },
    walkable: true,
    daysToHarvest:  {first: 5, regrowth: 3},
    seasons: {
        Spring: false,
        Summer: true,
        Fall: false,
        Winter: false
    },
    seedCost: {
        pierre: 40,
        joja: 50,
        travelingCart: {
            standard: {low: 100, high: 1000},
            special: null
        },
        nightMarket: 40
    },
    sellPrice: {
        base: {standard: 40, tiller: 44},
        silver: {standard: 50, tiller: 55},
        gold: {standard: 60, tiller: 66},
        iridium: {standard: 80, tiller: 88}
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

    }
}

export default hotPepper;