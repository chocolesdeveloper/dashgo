import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList () {
    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Listagem de usuários</Heading>

                        <Button
                          as="a"
                          size="sm"
                          fontSize="sm"
                          colorScheme="pink"
                          leftIcon={<Icon as={RiAddLine} fontSize="20"/>}
                          >
                            Criar novo
                        </Button>
                    </Flex>
                    
                    <Table colorScheme="whiteAlpha">
                        <Thead >
                            <Tr>
                                <Td px="6" color="gray.300" w="8">
                                    <Checkbox colorScheme="pink"/>
                                </Td>
                                <Th>Usuário</Th>
                                <Th>Data de cadastro</Th>
                                <Th w="6"></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                                <Tr>
                                    <Td px="6">
                                        <Checkbox colorScheme="pink"/>
                                    </Td>
                                    <Td>
                                        <Box>
                                            <Text fontWeight="bold">William Ferreira</Text>
                                            <Text fontSize="small" color="gray.300" >williamferreira.programador@gmail.com</Text>
                                        </Box>
                                    </Td>
                                    <Td>04 de abril 2021</Td>
                                    <Td>
                                    <Button
                                        as="a"
                                        size="sm"
                                        fontSize="sm"
                                        colorScheme="pink"
                                        leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}
                                        >
                                        Editar
                                    </Button>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td px="6">
                                        <Checkbox colorScheme="pink"/>
                                    </Td>
                                    <Td>
                                        <Box>
                                            <Text fontWeight="bold">Gabriel PinhaLeve</Text>
                                            <Text fontSize="small" color="gray.300" >largueinapinhaleve@gmail.com</Text>
                                        </Box>
                                    </Td>
                                    <Td>04 de abril 2021</Td>
                                    <Td>
                                    <Button
                                        as="a"
                                        size="sm"
                                        fontSize="sm"
                                        colorScheme="pink"
                                        leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}
                                        >
                                        Editar
                                    </Button>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td px="6">
                                        <Checkbox colorScheme="pink"/>
                                    </Td>
                                    <Td>
                                        <Box>
                                            <Text fontWeight="bold">Kowaslki Ribeiro</Text>
                                            <Text fontSize="small" color="gray.300" >kowaslkiroubeiumacrianca@gmail.com</Text>
                                        </Box>
                                    </Td>
                                    <Td>04 de abril 2021</Td>
                                    <Td>
                                    <Button
                                        as="a"
                                        size="sm"
                                        fontSize="sm"
                                        colorScheme="pink"
                                        leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}
                                        >
                                        Editar
                                    </Button>
                                    </Td>
                                </Tr>
                        </Tbody>
                    </Table>

                    <Pagination />
                </Box>
            </Flex>
        </Box>
    );
}