import parse from 'html-react-parser';
import './SectionTitle.css';

const SectionTitle = ({
    Title,
    SubTitle,
    Content,
    className = "text-left",
    isDarkMode = false,
    titleLevel = 2
}) => {
    const combinedClassName = `section-title ${className} ${isDarkMode ? 'dark-mode' : ''}`.trim();
    const TitleTag = `h${titleLevel}`;
    const SubTitleTag = `h${titleLevel + 1}`;

    return (
        <div className={combinedClassName}>
            {SubTitle && <SubTitleTag className="section-sub-title">{SubTitle}</SubTitleTag>}
            {Title && <TitleTag className="section-main-title">{parse(Title)}</TitleTag>}
            {Content && <p className="section-title-descr">{Content}</p>}
        </div>
    );
};

export default SectionTitle;