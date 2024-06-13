import { useEffect } from "react";
import usePagination from "./hooks/pagination";

const Pagination = (props) => {
  const { pageNumber, changePage, pageData, nextPage, previousPage } =
    usePagination(props.items, props.pageLimit);

  useEffect(() => {
    props.setPageItems(pageData);
  }, [pageNumber]);
};

export default Pagination;
