import React from 'react';
import { styled } from 'styled-components';

const TodoItem = ({id, content, isDone, createdDate, onUpdate, onDelete}) => {
  
  const onChangeCheckBox = () => {
    onUpdate(id)
  }

  const onClickDelte = () => {
    onDelete(id)
  }

  return (
    <TodoItemWrapper>
      <CheckBox>
        <input 
        type="checkbox" 
        checked={isDone}
        onChange={onChangeCheckBox}
        />
      </CheckBox>
      <Title>{content}</Title>
      <ToDate>{new Date(createdDate).toLocaleDateString()}</ToDate>
      <div className='btnbox'>
        <RemoveBtn onClick={onClickDelte}>삭제</RemoveBtn>
      </div>
    </TodoItemWrapper>
  );
};

const TodoItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(240,240,240);
`;

const CheckBox = styled.div`
  display: flex;
  align-items: center;
  width: 20px;
`;

const Title = styled.div`
  flex: 1;
`;

const ToDate = styled.div`
  font-size : 14px;
  color : gray;
`;

const RemoveBtn = styled.button`
  cursor: pointer;
  color : gray;
  font-size : 14px;
  border: none;
  border-radius: 5px;
  padding : 5px;
`;

export default TodoItem;
