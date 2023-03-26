import "./AddProfile.css";
import Footer from './Footer';
function AddProfile(){
    return(
        <>
            <div className="add">
                <h1>Lorem ipsum dolor sit amet.</h1>
                <form>
                    <input placeholder="Name" />
                    {/* <input type="file" placeholder="Photo" /> */}
                    <input placeholder="Age" />
                    <input placeholder="Gender" />
                    <input placeholder="City" />
                    <input placeholder="Name of Parents/Guardian" />
                    <input placeholder="Height" />
                    <input placeholder="Weight" />
                    <input placeholder="BMI" />
                    <input placeholder="Mid-Upper Arm Circumference" />
                    <input placeholder="Chest Circumference" />
                    <input placeholder="Head Circumference" />
                    <input placeholder="Waist-to-Hip Ratio" />
                    <input placeholder="Muscle Wasting" />
                    <input placeholder="Stunting" />
                    <input placeholder="Fingerprint Deterioration" />
                    <input placeholder="Message" rows="4" /><textarea />
                    <button>Update</button>
                    <button>Delete</button>
                </form>
            </div>    
        <Footer />
        </>     
    )
}

export default AddProfile;