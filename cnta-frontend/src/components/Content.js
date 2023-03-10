import './Content.css';
import ContentData from './ContentData';

const Content = () => {
    return(
        <div className="content">
            <h1>Content</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sequi laborum ut voluptatibus consequatur corrupti.</p>

            <ContentData 
                className="first-con"
                heading="Something Related to CNTA"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. In est porro, modi sunt quidem adipisci neque eligendi reprehenderit! Itaque laboriosam ea dolores tempora inventore vitae deserunt voluptas aspernatur cupiditate unde."
                // img1={} add image
                // img2={} add image
            />

            <ContentData
                className="first-con-reverse"
                heading="Lorem ipsum dolor sit amet."
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, vitae quo et porro quisquam dolorum totam officia fugiat nobis asperiores expedita quas sequi illum accusantium adipisci magnam a similique quia?"
                // img1={} add image
                // img2={} add image
            />



        </div>
    )
}

export default Content