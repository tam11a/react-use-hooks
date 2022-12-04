import {useState} from "react";

interface IParams {
  limit?: number,
  page?: number,
  search?: string,
  filters?: {[key: string]: string}
}

const defaultParams: IParams = {
  limit: 10,
  page: 1,
  search: "",
  filters: {}
}

interface IProps {
  defaultParams?: typeof defaultParams
}

const usePaginate = (props?: IProps) => {
  const [params, setParams] = useState({
    limit: props?.defaultParams?.limit || defaultParams?.limit,
    page: props?.defaultParams?.page || defaultParams?.page,
    search: props?.defaultParams?.search || defaultParams?.search,
    filters: props?.defaultParams?.filters || defaultParams?.filters,
  });

  const setSearch = (text: any) =>
    setParams({
      ...params,
      search: text,
    });

  const setPage = (newPage: number) =>
    setParams({
      ...params,
      page: newPage + 1,
    });

  const setLimit = (newLimit: number) =>
    setParams({
      ...params,
      limit: newLimit,
    });

  const getFilter = (key: any) => params?.filters?.[key] || undefined;
  const setFilterField = (key: any, value: any) =>
    setParams({
      ...params,
      filters: {
        ...params?.filters,
        [key]: value,
      },
    });

  const getQueryParams = () => {
    return JSON.parse(
      JSON.stringify({
        ...params,
        filters: undefined,
        ...params.filters,
      })
    );
  };

  return {
    params,
    search: params?.search,
    setSearch,
    page: (params?.page || 1) - 1,
    setPage,
    limit: params?.limit,
    setLimit,
    watch: getFilter,
    setFilterField,
    getQueryParams,
  };
};




export default usePaginate;