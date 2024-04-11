import { useQuery } from '@tanstack/react-query'
import { NoUndefinedVariablesRule } from 'graphql';
import { request } from "graphql-request"


export const useGetQuery = (query, key, params) => {

    const baseUrl = `https://api-eu-west-2.hygraph.com/v2/clutfv5mt12p107wb4eyawbgn/master`

    const { data, isLoading, error } = useQuery ({
        queryKey: [key],
        queryFn: async () => request(baseUrl, query, params ? { ...params } : null)
    })

    return { data, isLoading, error };
    
};