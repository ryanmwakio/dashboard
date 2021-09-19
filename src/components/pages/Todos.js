import React, { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import ReactPaginate from "react-paginate";

import classes from "./Todos.module.css";
import { getTodos } from "../../redux/actions/todoActions";
import Todo from "../layouts/todos/Todo";

function Todos() {
  const baseUrl = "https://jsonplaceholder.typicode.com";

  const todos = useSelector((state) => state.todoReducer.todos);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

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

  const fetchTodos = async () => {
    const req = axios.get(`${baseUrl}/todos`);

    const res = await req;

    req.then(
      () => {
        dispatch(getTodos(res.data));
        setLoading(false);
      },
      (err) => err
    );
  };

  useEffect(() => {
    fetchTodos();
    return () => {};
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <div className={classes.todos}>
        <h4>Todos</h4>
        {loading && <p>Loading...</p>}
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
  );
}

export default Todos;
