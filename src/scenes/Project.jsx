import LineGradient from "../components/LineGradient";
import {motion} from "framer-motion";


const container={
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2}
    }
};


const projectVariant = {
    hidden: {opacity: 0, scale: 0.8},
    visible: {opacity: 1, scale: 1}
}


const Project = ({title,projectLink, projectDescription}) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
    const projectTitle = title.split(" ").join("-").toLowerCase();
    
    return(
        <a href={projectLink} target="_blank">
            <motion.div variants={projectVariant} className="relative">
                <div className={overlayStyles}>
                    <p className="text-2xl font-playfair">{title}</p>
                    <p className="mt-7">
                        {projectDescription}
                    </p>
                </div>
                <img className="" src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
            </motion.div>
        </a>
    )
}

const Projects = () =>{
    return (
        <section id="projects" className="pt-48 pb-48">
            {/* HEADINGS */}
            <motion.div
                    className="md:w-2/4 mx-auto text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount:0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden:{opacity: 0, y: -50},
                        visible: {opacity:1, y:0}
                    }}
                >
                <div>    
                    <p className="font-playfair font-semibold text-4xl">
                        <span className="text-red">PRO</span>JECTS
                    </p>
                    <div className="flex justify-center mt-5">
                        <LineGradient width="w-1/3"/>
                    </div>
                </div>
                <p className="mt-10 mb-10">
                Đây là một vài dự án tôi đã làm.
                </p>
            </motion.div>

            {/* PROJECTS */}
            <div className="flex justify-center">
                 <motion.div
                    className="sm:grid sm:grid-cols-3 gap-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount:0.2}}
                    variants={container}
                 >
                    {/* ROW 1 */}
                    <div className="flex justify-center text-center items-center p-10 bg-red
                    max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
                        BEAUTIFUL USER INTERFACES
                    </div>

                    <Project title="Project 1" projectLink="https://onthitopik.vn/" projectDescription="(Font-end) Hệ thống ôn luyện thi Topik"></Project>
                    <Project title="Project 2" projectLink="https://intern_project.minhhoangjsc.io/" projectDescription="(Full Stack) Hệ thống admin quản lý sản phẩm"></Project>
 
                    {/* ROW 2 */}
                    <Project title="Project 3" projectLink="https://github.com/maiduchuy321/Steam_Game_Engine_Recommender-Systems" projectDescription="Hệ thống gợi ý game trên STEAM theo tìm kiếm"></Project>
                    <Project title="Project 4" projectLink="https://github.com/maiduchuy321/Tool-Edit-video-using-FFMPEG" projectDescription="Phần mềm sử dụng FFMPEG để download và chỉnh sửa video"></Project>
                    <Project title="Project 5" projectLink="https://github.com/maiduchuy321/MERN_Admin_App" projectDescription="(Đang tiến hành) Admin web code theo MERN"></Project>

                    {/* ROW 3 */}
                    {/* <Project title="Project 6"></Project> */}
                    {/* <Project title="Project 7"></Project> */}
                    <div className="flex justify-center text-center items-center p-10 bg-blue
                    max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
                        Ngoài ra còn 1 vài sản phẩm chưa được public như: Sử dụng Deep Learning để nhận diện 10 loài chim phổ biến, Hay hệ thống chuông thông minh,...
                    </div>
                </motion.div>
            </div>
        </section>
    )
}


export default Projects;