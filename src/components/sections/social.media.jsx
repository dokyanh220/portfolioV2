import { FaFacebook } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa'
import { SiYoutubeshorts } from 'react-icons/si'

const SocialMedia = (props) => {
    const { youtube, tiktok, github, facebook } = props

    return (
        <div className="my-4 d-flex items-center gap-3">
            <a
                href={youtube}
                target="_blank"
                className="highlight"
                title="Youtube Đỗ Kỳ Anh"
            >
                <SiYoutubeshorts size={30} />
            </a>
            <a
                href={tiktok}
                target="_blank"
                className="highlight"
                title="Tiktok Đỗ Kỳ Anh"
            >
                <FaTiktok size={30} />
            </a>
            <a
                href={github}
                target="_blank"
                className="highlight"
                title="Github Đỗ Kỳ Anh"
            >
                <FaGithub size={30} />
            </a>
            <a
                href={facebook}
                target="_blank"
                className="highlight"
                title="Facebook Đỗ Kỳ Anh"
            >
                <FaFacebook size={30} />
            </a>
        </div>
    )
}

export default SocialMedia
