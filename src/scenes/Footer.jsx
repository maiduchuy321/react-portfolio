import SocialMediaIcon from "../components/SocialMediaIcon";

const Footer = () => {
    return (
        <footer className=" bg-red py-4">
            <div className="w-5/6 mx-auto">
                <div className="md:flex justify-center md:justify-between text-center items-center">
                    <p className="font-playfair font-semibold text-2xl text-yellow">
                        Huy Smile
                    </p>
                <SocialMediaIcon/>
                    
                </div>
            </div>
        </footer>
    )
}


export default Footer;