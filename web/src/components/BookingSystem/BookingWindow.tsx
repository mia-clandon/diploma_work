import React from "react";
import SelectEmployers from "./blocks/SelectEmployers";
import SelectServices from "./blocks/SelectServices";
import SelectBookingDateTime from "./blocks/SelectBookingDateTime";
import {Form, Formik} from "formik";
import {useRouter} from "next/router";
import {useCreateBookingUserMutation} from "../../generated/graphql";
import Button from "@material-ui/core/Button";
import {
    Grid,
    Modal,
    FormControl,
    FormLabel,
    Input,
    DialogTitle,
    DialogContent,
    DialogContentText, TextField, DialogActions, Dialog
} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import SendIcon from "@material-ui/icons/Send";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function BookingWindow({info}: {
    info?: any;
}) {
    const router = useRouter();
    // const {isOpen, onOpen, onClose} = useDisclosure()
    const [, createBookingUser] = useCreateBookingUserMutation();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button onClick={handleOpen} variant="outlined" color="primary">Забронировать</Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <Formik
                    initialValues={{employer: "", service: "", date: "", time: "", fio: "", contact: ""}}
                    onSubmit={async (values) => {
                        const {error} = await createBookingUser({input: values});
                        if (!error) {
                            router.push("/services");
                        }
                    }}
                >
                    {({isSubmitting}) => (
                        <Form>
                            <DialogTitle id="form-dialog-title">Забронировать</DialogTitle>
                            <DialogContent>
                                <Grid
                                    direction="column"
                                    xs={12}
                                >
                                    <Grid
                                        item
                                        xs={4}
                                    >
                                        <SelectEmployers/>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={4}
                                    >
                                        <SelectServices/>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={4}
                                    >
                                        <SelectBookingDateTime/>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={4}
                                    >
                                        <FormControl style={{width: 400}}>
                                            <FormLabel>Ваше ФИО</FormLabel>
                                            <Input name="fio" placeholder="Ваше ФИО"/>
                                        </FormControl>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={4}
                                    >
                                        <FormControl style={{width: 400}}>
                                            <FormLabel>Ваш номер телефона или email</FormLabel>
                                            <Input name="contact" placeholder="Ваш номер телефона или email"/>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </DialogContent>
                            {/*<Box>*/}
                            {/*    <LoadingButton*/}
                            {/*        endIcon={<SendIcon/>}*/}
                            {/*        loading={isSubmitting}*/}
                            {/*        loadingPosition="end"*/}
                            {/*        variant="contained"*/}
                            {/*    >*/}
                            {/*        Записаться*/}
                            {/*    </LoadingButton>*/}
                            {/*</Box>*/}
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button onClick={() => {
                                    isSubmitting
                                    handleClose()
                                }} endIcon={<SendIcon/>}>Записаться</Button>

                            </DialogActions>
                        </Form>
                    )}
                </Formik>
            </Dialog>
            {/*                    /!*    <Typography id="modal-modal-title" variant="h6" component="h2">*!/*/}
            {/*                    /!*        Забронировать*!/*/}
            {/*                    /!*    </Typography>*!/*/}
            {/*    <SelectEmployers/>*/}
            {/*    <SelectServices/>*/}
            {/*    <SelectBookingDateTime/>*/}
            {/*                    /!*    <FormControl mt={4}>*!/*/}
            {/*                    /!*        <FormLabel>Ваше ФИО</FormLabel>*!/*/}
            {/*                    /!*        <Input name="fio" placeholder="Ваше ФИО"/>*!/*/}
            {/*                    /!*    </FormControl>*!/*/}
            {/*                    /!*    <FormControl mt={4}>*!/*/}
            {/*                    /!*        <FormLabel>Ваш номер телефона или email</FormLabel>*!/*/}
            {/*                    /!*        <Input name="contact" placeholder="Ваш номер телефона или email"/>*!/*/}
            {/*                    /!*    </FormControl>*!/*/}
            {/*                    /!*</Grid>*!/*/}
            {/*                    /!*<Box display='flex'>*!/*/}
            {/*                    /!*    <LoadingButton*!/*/}
            {/*                    /!*        endIcon={<SendIcon/>}*!/*/}
            {/*                    /!*        loading={isSubmitting}*!/*/}
            {/*                    /!*        loadingPosition="end"*!/*/}
            {/*                    /!*        variant="contained"*!/*/}
            {/*                    /!*    >*!/*/}
            {/*                    /!*        Записаться*!/*/}
            {/*                    /!*    </LoadingButton>*!/*/}
            {/*                    /!*</Box>*!/*/}
            {/*                </Box>*/}
            {/*            </Form>*/}
            {/*        )}*/}
            {/*    </Formik>*/}
            {/*</Modal>*/}
            {/*<h1>test</h1>*/}
            {/*<Button onClick={onOpen}>Make an appointment</Button>*/}
            {/*<Modal*/}
            {/*    initialFocusRef={initialRef}*/}
            {/*    finalFocusRef={finalRef}*/}
            {/*    isOpen={isOpen}*/}
            {/*    onClose={onClose}*/}
            {/*>*/}
            {/*    <Formik*/}
            {/*        initialValues={{employer: "", service: "", date: "", time: "", fio: "", contact: ""}}*/}
            {/*        onSubmit={async (values) => {*/}
            {/*            const {error} = await createBookingUser({input: values});*/}
            {/*            if (!error) {*/}
            {/*                router.push("/");*/}
            {/*            }*/}
            {/*        }}*/}
            {/*    >*/}
            {/*        {({isSubmitting}) => (*/}
            {/*            <Form>*/}
            {/*                <ModalOverlay/>*/}
            {/*                <ModalContent>*/}
            {/*                    <ModalHeader>Забронировать</ModalHeader>*/}
            {/*                    <ModalCloseButton/>*/}
            {/*                    <ModalBody pb={6}>*/}
            {/*                        <SelectEmployers/>*/}
            {/*                        <SelectServices/>*/}
            {/*                        <SelectBookingDateTime/>*/}
            {/*                        <FormControl mt={4}>*/}
            {/*                            <FormLabel>Ваше ФИО</FormLabel>*/}
            {/*                            <Input name="fio" placeholder="Ваше ФИО"/>*/}
            {/*                        </FormControl>*/}
            {/*                        <FormControl mt={4}>*/}
            {/*                            <FormLabel>Ваш номер телефона или email</FormLabel>*/}
            {/*                            <Input name="contact" placeholder="Ваш номер телефона или email"/>*/}
            {/*                        </FormControl>*/}
            {/*                    </ModalBody>*/}
            {/*                    <ModalFooter>*/}
            {/*                        <Button onClick={onClose} mr={3}>Отменить</Button>*/}
            {/*                        <Button*/}
            {/*                            type="submit"*/}
            {/*                            colorScheme="blue"*/}
            {/*                            isLoading={isSubmitting}*/}
            {/*                            mr={3}>*/}
            {/*                            Записаться*/}
            {/*                        </Button>*/}
            {/*                    </ModalFooter>*/}
            {/*                </ModalContent>*/}
            {/*            </Form>*/}
            {/*        )}*/}
            {/*    </Formik>*/}
            {/*</Modal>*/}

        </>
    )
}

export default BookingWindow;
