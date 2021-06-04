import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useServicesListQuery, useServicesQuery} from "../../../../../generated/graphql";
import services from "../../services";

export default function TableServices() {

    const [{data, error, fetching}] = useServicesListQuery();

    if (!fetching && !data) {
        return (
            <div>
                <div>you got query failed for some reason</div>
                <div>{error?.message}</div>
            </div>
        );
    }

    return (
        <TableContainer component={Paper}>
            {!data && fetching ? (
                <div>loading...</div>
            ) : (
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Название</TableCell>
                            <TableCell align="right">Категория</TableCell>
                            <TableCell align="right">Описание</TableCell>
                            <TableCell align="right">Цена</TableCell>
                            <TableCell align="right">Редактировать</TableCell>
                            <TableCell align="right">Удалить</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data!.servicesList.map((service) => (
                            <TableRow
                                key={service.id}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="row">
                                    {service.title}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {service.category}
                                </TableCell>
                                <TableCell align="right">{service.description}</TableCell>
                                <TableCell align="right">{service.price}</TableCell>
                                <TableCell align="right">{service.title}</TableCell>
                                <TableCell align="right">Редактировать</TableCell>
                                <TableCell align="right">Удалить</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}
        </TableContainer>
    );
}
