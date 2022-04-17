import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
        <h2 className='text-center mt-4 mb-5'>Blogs</h2>
            <div className='mb-5'>
                <h4 className='mb-4'>Difference between authorization and authentication</h4>
                <p>
                    There is the main difference between them is, authentication is mainly a process of verifying who someone is,<br />
                    on the other hand, authorization always verifies what specific applications, files, or data users want to access. <br />
                    Authentication is visible to and partially changeable by the user Otherside Authorization isn’t visible to or changeable by the user. <br />
                    both are different from each other and both are separate processes used to protect your application. <br />
                    using well authentication and authorization make your application effective and protect you from cyber attack.
                </p>
            </div>
            <div className='mb-5'>
                <h4 className='mb-4'>Why are you using firebase? What other options do you have to implement authentication?</h4>
                <p>

                    Firebase is one kind of complete package which give us backend support, use-to-use SDKs, ready-made UI libraries to <br />
                    use authentication on your website to authenticate users. <br />
                    Firebase is user-friendly and also gives you the best security, users can be authenticated without any complexities. <br />
                    Firebase is mostly used for authentication because of its security level. <br />
                    There is some top alternate third party option that we have for authentication: <br />
                    MongoDB, AuthO, passport, and Okta are now top alternatives if you don't want to use firebase authentication. 
                </p>
            </div>
            <div>
                <h4 className='mb-4'>What other services does firebase provide other than authentication?</h4>
                <p>
                    Authentication are not only service that firebase provide, there are many services firebase provide to make our website user friendly. <br />
                    we can use, <br />
                    <strong>Cloud Storage</strong> <br />
                    <strong>Cloud Firestore</strong> <br />
                    <strong>Firebase Realtime Database</strong> <br />
                    <strong>Firebase Hosting</strong>
                </p>
            </div>
        </div>
    );
};

export default Blogs;