
export const paginationhelper=(totalPages,currentpage)=>{
    var startPage, EndPage;
    if (totalPages <= 10) {
      startPage = 1;
      EndPage = totalPages;
    }
    else {
      if (currentpage <= 6) {
        startPage = 1;
        EndPage = 10;
      }
      else if (currentpage + 4 >= totalPages) {
        startPage = totalPages - 9;
        EndPage = totalPages
      }
      else {
        startPage = currentpage - 5;
        EndPage = currentpage + 4;
      }
    }

    return {startPage,EndPage}
}
