import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const DosList = ({doList}) => {

    return (
        <>
            <DataTable className="w-full" value={doList} >
                <Column className=" line-through	w-10 border-1 border-round border-teal-500 shadow-1 m-1 p-2 flex justify-content-left" field="todo" headerClassName="text-3xl font-bold text-teal-700" header="To Do"/>
            </DataTable>
        </>
    );
}

export default DosList;