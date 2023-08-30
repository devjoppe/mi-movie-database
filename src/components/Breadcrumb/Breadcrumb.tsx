import {useLocation, Link} from "react-router-dom";


const Breadcrumb = () => {

    const location = useLocation()
    let currentLink = ""

    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
            currentLink += `/${crumb}`

            return (
                <div key={crumb}>
                    <Link to={currentLink}>{crumb}</Link>
                </div>
            )
        })

    console.log(crumbs)

    return (
        <div className="flex pl-4 pr-4 mt-2 mb-2">
            Start {crumbs}
        </div>
    );
}

export default Breadcrumb;