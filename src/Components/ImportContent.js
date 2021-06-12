import React from 'react'

const ImportContent = () =>
{
    return (
        <div>
            <div className="main-content">
                <section className="section">
                    <div className="section-header">
                        <h1>Import Data</h1>
                    </div>


                    <div className="section-body exportbody">
                        <div class="row">
                            <div class="col-md-12">
                                <form method="post" enctype="multipart/form-data" class="form-data">
                                    <h3>Import Data from File</h3>

                                    <input type="file" name="importData" />
                                    <p>Please select format of file.</p>
                                    <select name="file-format" class="form-control my-3">
                                        <option selected>Choose format...</option>
                                        <option>CSV</option>
                                        <option>JSON</option>
                                        <option>XLS</option>
                                    </select>
                                    <button class="btn btn-primary" type="submit">Import</button>
                                </form>

                            </div>
                        </div>
                    </div>


                </section>
            </div>


        </div>
    )
}

export default ImportContent
