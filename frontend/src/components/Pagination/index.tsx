import './styles.css';
import ArrowIcon  from '../../assets/img/arrow.svg';
import ReactPaginate from 'react-paginate';

type Props = {
    pageCount: number,
    range: number,
    onChange?: (pageNumber: number) => void;
}

function Pagination({ pageCount, range, onChange }: Props) {

    return (
        <>
            <ReactPaginate
                pageCount={pageCount}
                pageRangeDisplayed={range}
                marginPagesDisplayed={1}
                containerClassName="pagination-container"
                pageLinkClassName="pagination-item"
                breakLinkClassName="pagination-item"
                previousClassName="arrow-previous"
                nextClassName="arrow-next"
                activeLinkClassName="pagination-link-active"
                disabledClassName="arrow-inactive"

                previousLabel={<div className="pagination-arrow-container"><ArrowIcon /></div>}
                nextLabel={<div className="pagination-arrow-container"><ArrowIcon /></div>}
                onPageChange={(items) => (onChange) ? onChange(items.selected) : {}}
            />
        </>
    )
}

export default Pagination;