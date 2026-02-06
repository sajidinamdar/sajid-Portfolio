import { Helmet } from 'react-helmet-async';
import Blogs from '../components/Blogs';

const BlogsPage = () => {
    return (
        <div className="page-section blogs-page" style={{ paddingTop: '80px', background: '#020617', minHeight: '100vh' }}>
            <Helmet>
                <title>Blogs - Sajid Inamdar | Cybersecurity Articles & Tutorials</title>
                <meta name="description" content="Read cybersecurity blogs and articles by Sajid Inamdar covering ethical hacking, Kali Linux, network security, TryHackMe, and cybersecurity best practices." />
            </Helmet>
            <Blogs />
        </div>
    );
};

export default BlogsPage;
