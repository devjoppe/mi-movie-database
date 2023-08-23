import {useIsFetching} from "@tanstack/react-query";
import {CircularProgress} from "@nextui-org/react";

const GlobalLoading = () => {
    const isFetching = useIsFetching()
    return isFetching ? (
        <CircularProgress size="lg" aria-label="Loading..." />
    ) : null
}

export default GlobalLoading