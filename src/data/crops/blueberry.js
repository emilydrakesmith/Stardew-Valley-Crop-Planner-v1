const blueberry = {
    humanReadable: 'Blueberry',
    blurb: {
        seed: 'Plant these in the summer. Takes 13 days to mature, and continues to produce after first harvest.',
        product: 'A popular berry reported to have many health benefits. The blue skin has the highest nutrient concentration.'
    },
    walkable: true,
    daysToHarvest:  {first: 13, regrowth: 4},
    seasons: {
        Spring: false,
        Summer: true,
        Fall: false,
        Winter: false
    },
    seedCost: {
        pierre: 80,
        joja: null,
        travelingCart: {
            standard: {low: 120, high: 1000},
            special: 2500
        },
        nightMarket: 80
    },
    sellPrice: {
        base: {standard: 50, tiller: 55},
        silver: {standard: 62, tiller: 68},
        gold: {standard: 75, tiller: 82},
        iridium: {standard: 100, tiller: 110}
    },
    sdvWiki: {
        seed: {
            pageTitle: 'Blueberry Seeds',
            url: 'https://stardewvalleywiki.com/Blueberry_Seeds'
        },
        product: {
            pageTitle: 'Blueberry',
            url: 'https://stardewvalleywiki.com/Blueberry'
        }
    },
    notes: {
        1: 'Yields at least two blueberries per plant-harvest.  Sell price is based on one blueberry.'
    }
}

export default blueberry;