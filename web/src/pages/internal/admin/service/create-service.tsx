import {Field, Form, Formik} from "formik";
import {withUrqlClient} from "next-urql";
import {useRouter} from "next/router";
import React from "react";
import {useIsAuth} from "../../../../utils/useIsAuth";
import {useCreateServiceMutation} from "../../../../generated/graphql";
import {Layout} from "../../../../components/Layout";
import {createUrqlClient} from "../../../../utils/createUrqlClient";
import {FormControl, Grid, InputLabel, MenuItem} from "@material-ui/core";
import {SimpleFileUpload} from "formik-material-ui";
import Button from "@material-ui/core/Button";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import NextLink from "next/link";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import {Select} from 'formik-material-ui';
import {InputField} from "../../../../components/InputField";


function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}


const CreateService: React.FC<{}> = ({}) => {
    const router = useRouter();
    useIsAuth();
    const [, createService] = useCreateServiceMutation();
    return (
        <Layout variant="small">
            <Grid
                container
                direction="column"
                justifyContent="center"
                xs={12}
            >
                <Grid
                    item
                    direction="column"
                    xs={4}
                >
                    <Breadcrumbs aria-label="breadcrumb" style={{marginLeft: '125px', marginBottom: '20px'}}>
                        <NextLink href="/">
                            <Link color="inherit" href="/" onClick={handleClick}>
                                Главная
                            </Link>
                        </NextLink>
                        <NextLink href="/">
                            <Link color="inherit" href="/" onClick={handleClick}>
                                Услуги
                            </Link>
                        </NextLink>
                        <Typography color="textPrimary">Добавить услугу</Typography>
                    </Breadcrumbs>
                </Grid>
                <Grid
                    item
                    direction="column"
                    xs={12}
                >
                    <Formik
                        initialValues={{title: "", category: "", description: "", price: "", image: ""}}
                        onSubmit={async (values) => {
                            const {error} = await createService({input: values});
                            console.log(error)
                            if (!error) {
                                router.push("/internal/admin/service/create-service");
                            }
                            console.log(values)
                        }}
                    >
                        {({isSubmitting}) => (
                            <Form>
                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="center"
                                    xs={12}
                                    spacing={2}
                                >

                                    <Grid
                                        item
                                        xs={4}
                                        spacing={2}
                                    >
                                        <Grid container direction="column" spacing={2}>
                                            <InputField
                                                name="title"
                                                label="Название услуги"
                                                defaultValue="Название услуги"
                                            />
                                            <InputField
                                                name="description"
                                                label="Описание услуги"
                                                defaultValue="Описание услуги"
                                                multiline
                                            />
                                            <Grid
                                                item
                                                xs={4}
                                            >
                                                <FormControl required style={{width: 400}}>
                                                    <InputLabel htmlFor="category">Категория услуги</InputLabel>
                                                    <Field
                                                        component={Select}
                                                        name="category"
                                                        inputProps={{
                                                            id: 'category',
                                                        }}
                                                        style={{width: '100%'}}
                                                    >
                                                        <MenuItem value={"Категория 1"}>Категория 1</MenuItem>
                                                        <MenuItem value={"Категория 2"}>Категория 2</MenuItem>
                                                        <MenuItem value={"Категория 3"}>Категория 3</MenuItem>
                                                    </Field>
                                                </FormControl>
                                            </Grid>
                                            <InputField
                                                name="price"
                                                label="Цена услуги"
                                                defaultValue="Цена услуги"
                                            />
                                            <Grid
                                                item
                                                xs={4}
                                            >
                                                <FormControl style={{width: 400}}>
                                                    <Field component={SimpleFileUpload} name="image"
                                                           label="Загрузить изображение"/>;
                                                </FormControl>
                                            </Grid>
                                            <Button
                                                type="submit"
                                                onClick={() => {
                                                    isSubmitting
                                                }}
                                            >
                                                Добавить услугу
                                            </Button>
                                        </Grid>
                                    </Grid>
                                    {/*<Grid*/}
                                    {/*    item*/}
                                    {/*    direction="column"*/}
                                    {/*    xs={6}>*/}
                                    {/*    <TableServices/>*/}
                                    {/*</Grid>*/}
                                </Grid>
                            </Form>
                        )}
                    </Formik>
                </Grid>
            </Grid>
        </Layout>
    );
};

export default withUrqlClient(createUrqlClient)(CreateService);
