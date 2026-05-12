const MapForm = () => {
    
    const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244280.52524945615!2d78.33712928124997!3d17.385044000000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9775572b0305%3A0x8e0d5a5f5a5f5a5f!2sHyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sin!4v1716707554611!5m2!1sen!2sin";

    return (
        <div className="google-map">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <iframe
                            src={mapUrl}
                            title="MayuraSoft office location on Google Maps"
                            width="100%"
                            height="450"
                            loading="lazy"
                            style={{ border: 0 }}
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MapForm;