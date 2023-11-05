import React, { useState, useEffect } from 'react';
import {Chart} from 'react-google-charts';

export const options = {
    title: "Break of rejection reasons",
};
  

export default function PieChart() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    const getData = React.useCallback(async () => {
        setData({'CreditScore': 4028, 'ltv': 4748, 'dti': 7457, 'fedti': 5586});
        console.log(data);
    }, []);

    useEffect(() => {
        setLoading(true);
        getData();
        setLoading(false);
    }, [getData]);

    return !loading ? (
        <>
            <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"400px"}
            />
        </>
    ) : (
        <>
        </>
    );
}