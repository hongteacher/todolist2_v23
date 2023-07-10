import React, { useRef, useState } from 'react';
import { styled } from 'styled-components';

const TodoEditor = ({onCreate}) => {
  const [content, setContent] = useState("")
  console.log(content)
  const inputRef = useRef()

  const onChangeContent = (e) => {
    setContent(e.target.value)
  }

  // content에 빈 문자열이면 input에 커서가 들어감
  const onSubmit = () => {
    if(!content){
      inputRef.current.focus()
      return
    }
    onCreate(content)
    setContent("") //아이템 추가 후 입력상자 초기화
  }

  //Enter키로 아이템 추가하기
  const onKeyDown = (e) => {
    if(e.keyCode === 13){ //13은 Enter키를 의미
      onSubmit()
    }
  }

  return (
    <>
      <h4>새로운 Todo 작성하기 ✏️</h4>
      <EditWrapper>
        <input 
        type="text" 
        placeholder='새로운 Todo...'
        value={content} 
        onChange={onChangeContent}
        ref={inputRef}
        onKeyDown={onKeyDown}
        />
        <InsertBtn onClick={onSubmit}>추가</InsertBtn>
      </EditWrapper>
    </>
  );
};

const EditWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;

  input{
    flex: 1;
    box-sizing: border-box;
    border: 1px solid rgb(220,220,220);
    border-radius: 5px;
    padding: 15px;
  }
  input:focus{
    outline: none;
    border: 1px solid #DE4E40;
  }
`;

const InsertBtn = styled.button`
  cursor: pointer;
  width: 80px;
  border: none;
  background: #DE4E40;
  color:#fff;
  border-radius: 5px;
`;

export default TodoEditor;
