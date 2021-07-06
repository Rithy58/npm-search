import React from 'react'
import { useNpmPackageSearchQuery } from '../../services/npmApi'
import { useAppDispatch, searchPackageError, searchPackageSuccess } from '../../state'

const PackageList = ({name} : {name: string}) => {
    const { data, error, isError, isSuccess, isLoading, isFetching } = useNpmPackageSearchQuery(name)
    const dispatch = useAppDispatch()

    if(isError) {
      dispatch(searchPackageError(JSON.stringify(error)))
    }

    if(isSuccess) {
      dispatch(searchPackageSuccess())
    }

    return (
        <div>
          { isError ? (<>Oh no, there was an error! {JSON.stringify(error)}</>) :
            isLoading ? (<>Loading...</>) :
            data && data.length > 0 ?
              data.map((packageData) => {
                  return <>
                    <h3>{packageData.name}</h3>
                    <p>Description: {packageData.description}</p>
                  </>
              }) :
            isFetching ? ( <>Fetching...</>) :
            (<>No Data</>)
          }
        </div>
    )
}

export default PackageList
