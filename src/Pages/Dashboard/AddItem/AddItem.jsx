import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const AddItem = () => {
    return (
        <>
            <div>
                <SectionTitle heading={'Add an Item'} subHeading={"what's new"}></SectionTitle>
            </div>
            <form className='bg-base-300 p-6 w-3/4 mx-auto'>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Recipe Name*</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered" />
                </div>
                <div className='flex w-full space-x-2'>
                    <div className='w-6/12'>
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select className="select select-bordered w-full">
                            <option disabled selected>Who shot first?</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                    </div>
                    <div className="form-control w-6/12">
                        <label className="label">
                            <span className="label-text">Recipe Name*</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                {/* -----------recipe details------------ */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recipe Details*</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </div>
                <div className="form-control w-full max-w-xs mt-2">
                    <input type="file" className="file-input file-input-bordered file-input-xs w-full max-w-xs" />
                </div>
                <button type='submit' className="btn btn-sm btn-neutral">Add Item</button>
            </form>
        </>
    );
};

export default AddItem;