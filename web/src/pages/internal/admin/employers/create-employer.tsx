import {Box, Button} from "@chakra-ui/core";
import {Form, Formik} from "formik";
import {withUrqlClient} from "next-urql";
import {useRouter} from "next/router";
import React from "react";
import {useCreateEmployerMutation} from "../../../../generated/graphql";
import {useIsAuth} from "../../../../utils/useIsAuth";
import {Layout} from "../../../../components/Layout";
import {InputField} from "../../../../components/InputField";
import {createUrqlClient} from "../../../../utils/createUrqlClient";

const CreateEmployer: React.FC<{}> = ({}) => {
    const router = useRouter();
    useIsAuth();
    const [, createEmployer] = useCreateEmployerMutation();
    return (
        <Layout variant="small">
            <Formik
                initialValues={{firstname: "", lastname: "", description: "", position: "", email: "", avatar: ""}}
                onSubmit={async (values) => {
                    const {error} = await createEmployer({input: values});
                    console.log(error)
                    if (!error) {
                        router.push("/");
                    }
                    console.log(values)
                }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <InputField
                            name="firstname"
                            placeholder="First name"
                            label="First name"/>
                        <InputField
                            name="lastname"
                            placeholder="Last name"
                            label="Last name"
                        />
                        <InputField
                            textarea
                            name="description"
                            placeholder="Description"
                            label="Description"/>
                        <InputField
                            name="position"
                            placeholder="Position"
                            label="Position"
                        />
                        <InputField
                            name="email"
                            placeholder="email"
                            label="Email"/>
                        <InputField
                            name="avatar"
                            placeholder="Avatar"
                            label="Avatar"
                        />
                        <Button
                            mt={4}
                            type="submit"
                            isLoading={isSubmitting}
                            variantColor="teal"
                        >
                            Add new Employer
                        </Button>
                    </Form>
                )}
            </Formik>
        </Layout>
    );
};

export default withUrqlClient(createUrqlClient)(CreateEmployer);
