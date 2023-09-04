import React from 'react'
import { Radio } from 'antd';

export const AnyOrAllToggle = ({anyOrAll, setAnyOrAll}) => {
    return <>
    <Radio.Group value={anyOrAll} onChange={(e) => setAnyOrAll(e.target.value)} size={'small'}>
      <Radio.Button value="any">any</Radio.Button>
      <Radio.Button value="all">all</Radio.Button>
    </Radio.Group>
    </>
}