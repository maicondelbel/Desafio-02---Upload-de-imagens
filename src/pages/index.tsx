import { Button, Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

export default function Home(): JSX.Element {
  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ['images'],
    queryFn: async ({ pageParam = null }) => {
      const response = await api.get(`/api/images`,{
        params: {
          after: pageParam,
        }
      })
      return response.data
    },
    getNextPageParam: (lastPage) => {
      return lastPage.after
    },
  })
  
  const formattedData = useMemo(() => {
    const formatted = data?.pages.flatMap(imageData => {
      return imageData.data.flat();
    });

    return formatted;
  }, [data]);
  
  if(isLoading) {
    return (<Loading />)
  }

  if(isError) {
    return (<Error />)
  }

  return (
    <>
      <Header />
      <Box maxW={1120} px={20} mx="auto" my={20}>
        <CardList cards={formattedData} />
        {hasNextPage && (
          <Button mt={10} onClick={() => {fetchNextPage()}}>{isFetchingNextPage ? 'Carregando...' : 'Carregar mais'}</Button>
        )}
      </Box>
    </>
  );
}
