import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Package {
    name: string
    description: string
}

interface Result {
    objects: [{package: Package}]
}

export const npmApi = createApi({
    reducerPath: 'npmApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://registry.npmjs.org/' }),
    endpoints: (builder) => ({
        npmPackageSearch: builder.query<Package[], string>({
            query: (name: string) => `-/v1/search?text=${name}`,
            transformResponse: (rawResult: Result) => {
                return rawResult.objects.map(el => el.package)
            }
        })
    })
})

export const { useNpmPackageSearchQuery } = npmApi
