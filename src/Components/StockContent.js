import React from 'react'


const StockContent = () =>
{
    return (
        <div>
            <div className="main-content">
                <section className="section">
                    <div className="section-header">
                        <h1>List of Product Available in Stock</h1>
                    </div>


                    <div className="section-body">
                        <div className="table-scroll">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col" className="table-padding">Item Name</th>
                                        <th scope="col" className="table-padding">Item Category</th>
                                        <th scope="col" className="table-padding">Item Quantity</th>
                                        <th scope="col" className="table-padding">Measurement Unit</th>
                                        <th scope="col" className="table-padding">Reorder Level</th>
                                        <th scope="col" className="table-padding">Timestamp</th>
                                        <th scope="col" className="table-padding">Last Update</th>
                                        <th scope="col" className="table-padding">Created By</th>
                                        <th scope="col" className="table-padding">Manage Stock</th>
                                        <th scope="col" className="table-padding">Actions</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">laptop</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>

                    </div>

                </section>
            </div>



        </div>
    )
}

export default StockContent
