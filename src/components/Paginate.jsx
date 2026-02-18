import React, {useState} from 'react';
import ReactPaginate from 'react-paginate';
import SingleFlashCard from "./SingleFlashCard.jsx";
import {useSelector} from "react-redux";

function Paginate({itemsPerPage}) {

    const items = useSelector((state) => state.products.filtered);

    function Items({currentItems}) {
        return (
          <>
            {currentItems &&
              currentItems.map((item, i) => (
                <SingleFlashCard
                  key={i}
                  image={item.thumbnail}
                  title={item.title}
                  newPrice={item.discountPercentage}
                  oldPrice={item.price}
                  rating={item.rating}
                  reviews={item.reviews.length}
                  id={item.id}
                  productDetail={item}
                />
              ))}
          </>
        );
    }

    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        // console.log(
        //     `User requested page number ${event.selected}, which is offset ${newOffset}`
        // );
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items currentItems={currentItems}/>
            {pageCount > 1 && (
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=""
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel=""
                    renderOnZeroPageCount={null}
                    pageClassName={"px-6.5 py-0.5 bg-black text-white font-bold cursor-pointer"}
                    className={"flex gap-2.5"}
                />
            )}

        </>
    );
}

export default Paginate;