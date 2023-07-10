import './App.css';
import Header from 'components/Header';
import TodoEditor from 'components/TodoEditor';
import TodoList from 'components/TodoList';
import { useRef, useState } from 'react';
import { styled } from 'styled-components';
import { Helmet } from 'react-helmet-async';


const mockTodo = [
  {
    id : 0 ,
    isDone : false,
    content : 'React 공부하기',
    createdDate : new Date().getTime(),
  },
  {
    id : 1,
    isDone : false,
    content : 'JavaScript 공부하기',
    createdDate : new Date().getTime(),
  },
  {
    id : 2 ,
    isDone : false,
    content : 'CSS 공부하기',
    createdDate : new Date().getTime(),
  },
]


function App() {
  const [todo, setTodo] = useState(mockTodo);
  console.log(todo)

  //고유 id생성
  //3을 설정한 이유는 목데이터에 id가 0~2번으로 만들어졌기 때문임.
  const idRef = useRef(3)

  //새 할 일 아이템을 추가하는 함수 onCreate
  const onCreate = (content) => {
    const newItem = {
      id : idRef.current,
      isDone : false,
      content,
      createdDate : new Date().getTime()
    };
    setTodo([newItem, ...todo]);
    idRef.current += 1;
  }

  //할 일 수정을 위한 함수
  const onUpdate = (targetId) => {
    setTodo(todo.map(
      (it) => {
        if(it.id === targetId){
          return{
            ...it,
            isDone : !it.isDone,
          } 
        } else {
          return it;
        }
      }
    ))
  } 

  //할 일을 삭제 하는 함수
  const onDelete = (targetId) => {
    setTodo(todo.filter((it) => it.id !== targetId))
  }
  

  return (
    <Wrapper>
      {/* <Helmet>
        <title>Todo List</title>
      </Helmet> */}
      <Header/>
      <TodoEditor onCreate={onCreate} /> 
      <TodoList 
      todo={todo} 
      onUpdate={onUpdate}
      onDelete={onDelete} 
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export default App;
