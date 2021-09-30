import React,{useEffect,useState,Fragment} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTodosAsync } from '../../redux/features/todoSlice';
import ReactPaginate from "react-paginate";

import Todo from './Todo';
import classes from "./Todos.module.css";

function Todos() {

    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {
		dispatch(getTodosAsync());
	}, [dispatch]);

     //pagination variables
  const [pageNumber, setPageNumber] = useState(0);
  const todosPerPage = 12;
  const pagesVisited = pageNumber * todosPerPage;

  const displayTodos = todos
    .slice(pagesVisited, pagesVisited + todosPerPage)
    .map((todo) => {
      return (
        <Todo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
        />
      );
    });

  const pageCount = Math.ceil(todos.length / todosPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

    return (
        <Fragment>
        <div className={classes.todos}>
          <h4>Todos</h4>
     
          <div className="row mt-4">
            {todos && displayTodos}
            <div className={classes.paginationContainer}>
              <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={classes["paginationBttns"]}
                previousLinkClassName={classes["previousBttn"]}
                nextLinkClassName={classes["nextBttn"]}
                disabledClassName={classes["paginationDisabled"]}
                activeClassName={classes["paginationActive"]}
              />
            </div>
          </div>
        </div>
      </Fragment>
    )
}

export default Todos
