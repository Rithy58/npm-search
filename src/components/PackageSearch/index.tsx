import React, { useState } from 'react'
import { useAppDispatch, searchPackage } from '../../state'

const PackageSearch = () => {
    const [name, setName] = useState('')

    const dispatch = useAppDispatch()

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch(searchPackage(name))
    }

    return (
        <form onSubmit={ onSubmit }>
            <input value={ name } onChange={ (e) => setName(e.target.value) } />
            <button>Search</button>
        </form>
    )
}

export default PackageSearch
