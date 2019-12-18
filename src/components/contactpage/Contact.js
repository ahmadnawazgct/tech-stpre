import React from 'react';
import Title from '../Title';

const Contact =()=> {
    return(
        <section className="py-3">
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                    <Title title="contact us" center />
                    <form className="mt-5" action="https://formspree.io/ahmadnawazgct@gmail.com"
  method="POST">
                        {/* first name */}
                        <div className="form-group">
                            <input
                                type='text'
                                name="firstName"
                                className="form-control"
                                placeholder="Nawaz Ahmad"
                            />
                        </div>
                        {/* email */}
                        <div className="form-group">
                            <input
                                type='text'
                                name="email"
                                className="form-control"
                                placeholder="email@gmail"
                            />
                        </div>
                        {/* subject */}
                        <div className="form-group">
                            <input
                                type='text'
                                name="subject"
                                className="form-control"
                                placeholder="important!!!"
                            />
                        </div>
                        {/* message */}
                        <div className="form">
                            <textarea
                                rows="10"
                                name="message"
                                className="form-control"
                                placeholder="hello there buddy"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <input 
                                type="submit" 
                                className="form-control bg-primary text-white" 
                                value="send"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </section>
        
    );
}
export default Contact;