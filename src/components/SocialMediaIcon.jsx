
const SocialMediaIcon = () => {

    return(
        <div className="flex justify-items-center md:justify-start my-10 gap-7">
            <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/huy-mai-duc-b1b800110/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/maiduchuy01/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src="../assets/facebook.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/huysmile_23.11/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src="../assets/instagram.png" />
      </a>

      <a
        className="hover:opacity-50 transition duration-500 w-[30px] h-[30px]"
        href="https://www.tiktok.com/@huysmiletech"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="tiktok-link" src="../assets/tiktok.png" />
      </a>
        </div>
    )
}

export default SocialMediaIcon;