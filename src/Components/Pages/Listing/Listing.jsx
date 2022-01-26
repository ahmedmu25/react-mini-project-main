import React, { useContext, useState, useEffect } from 'react';
import { ListDataContext } from '../../Context/listingContext';
import { Row, Pagination } from 'react-bootstrap';
import { CustomDropDown } from '../../';
import ListingCard from './ListingCard';

const Listing = () => {
  const listContextData = useContext(ListDataContext);
  const [fullList, setFullList] = useState([]);
  const [fiterResult, setFilter] = useState('');
  const [sortSelect, setSortSelect] = useState('0');
  const [pageSize, setPageSize] = useState(25);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  // Helper Function For Filtering Results //
  const filterHelper = (results, fiterResult) => {
    const filteredResult = results.filter(data => {
      let namePrice = data.name;
      return (
        namePrice
          .toLowerCase()
          .indexOf(fiterResult !== null && fiterResult.toLowerCase()) !== -1
      );
    });
    return filteredResult;
  };

  // Sorting Helper //
  const sortingHelper = (results, sort) => {
    if (results.length > 1 && sort !== '0') {
      if (sort === '1') {
        return results.sort((a, b) =>
          a.featured === b.featured ? 0 : a.featured ? -1 : 1
        );
      }
      if (sort === '2') {
        results.sort((a, b) => {
          const aPrice =
            a.price[0] === '$' ? parseFloat(a.price.slice(1, -1)) : 0;
          const bPrice =
            b.price[0] === '$' ? parseFloat(b.price.slice(1, -1)) : 0;
          return aPrice - bPrice;
        });
      }
      if (sort === '3') {
        results.sort((a, b) => {
          const aPrice =
            a.price[0] === '$' ? parseFloat(a.price.slice(1, -1)) : 0;
          const bPrice =
            b.price[0] === '$' ? parseFloat(b.price.slice(1, -1)) : 0;
          return bPrice - aPrice;
        });
      }
    } else return results;
  };

  // Use Effects for different updates //
  useEffect(() => {
    if (listContextData.isLoaded) {
      setFullList(listContextData.listData);
      setFilter(listContextData.filter);
      setPageCount(Math.ceil(listContextData.listData.length / pageSize));
    }
  }, [listContextData, pageSize]);
  useEffect(() => {
    setPageCount(Math.ceil(listContextData.listData.length / pageSize));
  }, [pageSize, listContextData.listData.length]);

  const filteredList = filterHelper(fullList, fiterResult);
  sortingHelper(filteredList, sortSelect);

  return (
    <React.Fragment>
      <Row xs={1} md={2} className='mb-4'>
        <CustomDropDown for='sort' onChange={setSortSelect} />
        <CustomDropDown for='page' onChange={setPageSize} />
      </Row>

      {filteredList.slice(currentPage * pageSize, (currentPage + 1) * pageSize)
        .length < 1 ? (
        <div className='col align-self-end'>
          No Item Found, Please search again
        </div>
      ) : (
        <React.Fragment>
          <Row xs={1} md={2} className='g-4'>
            {filteredList
              .slice(currentPage * pageSize, (currentPage + 1) * pageSize)
              .map((data, i) => {
                return <ListingCard {...data} key={`listingCard-${i}`} />;
              })}
          </Row>

          <Row className='mt-2'>
            <Pagination className='justify-content-center'>
              <Pagination.First
                onClick={() => {
                  setCurrentPage(0);
                }}
              />
              <Pagination.Prev
                onClick={() => {
                  if (currentPage >= 1) {
                    setCurrentPage(currentPage - 1);
                  }
                }}
              />

              {[...Array(pageCount)].map((e, i) => {
                return (
                  <Pagination.Item
                    onClick={() => {
                      setCurrentPage(i);
                    }}
                    active={i === currentPage}
                    key={i}
                  >
                    {i + 1}
                  </Pagination.Item>
                );
              })}

              <Pagination.Next
                onClick={() => {
                  if (pageCount <= currentPage) setCurrentPage(currentPage + 1);
                }}
              />
              <Pagination.Last
                onClick={() => {
                  setCurrentPage(pageCount - 1);
                }}
              />
            </Pagination>
          </Row>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

Listing.propTypes = {};

export default Listing;
