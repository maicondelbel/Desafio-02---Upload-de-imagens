import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  const handleCloseModal = (): void => {
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal} isCentered size="4xl">
    <ModalOverlay />
    <ModalContent
        mx="auto"
        w="auto"
        h="auto"
        maxWidth={'900px'}
        maxHeight={'600px'}
      >
        <ModalBody p="0">
          <Image
            src={imgUrl}
            maxWidth={'900px'}
            maxHeight={'600px'}
          />
        </ModalBody>
        <ModalFooter
          bg="pGray.800"
          height="2rem"
          py="20px"
          borderBottomRadius="5px"
        >
          <Link href={imgUrl} isExternal fontSize="1rem" mr="auto">
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
  </Modal>
  )
}
