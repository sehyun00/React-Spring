import {useCallback, useState} from "react"
import {createSearchParams, useNavigate, useSearchParams} from "react-router-dom"

const getNum = (param, defaultValue) => {

    if (!param) {
        return defaultValue
    }

    return parseInt(param)
}

const useCustomMove = () => {

    const navigate = useNavigate()

    const [refresh, setRefresh] = useState(false)

    const [queryParams] = useSearchParams()
    const page = queryParams.get("page")
        ? parseInt(queryParams.get("page"))
        : 1
    const size = queryParams.get("size")
        ? parseInt(queryParams.get("size"))
        : 10
    const queryDefault = createSearchParams({page, size}).toString()

    const moveToList = useCallback((pageParam) => {

        let queryStr = ""

        if (pageParam) {

            const pageNum = getNum(pageParam.page, 1)
            const sizeNum = getNum(pageParam.size, 10)

            queryStr = createSearchParams({page: pageNum, size: sizeNum}).toString()
        } else {
            queryStr = queryDefault
        }

        navigate({pathname: `../list`, search: queryStr})

        setRefresh(!refresh)

    }, [page, size])

    const moveToModify = useCallback((num) => {
        console.log(queryDefault)
        navigate({pathname: `../modify/${num}`, search: queryDefault})
    }, [page, size])

    const moveToRead = (num) => {
        console.log(queryDefault)
        navigate({pathname: `../read/${num}`, search: queryDefault})
    }

    return {moveToList, moveToModify, moveToRead, page, size, refresh}
}
export default useCustomMove