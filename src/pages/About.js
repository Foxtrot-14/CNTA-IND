import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import B from '../assets/about.svg';
import Footer from '../components/Footer';
import AboutContent from '../components/AboutContent';




function About() {
    return(
        <>
            <Navbar />
            <div className='w-full flex flex-col-reverse md:flex-row items-center pt-28'>

                <div className='w-full mt-5 md:mt-0 md:w-1/2 px-4'>
                    <h1 className='text-5xl font-bold text-cyan-500'>About</h1>
                    <p className='mt-5 text-2xl'>What our app does</p>
                </div>

                <div className='w-full md:w-1/2 px-4'>
                    <img className='' src={B} />
                </div>
                

            </div>

            <div className='flex flex-col items-start p-10 my-10'>
                <h1 className='text-xl font-bold'>What CNTA does?</h1>
                <p className='text-left'>CNTA is an innovative platform designed to address the critical issue of child malnutrition by targeting parents and Anganwadi workers. By leveraging the power of machine learning, the app offers a user-friendly interface where parents can create profiles for their children and access vital resources and support. With features like BMI, height, weight, and more, the app's intelligent algorithm provides accurate predictions to classify a child's nutritional status. If a child is predicted to have malnutrition, they are promptly referred to the nearest NRC (Nutritional Rehabilitation Center), where parents receive comprehensive training on providing optimal nutrition for their children.</p>
            
                <h1 className='text-xl font-bold mt-10'>Features and Functionality:</h1>
                <p className='text-left'>
                
1. User-friendly Profiles: Parents can easily create and manage individual profiles for their children within the app. This includes capturing essential details such as age, height, weight, and dietary preferences.
<br></br><br></br>
2. Accurate Machine Learning Predictions: By analyzing the provided data, CNTA's powerful machine learning algorithm generates predictions on a child's nutritional status. These predictions are based on established indicators like BMI, ensuring reliable and evidence-based outcomes.
<br></br><br></br>
3. Malnutrition Classification: Children who are predicted to have malnutrition are promptly identified and flagged within the app. This classification enables targeted interventions to support their nutritional needs effectively.
<br></br><br></br>
4. Seamless Referral to NRC: The app facilitates the referral process by automatically connecting parents with the nearest Nutritional Rehabilitation Center (NRC). This streamlined approach ensures that children in need receive prompt professional care and support.
<br></br><br></br>
5. Parental Training and Support: At the NRC, parents undergo comprehensive training programs designed to educate and empower them with the knowledge and skills necessary to provide optimal nutrition for their children. These sessions cover topics like balanced diets, appropriate feeding practices, and the importance of key nutrients.

                </p>

            </div>

            <Footer />
        </>
    )
}

export default About;