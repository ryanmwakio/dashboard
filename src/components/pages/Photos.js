import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import ReactPaginate from "react-paginate";

import classes from "./Photos.module.css";
import { getPhotos } from "../../redux/actions/photoActions";
import Photo from "../layouts/photos/Photo";

function Photos() {
  const baseUrl = "https://jsonplaceholder.typicode.com";

  const photos = useSelector((state) => state.photoReducer.photos);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const albumId = Number(id);

  const fetchPhotos = async () => {
    const req = axios.get(`${baseUrl}/photos`);

    const res = await req;

    req.then(
      () => {
        dispatch(getPhotos(res.data));
        setLoading(false);
      },
      (err) => err
    );
  };

  useEffect(() => {
    fetchPhotos();
    return () => {};
    // eslint-disable-next-line
  }, []);

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
        {loading && <p>Loading...</p>}
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
