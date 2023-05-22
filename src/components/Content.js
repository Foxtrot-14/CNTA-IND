import "./Content.css";
import ContentData from "./ContentData";
import Img5 from "../assets/Img1.jpg";
import Img6 from "../assets/Img2.jpg";
import Img7 from "../assets/Img3.jpg";
import Img8 from "../assets/Img4.jpg";

const Content = () => {
  return (
    <div className="content">
      <h1>CNTA</h1>
      <p>
      Nutrition Matters: Building Stronger Bodies, Brighter Futures
      </p>

      <ContentData
        className="first-con"
        heading="Malnourishment Issues"
        text="Malnutrition in children is a serious global health issue that affects millions of children worldwide. It is a condition that arises when children do not receive adequate nutrition, either in terms of quantity or quality, to support their growth and development. Malnutrition can have severe consequences on a child's physical and cognitive development, making it a critical concern for public health.
        "
        img1={Img7}
        img2={Img8}
      />

      <ContentData
        className="first-con-reverse pt-32"
        heading="WHO"
        text={`The World Health Organization (WHO) defines malnutrition as "deficiencies, excesses, or imbalances in a person's intake of energy and/or nutrients." It can occur in various forms, including undernutrition, overnutrition, and micronutrient deficiencies. Undernutrition refers to the lack of essential nutrients, such as calories, protein, vitamins, and minerals, necessary for proper growth. Overnutrition, on the other hand, refers to excessive intake of nutrients, particularly unhealthy ones like saturated fats and sugars, leading to obesity and associated health problems. Micronutrient deficiencies involve a lack of essential vitamins and minerals, such as iron, vitamin A, iodine, and zinc.`}
        img1={Img6} 
        img2={Img5} 
      />
    </div>
  );
};

export default Content;
