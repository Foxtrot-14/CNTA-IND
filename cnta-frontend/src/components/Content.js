import './Content.css';

const Content = () => {
    return(
        <div className="content">
            <h1>Content</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sequi laborum ut voluptatibus consequatur corrupti.</p>

            <div className="first-con">
                <div className="con-text">
                    <h2>Something Related CNTA</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In est porro, modi sunt quidem adipisci neque eligendi reprehenderit! Itaque laboriosam ea dolores tempora inventore vitae deserunt voluptas aspernatur cupiditate unde.</p>
                </div>

                <div className="image">
                    <img src="" alt="img1" /> { /*add image over here*/}
                    <img src="" alt="img2" /> { /*add image over here*/}
                </div>
            </div>
        </div>
    )
}

export default Content