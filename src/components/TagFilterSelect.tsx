import React from 'react';
import { Select, Tag, Tooltip } from 'antd';
import type { CustomTagProps } from 'rc-select/lib/BaseSelect';
import { tagProperties } from '../data/tagProperties'

const TagFilterSelect = ({ setActiveTags }) => {    
  const tagInfo = Object.keys(tagProperties)
  .map((tag)=> {
      return {
          label : tag,
          value: tag
      }
  })

  return <Select
  mode="multiple"
  allowClear={true}
  tagRender={tagRender}
  defaultValue={tagInfo}
  style={{ width: '100%', marginBottom: '1rem' }}
  options={tagInfo}
  onChange={(newActiveTags) => {
    setActiveTags([...newActiveTags])
  }}
/>
}

const tagRender = (props: CustomTagProps) => {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
      event.preventDefault();
      event.stopPropagation();
    };
    return (
    <Tooltip placement="top" title={tagProperties[value].text}>
      <Tag
        color={tagProperties[value].color}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{ marginRight: 3 }}
      >
        {label}
      </Tag>
    </Tooltip>
    );
  };

export default TagFilterSelect;