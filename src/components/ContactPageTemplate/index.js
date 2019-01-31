import React from 'react'
import Helmet from 'react-helmet'
import Contact from '../Contact'
import PropTypes from 'prop-types'

const ContactPageTemplate = ({
  title,
  subtitle,
  meta_title,
  meta_description,
  contacts,
}) => {
  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description} />
      </Helmet>
      <section className='hero is-primary is-bold'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='section'>
                  <h1 className='title'>
                    {title}
                  </h1>
                  <h2 className='subtitle'>
                    {subtitle}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          {contacts.map((contact, id) =>
            <Contact key={id} email={contact.email} description={contact.description} />
          )}
        </div>
      </section>


{/*

      <section className='formSection'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-5 is-offset-1'>

            <form name='contact' method='POST' data-netlify=true>

                <div class="field">
                  <label class="label">Name</label>
                   <div class="control has-icons-left">
                     <input class="input is-rounded" type="text" placeholder="Text input"></input>
                      <span class='icon is-small is-left'>
                      <i class='fas fa-child'></i>
                      </span>
                   </div>
                </div>

                <div class="field">
                  <label class="label">Email</label>
                    <div class="control has-icons-left">
                      <input class="input is-rounded" type="email" placeholder="Email input"></input>
                        <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                        </span>
                    </div>
                </div>

                <div class='field'>
                  <label class='label'>Message</label>
                    <div class='control'>
                      <textarea class='textarea is-rounded' placeholder='Your message here'></textarea>
                    </div>
                </div>

                <div class="control">
                  <button type='submit' class="button is-primary">Submit</button>
                </div>

              </form>

            </div>
          </div>
        </div>
      </section>

*/}


      <section className='formSection'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-5 is-offset-1'>


              <form name="contact" method="POST" action="success" data-netlify="true">

                <div className='field'>
                  <label className='label'>Your Name: </label>
                    <div className='control has-icons-left'>
                      <input className='input is rounded' type="text" name="name" />
                      <span className='icon is-small is-left'>
                      <i className='fas fa-child'></i>
                      </span>
                  </div>
                </div>


                <div className='field'>
                  <label className='label'>Your Email:</label>
                    <div className='control has-icons-left'>
                     <input className='input' type="email" name="email"></input>
                      <span className='icon is-small is-left'>
                      <i className='fas fa-envelope'></i>
                      </span>
                    </div>
                </div>

                <div className='field'>
                  <label className='label'>Message: <textarea className= 'textarea' name="message"></textarea></label>
                </div>
                <div className='control'>
                  <button className='button is-primary' type="submit">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  contacts: PropTypes.array,

}

export default ContactPageTemplate
