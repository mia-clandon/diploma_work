import React from "react";
import {Box} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import {useDeleteServiceMutation} from "../../../../../generated/graphql";

interface EditDeleteServiceButtonsProps {
    id: number;
}

export const EditDeleteServiceButtons: React.FC<EditDeleteServiceButtonsProps> = ({id}) => {
    const [, deleteService] = useDeleteServiceMutation();

    return (
        <Box>
            {/*<NextLink href={`/internal/admin/employers/employer/[id]`} as={`/internal/admin/employers/employer/${id}`}>*/}
            {/*    <Button*/}
            {/*        variant="contained"*/}
            {/*        color="primary"*/}
            {/*        style={{marginRight: '50px'}}*/}
            {/*    >*/}
            {/*        Вся информация*/}
            {/*    </Button>*/}
            {/*</NextLink>*/}
            {/*<NextLink href={`/internal/admin/employers/employer/edit/[id]`} as={`/internal/admin/employers/employer/edit/${id}`}>*/}
            {/*    <Button*/}
            {/*        variant="contained"*/}
            {/*        color="primary"*/}
            {/*        style={{marginRight: '50px'}}*/}
            {/*        startIcon={<EditIcon/>}*/}
            {/*    >*/}
            {/*        Редактировать*/}
            {/*    </Button>*/}
            {/*</NextLink>*/}
            <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                    deleteService({id});
                }}
                startIcon={<DeleteIcon/>}
            >
                Удалить
            </Button>
        </Box>
    );
};
