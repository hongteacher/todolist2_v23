import React, { useState } from 'react';
import { styled } from 'styled-components';
import TodoItem from './TodoItem';

const TodoList = ({todo, onUpdate, onDelete}) => {
  const [search, setSerch] = useState("")

  const onChangeSearch = (e) => {
    setSerch(e.target.value)
  }

  const getSerchResult = () => {
    return search === "" ? todo 
    : todo.filter((it) => it.content.toLowerCase().includes(search.toLowerCase()))
  }


  return (
    <div>
      <h4>Todo list 🌱</h4>
      <SearchBar 
      type="text" 
      placeholder='검색어를 입력하세요.' 
      onChange={onChangeSearch}  
      />
      <ListWrapper>
        {getSerchResult().map(
          (it) => (
            <TodoItem 
            key={it.id} 
            {...it} 
            onUpdate={onUpdate} 
            onDelete={onDelete}
            />
          )
        )}
      </ListWrapper>
    </div>
  );
};

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const SearchBar = styled.input`
  box-sizing: border-box;
  width: 100%;
  border: none;
  border-bottom: 1px solid #ccc;
  padding : 15px 0;
  margin-bottom: 20px;
  &:focus{
    outline: none;
    border-bottom: 1px solid #DE4E40;
  }
`;

export default TodoList;
