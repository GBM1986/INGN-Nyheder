import { useQuery } from '@tanstack/react-query'
import { NoUndefinedVariablesRule } from 'graphql';
import { request } from "graphql-request"


export const useGetQuery = (query, key, params) => {

    const baseUrl = import.meta.env.VITE_baseUrl

    const { data, isLoading, error } = useQuery ({
        queryKey: [key],
        queryFn: async () => request(baseUrl, query, params ? { ...params } : null)
    })

    return { data, isLoading, error };
    
};