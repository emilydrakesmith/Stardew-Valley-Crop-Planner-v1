const coffeeBean = {
    humanReadable: 'Coffee Bean',
    blurb: {
        seed: 'Plant in spring or summer to grow a coffee plant. Place five beans in a keg to make coffee.',
        product: 'Plant in spring or summer to grow a coffee plant. Place five beans in a keg to make coffee.'
    },
    walkable: true,
    daysToHarvest:  {first: 10, regrowth: 2},
    seasons: {
        Spring: true,
        Summer: true,
        Fall: false,
        Winter: false
    },
    seedCost: {
        pierre: null,
        joja: null,
        travelingCart: {
            standard: {low: 100, high: 1000},
            special: 2500
        },
        nightMarket: 30
    },
    sellPrice: {
        base: {standard: 15, tiller: 15},
        silver: {standard: 18, tiller: 18},
        gold: {standard: 22, tiller: 22},
        iridium: {standard: 30, tiller: 30}
    },
    sdvWiki: {
        seed: {
            pageTitle: 'Coffee Bean',
            url: 'https://stardewvalleywiki.com/Coffee_Bean'
        },
        product: {
            pageTitle: 'Coffee Bean',
            url: 'https://stardewvalleywiki.com/Coffee_Bean'
        }
    },
    notes: {
        1: 'Seed and product are identical.',
        2: 'As the product is technically a seed, not a crop, it does not get a bonus from the "Tiller" profession.',
        3: 'Not available from regular commercial sources.'
    }
}

export default coffeeBean;