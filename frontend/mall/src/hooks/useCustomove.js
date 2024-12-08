import {createSearchParams, useNavigate, useSearchParams} from "react-router-dom"

constgetNum = (param, defaultValue) => {
    if (!param) {
        return defaultValue
    }
    return parseInt(param)
}

constuseCustomMove = () => {
    const navigate = useNavigate()
    const [queryParams] = useSearchParams()
    const page = getNum(queryParams.get('page'), 1)
    const size = getNum(queryParams.get('size'), 10)
    const queryDefault = createSearchParams({page, size}).toString()
    const moveToList = (pageParam) => {
        let queryStr = ""
        if (pageParam) {
            constpageNum = getNum(pageParam.page, 1)
            constsizeNum = getNum(pageParam.size, 10)
            queryStr = createSearchParams({page: pageNum, size: sizeNum}).toString()
        } else {
            queryStr = queryDefault
        }
    }
    return {moveToList, moveToModify, page, size}
}

export default useCustomMove