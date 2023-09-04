import React from 'react';
import { Select, Tag, Tooltip } from 'antd';
import type { CustomTagProps } from 'rc-select/lib/BaseSelect';
import { tagProperties, tagInfo } from './tagProperties'

const tagRender = (props: CustomTagProps) => {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
      event.preventDefault();
      event.stopPropagation();
    };
    return (
    // TODO: add tooltips?
    // <Tooltip placement="top" title={tagProperties[label].text}>
      <Tag
        color={value}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{ marginRight: 3 }}
      >
        {label}
      </Tag>
    //   </Tooltip>
    );
  };

export const TagFilterSelect = () => {    
    return <Select
    mode="multiple"
    tagRender={tagRender}
    defaultValue={tagInfo}
    style={{ width: '100%' }}
    options={tagInfo}
  />
}