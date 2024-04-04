export default function contact(){
    return (
        <section id="contact-us" className="contact-us section">
        <div className="container">
            <div className="contact-head">
                <div className="row">
                    <div className="col-lg-12 col-12">
                        <div className="form-main">
                            <div className="title">
                                <h4>Contact Us</h4>
                                <h3>Write us a message</h3>
                            </div>
                            <form className="form" method="post" autoComplete="off"
                                action="">
                                <input type="hidden" name="_token" value="vJB1DRYhEwTKnMYeNQeuLZ4Eg78UKJbeTbwcMHgw" />
                                <div className="row">
                                    <div className="col-lg-6 col-12">
                                        <div className="form-group">
                                            <label>Your Name<span>*</span></label>
                                            <input name="name" type="text" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <div className="form-group">
                                            <label>Your Subjects<span>*</span></label>
                                            <input name="subject" type="text" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <div className="form-group">
                                            <label>Your Email<span>*</span></label>
                                            <input name="email" type="email" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <div className="form-group">
                                            <label>Your Phone<span>*</span></label>
                                            <input name="phone" type="text" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group message">
                                            <label>Your message<span>*</span></label>
                                            <textarea name="message" placeholder="" ></textarea>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group button">
                                            <button type="submit" className="themebtn">Send Message</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}