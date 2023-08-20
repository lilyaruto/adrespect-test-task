var macy = Macy({
    container: '.g',
    trueOrder: true,
    waitForImages: true,
    margin: {
        x: 42,
        y: 42  
    },
    columns: 3,
    breakAt: {
        1440: {
            columns: 3
        },
        1000: {
            columns: 2
        },
        520: {
            columns: 2
        },
        500: {
            columns: 1
        }
    }
});