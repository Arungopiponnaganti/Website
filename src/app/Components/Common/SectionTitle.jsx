import parse from 'html-react-parser';
import './SectionTitle.css';

const SectionTitle = ({
    Title,
    SubTitle,
    Content,
    className = "text-left",
    isDarkMode = false
}) => {
    const combinedClassName = `section-title ${className} ${isDarkMode ? 'dark-mode' : ''}`.trim();

    return (
        <div className={combinedClassName}>
            {SubTitle && <h5 className="section-sub-title">{SubTitle}</h5>}
            {Title && <h2 className="section-main-title">{parse(Title)}</h2>}
            {Content && <p className="section-title-descr">{Content}</p>}
        </div>
    );
};

export default SectionTitle;