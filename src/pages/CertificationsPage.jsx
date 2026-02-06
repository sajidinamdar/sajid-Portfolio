import { Helmet } from 'react-helmet-async';
import Certifications from '../components/Certifications';

const CertificationsPage = () => {
    return (
        <div className="page-section certs-page" style={{ paddingTop: '80px', background: '#020617', minHeight: '100vh' }}>
            <Helmet>
                <title>Certifications - Sajid Inamdar</title>
                <meta name="description" content="Certifications and achievements of Sajid Inamdar in Cybersecurity and Programming." />
            </Helmet>
            <Certifications />
        </div>
    );
};

export default CertificationsPage;
