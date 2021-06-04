import {Field, Form, Formik} from "formik";
import {withUrqlClient} from "next-urql";
import {useRouter} from "next/router";
import React from "react";
import {useIsAuth} from "../../../../utils/useIsAuth";
import {useCreateServiceMutation} from "../../../../generated/graphql";
import {Layout} from "../../../../components/Layout";
import {createUrqlClient} from "../../../../utils/createUrqlClient";
import {FormControl, Grid, Input, TextareaAutosize} from "@material-ui/core";
import {TextField} from "formik-material-ui";
import Button from "@material-ui/core/Button";
import TableServices from "./sections/TableServices";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import NextLink from "next/link";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import {PhotoCamera} from "@material-ui/icons";

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
                        <Typography color="textPrimary">Услуги</Typography>
                    </Breadcrumbs>
                </Grid>
                <Grid
                    item
                    direction="column"
                    xs={12}
                >
                    <Formik
                        initialValues={{title: "", category: "", description: "", price: ""}}
                        onSubmit={async (values) => {
                            const {error} = await createService({input: values});
                            console.log(error)
                            if (!error) {
                                router.push("/");
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
                                >
                                    <Grid
                                        item
                                        direction="column"
                                        xs={4}
                                    >
                                        <Grid
                                            item
                                            xs={4}
                                        >
                                            <FormControl style={{width: 400}}>
                                                <Field name="title" placeholder="Название" component={TextField}/>
                                            </FormControl>
                                        </Grid>
                                        <Grid
                                            item
                                            xs={4}
                                        >
                                            <FormControl style={{width: 400}}>
                                                <Field name="description" placeholder="Описание"
                                                       style={{minHeight: 200, padding: '15px'}}
                                                       component={TextareaAutosize}/>
                                            </FormControl>
                                        </Grid>
                                        <Grid
                                            item
                                            xs={4}
                                        >
                                            <FormControl style={{width: 400}}>
                                                <Field name="category" placeholder="Категории" component={TextField}/>
                                            </FormControl>
                                        </Grid>
                                        <Grid
                                            item
                                            xs={4}
                                        >
                                            <FormControl style={{width: 400}}>
                                                <Field name="price" placeholder="Цена" component={TextField}/>
                                            </FormControl>
                                        </Grid>
                                        <Grid
                                            item
                                            xs={4}
                                        >
                                            <FormControl style={{width: 400}}>
                                                <label htmlFor="contained-button-file">
                                                    <Input name="image" accept="image/*" id="contained-button-file" multiple type="file" />
                                                    <Button variant="contained" component="span">
                                                        Upload
                                                    </Button>
                                                </label>
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
                                    <Grid
                                        item
                                        direction="column"
                                        xs={6}>
                                        <TableServices/>
                                    </Grid>
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
