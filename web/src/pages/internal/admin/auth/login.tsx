import React from "react";
import {Formik, Form, Field} from "formik";
import {Wrapper} from "../../../../components/Wrapper";
import {useLoginMutation} from "../../../../generated/graphql";
import {toErrorMap} from "../../../../utils/toErrorMap";
import {useRouter} from "next/router";
import {withUrqlClient} from "next-urql";
import {createUrqlClient} from "../../../../utils/createUrqlClient";
import NextLink from "next/link";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import {FormControl, Grid} from "@material-ui/core";
import {TextField} from "formik-material-ui";
import {InputField} from "../../../../components/InputField";

const Login: React.FC<{}> = ({}) => {
    const router = useRouter();
    const [, login] = useLoginMutation();
    return (
        <Wrapper variant="small">
            <Formik
                initialValues={{usernameOrEmail: "", password: ""}}
                onSubmit={async (values, {setErrors}) => {
                    const response = await login(values);
                    if (response.data?.login.errors) {
                        setErrors(toErrorMap(response.data.login.errors));
                    } else if (response.data?.login.admin) {
                        if (typeof router.query.next === "string") {
                            router.push(router.query.next);
                        } else {
                            // worked
                            router.push("/");
                        }
                    }
                }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <Grid
                            container
                            direction="column"
                            justifyContent="center"
                            xs={12}
                        >
                            <Grid
                                item
                                xs={4}
                            >
                                {/*<FormControl style={{width: 400}}>*/}
                                {/*    <Field name="usernameOrEmail" placeholder="Ник или пароль" component={TextField}/>*/}
                                {/*</FormControl>*/}
                                <InputField
                                    name="usernameOrEmail"
                                    placeholder="Username or EmailBlock"
                                    label="Username or EmailBlock"
                                />
                            </Grid>
                            <Grid
                                item
                                xs={4}
                            >
                                <InputField
                                    name="password"
                                    placeholder="Пароль"
                                    label="Пароль"
                                    type="password"
                                />
                                {/*<FormControl style={{width: 400}}>*/}
                                {/*    <Field name="password" type="password" placeholder="Ваш пароль"*/}
                                {/*           component={TextField}/>*/}
                                {/*</FormControl>*/}
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            xs={4}
                        >
                            <NextLink href="/forgot-password">
                                <Link ml="auto">forgot password?</Link>
                            </NextLink>
                        </Grid>
                        <Button
                            type="submit"
                            onClick={() => {
                                isSubmitting
                            }}
                        >
                            Войти
                        </Button>
                    </Form>
                )}
            </Formik>
        </Wrapper>
    );
};

export default withUrqlClient(createUrqlClient)(Login);
