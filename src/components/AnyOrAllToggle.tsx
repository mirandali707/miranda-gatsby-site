import React from 'react'
import { Radio } from 'antd';

const AnyOrAllToggle = ({anyOrAll, setAnyOrAll}) => {
    return <>
    <Radio.Group value={anyOrAll} onChange={(e) => setAnyOrAll(e.target.value)}>
      <Radio.Button value="any">any</Radio.Button>
      <Radio.Button value="all">all</Radio.Button>
    </Radio.Group>
    </>
}

export default AnyOrAllToggle;