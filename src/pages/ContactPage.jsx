import { Helmet } from 'react-helmet-async';
import Contact from '../components/Contact';

const ContactPage = () => {
    return (
        <section className="page-section contact-page" style={{ paddingTop: '100px' }}>
            <Helmet>
                <title>Contact - Sajid Inamdar</title>
                <meta name="description" content="Get in touch with Sajid Inamdar for collaborations or inquiries." />
            </Helmet>
            <Contact />
        </section>
    );
};

export default ContactPage;
