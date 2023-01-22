import React, { useState } from 'react';
import { SelectList } from 'react-native-select-bottom-list';

const WithdarwUsdtSelectList = () => {
    const [value, setValue] = useState('Select');

    return (
        <SelectList
            onSelect={(item, index) => setValue(item)}
            value={value}
            placeHolder={'Select Network'}
            data={[
                'TRC 20 - Send on the Tron network',
                'ERC 20 - Send on the Ethereum network',
                'SOL - Send on the Solana Chain Network',
            ]}
            style={{ backgroundColor: '#2F2E32', borderColor: "#2F2E32", borderRadius: 8, paddingVertical: 18, marginTop:6, width:365 }}
            textStyle={{ fontSize: 14, color: '#A2A1A2' }}
            headerTitle={'Network'}
            headerStyle={{ backgroundColor: '#242326' }}
            headerTextStyle={{ color: '#ffffff', fontSize: 24 }}
            itemTextStyle={{ fontSize: 14, color: "#ffffff" }}
            itemStyle={{ flex: 1, backgroundColor: '#242326' }}
        />
    )
}

export default WithdarwUsdtSelectList;