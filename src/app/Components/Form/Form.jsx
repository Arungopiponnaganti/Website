import useFormValidation from "../hooks/useFormValidation";

const Form = () => {
  const {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    handleChange,
    handleSubmit
  } = useFormValidation();

  return (
    <div className="contact_from_box">
      <form id="dreamit-form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <div className="form_box">
              <label htmlFor="contact-name" className="visually-hidden">Your Name</label>
              <input
                type="text"
                id="contact-name"
                name="name"
                placeholder="Your Name *"
                aria-label="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error-input' : ''}
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form_box">
              <label htmlFor="contact-email" className="visually-hidden">Your Email</label>
              <input
                type="email"
                id="contact-email"
                name="email"
                placeholder="Your E-Mail *"
                aria-label="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error-input' : ''}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form_box">
              <label htmlFor="contact-subject" className="visually-hidden">Subject</label>
              <input
                type="text"
                id="contact-subject"
                name="subject"
                placeholder="Subject *"
                aria-label="Subject"
                value={formData.subject}
                onChange={handleChange}
                className={errors.subject ? 'error-input' : ''}
              />
              {errors.subject && <span className="error-text">{errors.subject}</span>}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form_box">
              <label htmlFor="contact-phone" className="visually-hidden">Phone Number</label>
              <input
                type="text"
                id="contact-phone"
                name="phone"
                placeholder="Phone *"
                aria-label="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? 'error-input' : ''}
              />
              {errors.phone && <span className="error-text">{errors.phone}</span>}
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form_box">
              <label htmlFor="contact-message" className="visually-hidden">Your Message</label>
              <textarea
                name="message"
                id="contact-message"
                cols="30"
                rows="10"
                placeholder="Message"
                aria-label="Your Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="quote_button">
              <button className="btn" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'SENDING...' : 'SEND NOW'} <i className="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
      {submitStatus && (
        <div id="status" className={submitStatus.type === 'success' ? 'success' : 'error'}>
          {submitStatus.message}
        </div>
      )}
    </div>
  );
};

export default Form;