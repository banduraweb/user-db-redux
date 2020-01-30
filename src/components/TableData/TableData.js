import React, {useState} from 'react';
import {USERS_TYPES_DATA} from "../../constants/form-fields";
import {Table, Button} from "react-bootstrap";
import { useSelector } from 'react-redux';
import {selectUsers, statusLoading} from "../../store/selectors";
import { Spinner } from "react-bootstrap";


const TableData=()=>{

    const users = useSelector(state => selectUsers(state));
    const getLoadStatus = useSelector(state => statusLoading(state));
    const {usersData} = users;

    console.log(getLoadStatus, usersData, '-----...');
    console.log(usersData === undefined,'undefined');


    const [selectedParams, setSelected] = useState({sortType: '', isSelected: false });


    const getSortParams =(e)=>{
        const sortQuery = e.target.name;
        setSelected({
            sortType: sortQuery,
            isSelected: !isSelected
        });


    };
    const {sortType, isSelected} = selectedParams;
    console.log(selectedParams);

    const renderData = (dataArray)=> {
        if ((dataArray[0][sortType])) {
            switch (!isNaN(dataArray[0][sortType])) {
                case true:
                    return [...dataArray].sort((a, b) => {
                        const isReversed = !isSelected ? 1 : -1;
                        return isReversed * (+a[sortType] - (+b[sortType]))
                    });
                case false:
                    return [...dataArray].sort((a, b) => {
                        const isReversed = !isSelected ? 1 : -1;
                        return isReversed * a[sortType].localeCompare(b[sortType])
                    });
                default:
                    return dataArray
            }
        }
        return dataArray
    };

    return(
        <>
            {!usersData ?
                (<div className="d-flex justify-content-center">
                    <Spinner animation="grow" variant="primary"/>
                </div>)
                : usersData.length === 0
                    ? <h1 className="d-flex justify-content-center">Data Base is Empty</h1>
                    :
                <Table striped bordered hover variant="dark" responsive="sm" id="table"
                       className="table-custom table-responsive">
                    <thead>
                    <tr>
                        <th>#</th>
                        {Object.keys(USERS_TYPES_DATA).map(elem => {
                            return (
                                <th key={elem}>
                                    {elem.replace(/_/g, ' ')}&#8195;
                                    <Button className="btn_search btn_sort"
                                            variant="outline-info">
                                        <label className="btn_search"

                                        >
                                            <i className="fas fa-sort"></i>
                                        <input id="checkbox"
                                               type="checkbox"
                                               name={elem}
                                               checked={sortType === elem}
                                               onChange={(e)=>{getSortParams(e)}}
                                        />
                                        </label>
                                    </Button>

                                </th>
                            )

                        })}

                    </tr>
                    </thead>
                    <tbody>
                    {

                        renderData(usersData).map(
                            ({_id, FIRST_NAME, LAST_NAME, PHONE, GENDER, AGE}, idx) => (

                                <tr key={_id}>
                                    <td>{++idx}</td>
                                    <td>{FIRST_NAME}</td>
                                    <td>{LAST_NAME}</td>
                                    <td>{PHONE}</td>
                                    <td>{GENDER}</td>
                                    <td>{AGE}</td>
                                    <td>{_id}
                                        <Button
                                            variant="info">delete user
                                        </Button>
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