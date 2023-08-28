import React from "react";
import {Pagination} from "@nextui-org/react";

interface IProp {
    page: number,
    total_pages: number
    handleClick: () => void
}

const ListPagination:React.FC<IProp> = ({page, total_pages, handleClick}) => {

    console.log("Page number in ListPagination: ", page)

    return(
        <div>
            <Pagination total={total_pages} initialPage={page} onChange={handleClick}/>
        </div>
    )
}

export default ListPagination