import React from 'react'

const ExportContent = () =>
{
    return (
        <div>
            <div className="main-content">
                <section className="section">
                    <div className="section-header">
                        <h1>Export Data</h1>
                    </div>


                    <div className="section-body">
                        <div class="row">
                            <div class="col-md-12">
                                <form method="post" enctype="multipart/form-data" class="form-data">

                                    <h3>Export Data From File</h3>

                                    <p>Please select format of file.</p>
                                    <select name="file-format" class="form-control my-3">
                                        <option selected>Choose format...</option>
                                        <option>CSV</option>
                                        <option>JSON</option>
                                        <option>XLS (Excel)</option>
                                    </select>
                                    <button class="btn btn-primary" type="submit">Export</button>
                                </form>
                            </div>
                        </div>
                    </div>


                </section>
            </div>


        </div>
    )
}

export default ExportContent
