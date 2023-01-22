import React, { useState } from 'react';
import { SelectList } from 'react-native-select-bottom-list';

const DepositUsdtSelectList = () => {
    const [value, setValue] = useState('Select');

    return (
        <SelectList
            onSelect={(item, index) => setValue(item)}
            value={value}
            data={[
                'TRC 20 ',
                'ERC 20',
                'SOL ',
            ]}
            style={{ backgroundColor: '#F3F3F3', width: 80, marginTop:28, borderWidth:1, borderColor:"#242326"}}
            headerTitle={'Network'}
            headerStyle={{ backgroundColor: '#242326' }}
            headerTextStyle={{ color: '#ffffff', fontSize: 24 }}
            textStyle={{ fontSize: 16, color: '#2F2E32' }}
            itemTextStyle={{ fontSize: 14, color: "#ffffff" }}
            itemStyle={{ backgroundColor: '#242326' }}
        />
    )
}

export default DepositUsdtSelectList;