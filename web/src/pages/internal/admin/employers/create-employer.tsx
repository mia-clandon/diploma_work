import {Form, Formik} from "formik";
import {withUrqlClient} from "next-urql";
import {useRouter} from "next/router";
import React from "react";
import {useCreateEmployerMutation} from "../../../../generated/graphql";
import {useIsAuth} from "../../../../utils/useIsAuth";
import {Layout} from "../../../../components/Layout";
import {InputField} from "../../../../components/InputField";
import {createUrqlClient} from "../../../../utils/createUrqlClient";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import {PhotoCamera} from "@material-ui/icons";
import NextLink from "next/link";
import EditIcon from "@material-ui/icons/Edit";
import {Stack} from "@material-ui/core";

const CreateEmployer: React.FC<{}> = ({}) => {
    const router = useRouter();
    useIsAuth();
    const [, createEmployer] = useCreateEmployerMutation();
    return (
        <Layout variant="small">
            <Formik
                initialValues={{
                    firstname: "",
                    lastname: "",
                    cardDescription: "",
                    description: "",
                    position: "",
                    email: "",
                    phone: "",
                    password: "",
                    avatar: "",
                    city: "",
                    averageTime: "",
                }}
                onSubmit={async (values) => {
                    const {error} = await createEmployer({options: values});
                    console.log(error)
                    if (!error) {
                        router.push("/internal/employers");
                    }
                    console.log(values)
                }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <Container maxWidth="md">
                            <NextLink href={`/internal/admin/employers`} as={`/internal/admin/employers`}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    style={{ width: '300px'}}
                                >
                                    ?????? ????????????????????
                                </Button>
                            </NextLink>
                            <Typography variant="h5">?????????????????????? ???????????? ????????????????????</Typography>
                            <Grid container spacing={3}>
                                <Grid item>
                                    <InputField
                                        name="firstname"
                                        placeholder="??????"
                                        label="??????"/>
                                </Grid>
                                <Grid item>
                                    <InputField
                                        name="lastname"
                                        placeholder="??????????????"
                                        label="??????????????"
                                    />
                                </Grid>
                                <Grid item>
                                    <InputField
                                        name="cardDescription"
                                        placeholder="???????????????? ?????? ???????????????? ??????????????????????"
                                        label="???????????????? ?????? ???????????????? ??????????????????????"
                                        rows={4}
                                        multiline
                                    />
                                </Grid>
                                <Grid item>
                                    <InputField
                                        name="description"
                                        placeholder="???????????????? ??????????????????????"
                                        label="???????????????? ??????????????????????"
                                        rows={4}
                                        multiline
                                    />
                                </Grid>
                                <Grid item>
                                    <InputField
                                        name="position"
                                        placeholder="??????????????????"
                                        label="??????????????????"
                                    />
                                </Grid>
                                <Grid item>
                                    <InputField
                                        name="email"
                                        placeholder="Email"
                                        label="Email"/>
                                </Grid>
                                <Grid item>
                                    <InputField
                                        name="phone"
                                        placeholder="?????????? ????????????????"
                                        label="?????????? ????????????????"
                                    />
                                </Grid>
                                <Grid item>
                                    <InputField
                                        name="password"
                                        placeholder="????????????"
                                        label="????????????"
                                        type="password"
                                    />
                                </Grid>
                                <Grid item>
                                    {/*<InputField*/}
                                    {/*    name="avatar"*/}
                                    {/*    placeholder="????????????"*/}
                                    {/*    label="????????????"*/}
                                    {/*/>*/}
                                    {/*    <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />*/}
                                    {/*    <label htmlFor="icon-button-file">*/}
                                            <IconButton color="primary" aria-label="upload picture" component="span">
                                                <PhotoCamera /> &nbsp; ?????????????????? ????????????
                                            </IconButton>
                                        {/*</label>*/}
                                    {/*</div>*/}
                                </Grid>
                                <Grid item>
                                    <InputField
                                        name="city"
                                        placeholder="??????????"
                                        label="??????????"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <InputField
                                        name="averageTime"
                                        placeholder="?????????????? ?????????? ???????????????????? ????????????"
                                        label="?????????????? ?????????? ???????????????????? ????????????"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        type="submit"
                                        onClick={() => {
                                            isSubmitting
                                        }}
                                        style={{
                                            fontFamily: 'Montserrat',
                                            fontSize: '14px',
                                            fontWeight: 600,
                                            lineHeight: '17px',
                                            textAlign: 'center',
                                            color: '#FF6231',
                                            textTransform: 'none',
                                            background: '#FFF1F1',
                                            borderRadius: '6px',
                                            padding: '16px 76px',
                                        }}
                                    >
                                        <Typography>???????????????? ???????????? ??????????????????????</Typography>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Container>
                    </Form>
                )}
            </Formik>
        </Layout>
    );
};

export default withUrqlClient(createUrqlClient)(CreateEmployer);
