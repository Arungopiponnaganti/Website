import Image from "next/image";
import Link from "next/link";

const BlogCardStyle2 = ({BlogImg,Title,Content}) => {
    return (
        <div className="blog-singele-box-tow">
        <div className="blog-thumb-tow">
            <Image src={BlogImg} alt="img" width={301} height={312}   />
        </div>
        <div className="blog-content-tow">
            <div className="blog-date-tow">
                <h4><i className="bi bi-calendar2-check"></i>20 June 2024 <span><i className="bi bi-chat-left-text"></i>Comment-05</span></h4>
            </div>
            <h3 className="blog-title-two"><Link href="/blog/blog-details">{Title}</Link></h3>
            <p className="blog-tex-tow">{Content}</p>
            <div className="blog-btn-tow">
            <Link href="/blog/blog-details">READ MORE<i className="bi bi-arrow-right"></i></Link>
            </div>
        </div>
    </div>
    );
};

export default BlogCardStyle2;