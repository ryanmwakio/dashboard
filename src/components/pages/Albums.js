import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ReactPaginate from "react-paginate";

import classes from "./Albums.module.css";
import { getAlbums } from "../../redux/actions/albumActions";
import Album from "../layouts/albums/Album";

function Albums() {
  const baseUrl = "https://jsonplaceholder.typicode.com";

  const albums = useSelector((state) => state.albumReducer.albums);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  //pagination variables
  const [pageNumber, setPageNumber] = useState(0);
  const albumsPerPage = 6;
  const pagesVisited = pageNumber * albumsPerPage;

  const displayAlbums = albums
    .slice(pagesVisited, pagesVisited + albumsPerPage)
    .map((album) => {
      return <Album key={album.id} id={album.id} title={album.title} />;
    });

  const albumCount = Math.ceil(albums.length / albumsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const fetchAlbums = async () => {
    const req = axios.get(`${baseUrl}/albums`);

    const res = await req;
    req.then(
      () => {
        dispatch(getAlbums(res.data));
        setLoading(false);
      },
      (err) => err
    );
  };

  useEffect(() => {
    fetchAlbums();
    return () => {};
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <div className={classes.albums}>
        <h4>Albums</h4>
        {loading && <p>Loading...</p>}
        <div className="row mt-4">
          {albums && displayAlbums}
          <div className={classes.paginationContainer}>
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"next"}
              pageCount={albumCount}
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

export default Albums;
