import React,{useEffect,useState,Fragment} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAlbumsAsync } from '../../redux/features/albumSlice';
import ReactPaginate from "react-paginate";


import Album from './Album';
import classes from "./Albums.module.css";

function Albums() {

    const albums = useSelector((state) => state.albums);
    const dispatch = useDispatch();

    useEffect(() => {
		dispatch(getAlbumsAsync());
	}, [dispatch]);

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

    return (
        <Fragment>
        <div className={classes.albums}>
          <h4>Albums</h4>
          
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
    )
}

export default Albums
