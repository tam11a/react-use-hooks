import {useState} from "react";

const usePaginate = ({ defaultParams }: Props) => {
  const [params, setParams] = useState({
    limit: defaultParams?.limit,
    page: defaultParams?.page,
    search: defaultParams?.search,
    filters: defaultParams?.filters,
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


interface Props {
    defaultParams: {
        limit: number,
        page: number,
        search: string,
        filters: {[key: string]: string}
    }
}

export default usePaginate;