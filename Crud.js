import React, { useState } from 'react'

export default function Crud() {

    const [data, setData] = useState({
        name: " ",
        email: " ",
        number: " "

    })
    const [show, setShow] = useState([]);

    const [editClick, setEditClick] = useState(false)

    const [editIndex, setEditIndex] = useState("")
    const handleChange = (e) => {
        setData({
            ...data, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        if (editClick) {
            const tempTableData = show;
            Object.assign(tempTableData[editIndex],data) 
            setShow([...tempTableData])
            setEditClick(false)
            setData({
                name: " ",
                email: " ",
                number: " "

            })
        } else {
            setShow([
                data, ...show
            ])
            setData({
                name: " ",
                email: " ",
                number: " "

            })
        }
        // console.log(show);
    }

    const handleDelete = (index) => {
        const filterData = show.filter((item, i) => i !== index)
        setShow(filterData);

    }
    const handleEdit = (index) => {
        const editedData = show[index];
        setData({
            name: editedData.name,
            email: editedData.email,
            number: editedData.number
        })
        setEditClick(true);
        setEditIndex(index)
    }

    return (
        <div className='min-h-screen bg-[#004b43]'>
            <h1 className='text-center' > Crud App</h1 >
            <div className='bg-[#fff max-w-fit m-auto p-10'>
                <form onSubmit={handleSubmit} >
                    <div className='flex flex-col '>
                        <label className='text-white relative right-20 top-8' >Name  </label>
                        <input className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"' type="text"
                            name='name' value={data.name} onChange={handleChange} />
                    </div>




                    <div className='flex flex-col'>
                        <label className='text-white relative right-20 top-8' >Email</label>
                        <input className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"' type="text"
                            name='email' value={data.email} onChange={handleChange} />

                    </div>

                    <div className='flex flex-col '>
                        <label className='text-white relative right-20 top-8  ' htmlFor="Contact ">Mobile no  </label>
                        <input className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" ' type="text"
                            name='number' value={data.number} onChange={handleChange} />


                    </div> <br /><br />
                    <button type='submit' className='w-16 bg-lime-400 font-bold mt-3'>{
                        editClick ? "update" : "Add"
                    }</button>
                </form>
            </div>
            <div>
                <table className='w-full text-center'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Contact number</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            show.map((item, i) => (
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.number}</td>
                                    <td>
                                        <button onClick={() => handleEdit(i)} className='mr-3 text-yellow-300'>Edit</button>
                                        <button onClick={() => handleDelete(i)} className='mr-3 text-red-300'>Delete</button>
                                    </td>

                                </tr>
                            ))


                        }

                    </tbody>
                </table>
            </div>




        </div >
    )
}
