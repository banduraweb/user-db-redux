import React, {useState} from 'react';
import {USERS_TYPES_DATA} from "../../constants/form-fields";
import {Table, Button} from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import {selectQueryUseratList, selectUsers} from "../../store/selectors";
import { Spinner } from "react-bootstrap";
import {renderData} from "../../sorting/SortingUsers";
import {db} from "../../database/database";
import * as actions from "../../store/actions";


const TableData=()=>{

    const users = useSelector(state => selectUsers(state));
    const query = useSelector(state => selectQueryUseratList(state));
    const dispatch = useDispatch();
    const {usersData} = users;

    const [selectedParams, setSelected] = useState({sortField: null, arrowSort: null});

    const getSortParams =({target})=>{

        const sortField = target.name;
        const arrowSort = target.value;
        console.log(sortField);
        setSelected({
            sortField,
            arrowSort,
        });

    };

    const deleteUserFromDB=async(id)=>{
            db.userDataBase.delete(id);
            let allUsers = await db.userDataBase.toArray();
            dispatch(actions.deleteUser(allUsers));
            setTimeout(()=>{
                dispatch(actions.loadUsers());
            },1000);


    };


     const {sortField, arrowSort} = selectedParams;
    const visibleUsers = query === ''
        ? usersData
        : usersData.filter(({ FIRST_NAME, LAST_NAME }) => (FIRST_NAME + LAST_NAME)
            .toLowerCase()
            .includes(query.toLowerCase()));

    return(
        <>
            {!usersData ?
                (<div className="d-flex justify-content-center">
                    <Spinner animation="grow" variant="primary"/>
                </div>)
                : usersData.length === 0
                    ? <h1 className="d-flex justify-content-center">Data Base is Empty</h1>
                    :
                <Table striped bordered hover variant="dark" responsive="sl" id="table"
                       className="table-custom table-responsive">
                    <thead>
                    <tr>
                        <th>#</th>
                        {Object.keys(USERS_TYPES_DATA).map(elem => {
                            return (
                                <th key={elem} className="table-header">
                                    {elem.replace(/_/g, ' ')}&#8195;
                                    <p className="btn-container">
                                        <Button className="btn_search btn_sort"
                                                name={elem}
                                                value="up"
                                                onClick={(e)=>getSortParams(e)}
                                        >&#8593;

                                        </Button>

                                        <Button className="btn_search btn_sort"
                                                name={elem}
                                                value="down"
                                                onClick={(e)=>getSortParams(e)}
                                        >&#8595;
                                        </Button>
                                    </p>
                                </th>
                            )

                        })}

                    </tr>
                    </thead>
                    <tbody>
                    {

                        renderData(visibleUsers, sortField, arrowSort).map(
                            ({_id, FIRST_NAME, LAST_NAME, PHONE, GENDER, AGE}, idx) => (

                                <tr key={_id}>
                                    <td>{++idx}</td>
                                    <td>{FIRST_NAME}</td>
                                    <td>{LAST_NAME}</td>
                                    <td>{PHONE}</td>
                                    <td>{GENDER}</td>
                                    <td>{AGE}</td>
                                    <td>{_id}
                                    <p className="delete-user-block">
                                        <Button onClick={()=>{deleteUserFromDB(_id)}}
                                            variant="info">delete user
                                        </Button>
                                    </p>
                                    </td>

                                </tr>


                            )
                        )}
                    </tbody>
                </Table>

            }
        </>
    )
};

export default TableData