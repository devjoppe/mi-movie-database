import React from "react";
import {Pagination} from "@nextui-org/react";
import {useNavigate} from "react-router-dom";

interface IProp {
    page: number,
    total_pages: number
    id_param: string,
    genre_param: string,
    type: string
}

const ListPagination:React.FC<IProp> = ({page, total_pages, type, id_param, genre_param}) => {

    const navigate = useNavigate()

    const changePage = (newPage: number) => {
        if(type === "genre") {
            navigate(`/movies/${genre_param}?id=${id_param}&page=${newPage.toString()}`)
        }
        if(type === "search") {
            navigate(`/search/?query=${genre_param}&page=${newPage.toString()}`)
        }
    }

    return(
        <div>
            <Pagination total={total_pages} initialPage={1} page={page} onChange={changePage}/>
        </div>
    )
}

export default ListPagination