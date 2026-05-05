import Image from "next/image";
import Link from "next/link";

const BlogCard1 = ({BlogImg,Title,Content}) => {
    return (
        <div className="blog-singele-box">
        <div className="blog-thumb">
            <Image src={BlogImg} alt="img" width={526} height={354}   />
        </div>
        <div className="blog-content">
            <div className="blog-date">
                <h4><i className="bi bi-calendar2-check"></i>20 June 2024 <span><i className="bi bi-chat-left-text"></i>Comment-05</span></h4>
            </div>
            <h3 className="blog-title"><Link href="/blog/blog-details">{Title}</Link></h3>
            <p className="blog-tex">{Content}</p>
            <div className="blog-btn">
            <Link href="/blog/blog-details">READ MORE<i className="bi bi-arrow-right"></i></Link>
            </div>
        </div>
    </div>
    );
};

export default BlogCard1;