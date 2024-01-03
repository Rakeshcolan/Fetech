import CommonUpload from "../../../components/common/Field/CommonUpload"
import "./manageCmsStyle.css"
import "../../../styles/App.css"

const ManageCMS = ()=>{
    return (
        <>
        <div className="commonbox">

        <h1>ManageCMS PAge</h1>
        <div className="cmscontainer">

        <div className="cmsupload">
            <p>About Us</p>
            <CommonUpload label={"Upload Your Files"}/>
        </div>
        <div className="cmsupload">
            <p>Term And Condition</p>
            <CommonUpload label={"Upload Your Files"}/>
        </div>
        <button className="cmsbutton">Save</button>
        </div>
        </div>
        </>
    )
}

export default ManageCMS