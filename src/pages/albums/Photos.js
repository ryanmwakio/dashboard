import React, { useState,useEffect } from "react";
import { useParams } from "react-router";
import { useSelector,useDispatch} from "react-redux";
import ReactPaginate from "react-paginate";

import classes from "./Photos.module.css";
import Photo from "./Photo";
import { getPhotosAsync } from '../../redux/features/photoSlice';

function Photos() {

  const photos = useSelector((state) => state.photos);
  const dispatch=useDispatch();

  const { id } = useParams();
  const albumId = Number(id);

  useEffect(()=>{
    dispatch(getPhotosAsync({albumId}));
  },[dispatch,albumId])


  const photosForThisAlbum = photos.filter(
    (photo) => photo.albumId === albumId
  );

  

  //pagination variables
  const [pageNumber, setPageNumber] = useState(0);
  const photosPerPage = 6;
  const pagesVisited = pageNumber * photosPerPage;

  const displayPhotos = photosForThisAlbum
    .slice(pagesVisited, pagesVisited + photosPerPage)
    .map((photo) => {
      return (
        <Photo
          key={photo.id}
          id={photo.id}
          url={photo.url}
          thumbnailUrl={photo.thumbnailUrl}
          title={photo.title}
        />
      );
    });

  const pageCount = Math.ceil(photosForThisAlbum.length / photosPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <div className={classes.photos}>
        <h2>Photos</h2>
       
        <div className="row mt-4">{photosForThisAlbum && displayPhotos}</div>
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
    </>
  );
}

export default Photos;
