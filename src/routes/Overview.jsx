import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchOverviewData } from "../store/cryptoSlice";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

const Overview = () => {
  const dispatch = useDispatch();
  const { selectedCrypto, overviewData } = useSelector((state) => state.crypto);

  useEffect(() => {
    if (selectedCrypto) {
      dispatch(fetchOverviewData(selectedCrypto));
    }
  }, [dispatch, selectedCrypto]);

  if (!overviewData) return <div>Loading...</div>;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Cryptocurrency Overview</h1>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">
            {overviewData.name || "Unknown"} Overview
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-2">
          {/* Market Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Market Information</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Market Cap</p>
                <p className="text-lg font-semibold">
                  ${overviewData.market_cap ? overviewData.market_cap.toLocaleString() : "N/A"}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Supply</p>
                <p className="text-lg font-semibold">
                  {overviewData.total_supply ? overviewData.total_supply.toLocaleString() : "N/A"}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Circulating Supply</p>
                <p className="text-lg font-semibold">
                  {overviewData.circulating_supply ? overviewData.circulating_supply.toLocaleString() : "N/A"}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">All-time High</p>
                <p className="text-lg font-semibold">
                  ${overviewData.ath ? overviewData.ath.toLocaleString() : "N/A"}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Market Cap Rank</p>
                <p className="text-lg font-semibold">
                  #{overviewData.market_cap_rank || "N/A"}
                </p>
              </div>
            </div>
          </div>

          {/* Cryptocurrency Description */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Description</h3>
            <p className="text-muted-foreground leading-relaxed">
              {overviewData.description?.en || "No description available for this cryptocurrency."}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Overview;
