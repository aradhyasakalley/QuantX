const dummyStockData = [
    { 
        id: 1, 
        name: "Reliance Industries Ltd", 
        symbol: "RELIANCE", 
        price: 2400.50, 
        change: -12.25, 
        changePercent: -0.51,
        marketCap: "16.5T",
        peRatio: 25.5,
        volume: 8000000,
        avgVolume: 9000000,
        dividendYield: 0.70,
        earningsDate: "2022-02-25",
        sector: "Oil & Gas",
        country: "India",
        exchange: "NSE",
        graphData: [/* Array of data points for graph */],
        candlestickData: [/* Array of candlestick data */]
    },
    { 
        id: 2, 
        name: "Infosys Ltd", 
        symbol: "INFY", 
        price: 1900.75, 
        change: 10.50, 
        changePercent: 0.55,
        marketCap: "6.8T",
        peRatio: 30.2,
        volume: 4000000,
        avgVolume: 4500000,
        dividendYield: 1.20,
        earningsDate: "2022-02-27",
        sector: "Technology",
        country: "India",
        exchange: "NSE",
        graphData: [/* Array of data points for graph */],
        candlestickData: [/* Array of candlestick data */]
    },
    { 
        id: 3, 
        name: "Tata Consultancy Services Ltd", 
        symbol: "TCS", 
        price: 3500.90, 
        change: 5.80, 
        changePercent: 0.17,
        marketCap: "10.2T",
        peRatio: 35.9,
        volume: 3000000,
        avgVolume: 3200000,
        dividendYield: 1.10,
        earningsDate: "2022-02-24",
        sector: "Technology",
        country: "India",
        exchange: "NSE",
        graphData: [/* Array of data points for graph */],
        candlestickData: [/* Array of candlestick data */]
    },
    // Add more Indian stocks
    { 
        id: 4, 
        name: "HDFC Bank Ltd", 
        symbol: "HDFCBANK", 
        price: 1600.25, 
        change: -2.40, 
        changePercent: -0.15,
        marketCap: "8.5T",
        peRatio: 28.4,
        volume: 3500000,
        avgVolume: 3800000,
        dividendYield: 1.50,
        earningsDate: "2022-02-26",
        sector: "Banking",
        country: "India",
        exchange: "NSE",
        graphData: [/* Array of data points for graph */],
        candlestickData: [/* Array of candlestick data */]
    },
    { 
        id: 5, 
        name: "Hindustan Unilever Ltd", 
        symbol: "HINDUNILVR", 
        price: 2400.50, 
        change: 8.20, 
        changePercent: 0.34,
        marketCap: "5.3T",
        peRatio: 45.6,
        volume: 2000000,
        avgVolume: 2200000,
        dividendYield: 0.80,
        earningsDate: "2022-02-28",
        sector: "Consumer Goods",
        country: "India",
        exchange: "NSE",
        graphData: [/* Array of data points for graph */],
        candlestickData: [/* Array of candlestick data */]
    },
    { 
        id: 6, 
        name: "State Bank of India", 
        symbol: "SBIN", 
        price: 600.80, 
        change: 3.10, 
        changePercent: 0.52,
        marketCap: "3.2T",
        peRatio: 15.7,
        volume: 5000000,
        avgVolume: 5500000,
        dividendYield: 2.10,
        earningsDate: "2022-03-01",
        sector: "Banking",
        country: "India",
        exchange: "NSE",
        graphData: [/* Array of data points for graph */],
        candlestickData: [/* Array of candlestick data */]
    },
    { 
        id: 7, 
        name: "ITC Ltd", 
        symbol: "ITC", 
        price: 250.60, 
        change: -0.90, 
        changePercent: -0.36,
        marketCap: "2.6T",
        peRatio: 20.8,
        volume: 4000000,
        avgVolume: 4500000,
        dividendYield: 2.80,
        earningsDate: "2022-03-02",
        sector: "Consumer Goods",
        country: "India",
        exchange: "NSE",
        graphData: [/* Array of data points for graph */],
        candlestickData: [/* Array of candlestick data */]
    },
    { 
        id: 8, 
        name: "Axis Bank Ltd", 
        symbol: "AXISBANK", 
        price: 750.40, 
        change: 5.20, 
        changePercent: 0.70,
        marketCap: "2.8T",
        peRatio: 22.6,
        volume: 3000000,
        avgVolume: 3200000,
        dividendYield: 1.40,
        earningsDate: "2022-03-03",
        sector: "Banking",
        country: "India",
        exchange: "NSE",
        graphData: [/* Array of data points for graph */],
        candlestickData: [/* Array of candlestick data */]
    },
    { 
        id: 9, 
        name: "ICICI Bank Ltd", 
        symbol: "ICICIBANK", 
        price: 800.75, 
        change: 4.80, 
        changePercent: 0.60,
        marketCap: "3.5T",
        peRatio: 30.4,
        volume: 4500000,
        avgVolume: 5000000,
        dividendYield: 1.60,
        earningsDate: "2022-03-04",
        sector: "Banking",
        country: "India",
        exchange: "NSE",
        graphData: [/* Array of data points for graph */],
        candlestickData: [/* Array of candlestick data */]
    },
    { 
        id: 10, 
        name: "Bharti Airtel Ltd", 
        symbol: "BHARTIARTL", 
        price: 600.50, 
        change: -2.60, 
        changePercent: -0.43,
        marketCap: "2.0T",
        peRatio: 18.3,
        volume: 6000000,
        avgVolume: 6500000,
        dividendYield: 1.70,
        earningsDate: "2022-03-05",
        sector: "Telecom",
        country: "India",
        exchange: "NSE",
        graphData: [/* Array of data points for graph */],
        candlestickData: [/* Array of candlestick data */]
    },
    { 
        id: 11, 
        name: "NTPC Ltd", 
        symbol: "NTPC", 
        price: 120.20, 
        change: 0.80, 
        changePercent: 0.67,
        marketCap: "1.8T",
        peRatio: 15.5,
        volume: 7000000,
        avgVolume: 7500000,
        dividendYield: 3.20,
        earningsDate: "2022-03-06",
        sector: "Utilities",
        country: "India",
        exchange: "NSE",
        graphData: [/* Array of data points for graph */],
        candlestickData: [/* Array of candlestick data */]
    },
    { 
        id: 12, 
        name: "Bajaj Finance Ltd", 
        symbol: "BAJFINANCE", 
        price: 4800.00, 
        change: -22.50, 
        changePercent: -0.47,
        marketCap: "4.5T",
        peRatio: 40.8,
        volume: 2000000,
        avgVolume: 2200000,
        dividendYield: 0.90,
        earningsDate: "2022-03-07",
        sector: "Financial Services",
        country: "India",
        exchange: "NSE",
        graphData: [/* Array of data points for graph */],
        candlestickData: [/* Array of candlestick data */]
    },
    { 
        id: 13, 
        name: "Coal India Ltd", 
        symbol: "COALINDIA", 
        price: 180.75, 
        change: 1.50, 
        changePercent: 0.84,
        marketCap: "1.4T",
        peRatio: 12.6,
        volume: 8000000,
        avgVolume: 8500000,
        dividendYield: 5.80,
        earningsDate: "2022-03-08",
        sector: "Mining",
        country: "India",
        exchange: "NSE",
        graphData: [/* Array of data points for graph */],
        candlestickData: [/* Array of candlestick data */]
    },
    { 
        id: 14, 
        name: "Sun Pharmaceutical Industries Ltd", 
        symbol: "SUNPHARMA", 
        price: 750.60, 
        change: -3.40, 
        changePercent: -0.45,
        marketCap: "2.2T",
        peRatio: 30.2,
        volume: 3500000,
        avgVolume: 3800000,
        dividendYield: 0.80,
        earningsDate: "2022-03-09",
        sector: "Pharmaceuticals",
        country: "India",
        exchange: "NSE",
        graphData: [/* Array of data points for graph */],
        candlestickData: [/* Array of candlestick data */]
    },
    { 
        id: 15, 
        name: "Maruti Suzuki India Ltd", 
        symbol: "MARUTI", 
        price: 8000.20, 
        change: 50.20, 
        changePercent: 0.63,
        marketCap: "3.0T",
        peRatio: 30.9,
        volume: 500000,
        avgVolume: 550000,
        dividendYield: 1.00,
        earningsDate: "2022-03-10",
        sector: "Automobile",
        country: "India",
        exchange: "NSE",
        graphData: [/* Array of data points for graph */],
        candlestickData: [/* Array of candlestick data */]
    }
    // Add more Indian stocks
];

export default dummyStockData;
