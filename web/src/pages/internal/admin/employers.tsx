import React, {useState} from "react";
import {withUrqlClient} from "next-urql";
import NextLink from "next/link";
import {useEmployersQuery} from "../../../generated/graphql";
import {Layout} from "../../../components/Layout";
import {Stack} from "@material-ui/core";
import Box from "@material-ui/core/Box";

const Employers = () => {
        const [variables, setVariables] = useState({
            limit: 15,
            cursor: null as null | string,
        });

        const [{data, error, fetching}] = useEmployersQuery({
            variables,
        });

        if (!fetching && !data) {
            return (
                <div>
                    <div>you got query failed for some reason</div>
                    <div>{error?.message}</div>
                </div>
            );
        }

        return (
            <Layout>
                {!data && fetching ? (
                    <div>loading...</div>
                ) : (
                    <Stack spacing={8}>
                        <Box display='flex'>
                            <NextLink href="/">
                                Main/
                            </NextLink>
                            <NextLink href="/employers">
                                Employers
                            </NextLink>
                        </Box>
                        <Box display='flex'>
                            {data!.employers.employers.map((employer) =>
                                !employer ? null : (
                                    <Flex key={employer.id}
                                          direction="column"
                                          margin="15px 10px"
                                          boxShadow="xl"
                                          p="6"
                                          rounded="md"
                                          bg="white"
                                          width="30%">
                                        <Stack marginTop={15}>
                                            <Image
                                                boxSize="250px"
                                                src="https://img3.stockfresh.com/files/r/rastudio/m/94/8626964_stock-vector-woman-during-cosmetology-procedure-in-beauty-salon.jpg"
                                            />
                                        </Stack>
                                        <NextLink href="/employer/[id]" as={`/employer/${employer.id}`}>
                                            <Link>
                                                <Heading as="h4" size="lg" margin="10px">
                                                    {employer.firstname} {employer.lastname}
                                                </Heading>
                                            </Link>
                                        </NextLink>
                                        <Button color="teal" variant="outline">
                                            {employer.position}
                                        </Button>
                                        <Text margin="10px">
                                            {employer.description}
                                        </Text>
                                    </Flex>
                                )
                            )}
                        </Flex>
                    </Stack>
                )}
                {data && data.employers.hasMore ? (
                    <Flex>
                        <Button
                            onClick={() => {
                                setVariables({
                                    limit: variables.limit,
                                    cursor: data?.employers.employers[data?.employers.employers.length - 1].createdAt,
                                });
                            }}
                            isLoading={fetching}
                            m="auto"
                            my={8}
                        >
                            load more
                        </Button>
                    </Flex>
                ) : null}
            </Layout>
        );
    }
;

export default withUrqlClient(createUrqlClient,
    {
        ssr: true
    }
)(Employers);
