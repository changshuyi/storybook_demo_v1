import React, { useState } from 'react';
import './tagsInput.scss';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import useColor from '../../hooks/useColor';
import styled from 'styled-components';

const TagsInputContainer = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.42);
  width: 400px;
  // margin-top: 8px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5em;
`;

const TagItem = styled.div`
  display: inline-block;
  padding: 5px 8px;
  margin-bottom: 2px;
  border-radius: 3px;
  color: #fff;
  background-color: ${(props) => props.$tagColor};
`;

const TagText = styled.span``;

const TagCloseIcon = styled.span`
  height: 20px;
  width: 20px;
  background-color: rgb(48, 48, 48);
  color: #fff;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  margin-left: 10px;
  font-size: 9px;
  cursor: pointer;
`;

const TagInput = styled.input`
  flex-grow: 1;
  padding: 8px 0;
  border: none;
  outline: none;
`;

/**
 * `TagsInput` 同一欄位傳送用逗號分隔的資料可用。
 */

const TagsInput = ({
  value,
  placeholder,
  tagsSubmit,
  themeColor,
  isDisabled,
  closeIcon,
}) => {
  const [tags, setTags] = useState([]);
  const { makeColor } = useColor();
  const tagsColor = makeColor({ themeColor, isDisabled });

  useEffect(() => {
    setTags(value);
  }, [value]);

  const handleKeyDown = (e) => {
    if (e.key !== 'Enter') return;
    const value = e.target.value;
    if (!value.trim()) return;
    setTags([...tags, value]);
    e.target.value = '';
    tagsSubmit([...tags, value]);
  };

  const removeTag = (index) => {
    console.log('index = ', index);
    setTags(tags.filter((el, i) => i !== index));
    tagsSubmit(tags.filter((el, i) => i !== index));
  };

  return (
    <TagsInputContainer>
      {tags?.map((tag, index) => (
        <TagItem $tagColor={tagsColor} key={index}>
          <TagText>{tag}</TagText>
          <TagCloseIcon onClick={() => removeTag(index)}>
            {closeIcon}
          </TagCloseIcon>
        </TagItem>
      ))}
      <TagInput
        onKeyDown={handleKeyDown}
        type="text"
        placeholder={placeholder}
      />
    </TagsInputContainer>
  );
};

TagsInput.propTypes = {
  /**
   * tags的內容
   */
  value: PropTypes.array,
  /**
   * tags欄位的提醒或是說明
   */
  placeholder: PropTypes.string,
  /**
   * tags value callback function
   */
  tagsSubmit: PropTypes.func,
  /**
   * 主題配色，primary、secondary 或是自己傳入色碼
   */
  themeColor: PropTypes.oneOfType([
    PropTypes.oneOf(['primary', 'secondary']),
    PropTypes.string,
  ]),
  /**
   * 禁用狀態
   */
  isDisabled: PropTypes.bool,
  /**
   * 設置關閉右方圖示
   */
  closeIcon: PropTypes.element,
  /**
   * 設置tag類型
   */
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
};

TagsInput.defaultProps = {
  value: [],
  placeholder: '請輸入',
  tagsSubmit: () => {},
  themeColor: 'primary',
  isDisabled: false,
  closeIcon: null,
  variant: 'contained',
};

export default TagsInput;
