import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const API_BASE_URL = "https://api.coingecko.com/api/v3"

// Helper function to handle API calls with CORS headers
const fetchWithCORS = async(url) => {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            mode: 'cors',
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json();
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};

export const fetchCurrentPrice = createAsyncThunk(
    "crypto/fetchCurrentPrice",
    async(crypto) => {
        const data = await fetchWithCORS(
            `${API_BASE_URL}/simple/price?ids=${crypto}&vs_currencies=usd&include_24hr_change=true`
        );
        return data[crypto];
    }
);

export const fetchHistoricalData = createAsyncThunk(
    "crypto/fetchHistoricalData",
    async(crypto) => {
        const data = await fetchWithCORS(
            `${API_BASE_URL}/coins/${crypto}/market_chart?vs_currency=usd&days=7&interval=daily`
        );
        return data.prices;
    }
);

export const fetchOverviewData = createAsyncThunk(
    "crypto/fetchOverviewData",
    async(crypto) => {
        const data = await fetchWithCORS(
            `${API_BASE_URL}/coins/${crypto}`
        );
        return data;
    }
);

const cryptoSlice = createSlice({
    name: "crypto",
    initialState: {
        selectedCrypto: "bitcoin",
        currentPrice: 0,
        priceChange: 0,
        historicalData: [],
        overviewData: null,
        loading: false,
        error: null,
    },
    reducers: {
        setSelectedCrypto: (state, action) => {
            state.selectedCrypto = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCurrentPrice.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCurrentPrice.fulfilled, (state, action) => {
                state.currentPrice = action.payload.usd;
                state.priceChange = action.payload.usd_24h_change;
                state.loading = false;
            })
            .addCase(fetchCurrentPrice.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchHistoricalData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchHistoricalData.fulfilled, (state, action) => {
                state.historicalData = action.payload;
                state.loading = false;
            })
            .addCase(fetchHistoricalData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchOverviewData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchOverviewData.fulfilled, (state, action) => {
                state.overviewData = action.payload;
                state.loading = false;
            })
            .addCase(fetchOverviewData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { setSelectedCrypto } = cryptoSlice.actions;

export default cryptoSlice.reducer;