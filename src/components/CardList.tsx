import { Grid, GridItem, SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE
  const { onOpen, isOpen, onClose } = useDisclosure();
  
  // TODO SELECTED IMAGE URL STATE
  const [imgUrl, setImgUrl] = useState('')

  // TODO FUNCTION HANDLE VIEW IMAGE
  function handleViewImage(imgUrl: string) {
    setImgUrl(imgUrl)
    onOpen()
  }

  return (
    <>
      <Grid templateColumns='repeat(3, 1fr)' gap={10}>
      {cards.map((card) => {
        return (
          <GridItem key={card.id}>
           <Card key={card.ts} data={card} viewImage={() => handleViewImage(card.url)} />
          </GridItem>
        )
      })}
      </Grid>

      <ModalViewImage isOpen={isOpen} onClose={onClose} imgUrl={imgUrl}/>
    </>
  );
}
