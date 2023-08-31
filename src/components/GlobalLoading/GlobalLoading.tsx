import {useIsFetching} from "@tanstack/react-query";
import {Progress} from "@nextui-org/react";

const GlobalLoading = () => {
    const isFetching = useIsFetching()
    return isFetching ? (
            <Progress
                size="sm"
                isIndeterminate
                aria-label="Loading..."
                className="max-w-md"
            />
    ) : null
}

export default GlobalLoading