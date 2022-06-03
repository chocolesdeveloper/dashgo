import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile ({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            { showProfileData && (
                <Box mr="4" textAlign="right">
                <Text>William Ferreira</Text> 
                <Text color="gray.300" fontSize="small">
                    williamferreira.programador@gmail.com
                 </Text> 
             </Box>
            )}
            <Avatar size="md" name="William Ferreira" src="https://github.com/chocolesdeveloper.png"/>
      </Flex>
    );
}