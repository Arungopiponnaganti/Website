import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";
import Image from "next/image";

const CommonServices = ({
  subtitle = "MAYURASOFT COMPANY",
  title = "How Professional IT Services<br> Can Drive <span>Success.</span>",
  services = [],
  showShapes = true,
  variant = "cards"
}) => {
  const linkUrl = (item) => item.btnLink || item.href || "#";
  const linkText = (item) => item.btnText || (variant === "related" ? "Explore →" : "READ MORE");
  const hasIcon = (item) => !!item.icon;

  return (
    <div className={variant === "related" ? "sservice-area" : "sservice-area"}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <SectionTitle SubTitle={subtitle} Title={title}></SectionTitle>
            </div>
          </div>
          {services.map((item, i) => (
            <div key={i} className="col-xl-3 col-lg-4 col-md-6">
              <div className={variant === "related" ? "cd-rel-card h-100" : "service-single-box h-100"}>
                {hasIcon(item) && (
                  <div className="service-icon">
                    <Image src={item.icon} alt="img" width={50} height={50} />
                  </div>
                )}
                <div className={variant === "related" ? "" : "service-content"}>
                  <h3 className={variant === "related" ? "" : "service-title"}>{item.title}</h3>
                  <p className={variant === "related" ? "" : "service-text"}>{item.desc}</p>
                  <div className={variant === "related" ? "cd-rel-link" : "service-btn"}>
                    <Link href={linkUrl(item)}>
                      {variant === "related" ? (
                        linkText(item)
                      ) : (
                        <><i className="bi bi-plus"></i><span> {linkText(item)}</span></>
                      )}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {showShapes && (
          <>
            <div className="service-shape bounce-animate3">
              <Image src="/assets/images/service5.png" alt="img" width={199} height={420} />
            </div>
            <div className="service-shape2">
              <Image src="/assets/images/service7.png" alt="img" width={100} height={100} />
            </div>
            <div className="service-shape3 bounce-animate4">
              <Image src="/assets/images/service8.png" alt="img" width={341} height={351} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CommonServices;