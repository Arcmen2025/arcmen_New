'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './BlogPage.scss';
// import { getAllBlogs } from '../../../api/BlogAPIs';
import { getAllUserBlogs } from '../../../api/BlogAPIs';
import PreLoader from '@/components/PreLoader';

import { useMyContext } from '@/components/ContextAPIProvide';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const { updateState } = useMyContext();
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await getAllBlogs();
                const response = await getAllUserBlogs();
                // console.log('response', response);
                if (response?.data) {
                    setBlogs(response.data.blogs);
                }
            } catch (error) {
                console.error('Error fetching blogs:', error);
                throw new Error('Could not fetch blogs. Please try again later.');
            }
        };
        fetchData();
    }, []);

    const handleBlogClick = (blogId) => {
        Cookies.set('blogId', blogId, { expires: 20 / 24 });
        updateState({ blogIdGet: blogId });
        // router.push(`/blog/${blogUrl}`);
    };

    return (
        <div>
            <section className="blog-banner">
                <Container>
                    <Row>
                        <Col className="text-center ">
                            <h1>Our Blogs</h1>
                            <p>
                                <Link href="/" style={{ color: 'white' }}>
                                    Home
                                </Link>{' '}
                                / Blogs
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col className="text-center ">
                            <div className="p-5">
                                <p className="blog-h2-content">Everyone Has A Dream Home! Everyone Deserve The Best!</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row className="g-4 mb-5" md={2} xs={1} sm={1} xl={3} lg={3}>
                        {blogs?.length > 0 ? (
                            <>

                                {blogs?.map((blog) => (
                                    <Col className="text-center " key={blog._id}>
                                        <div className="blog_box-card">
                                            <div className="blog-title_image">
                                                <div onClick={() => handleBlogClick(blog?._id)} style={{ cursor: 'pointer' }}>
                                                    <Link href={`/blog/${blog?.blogUrl}`} style={{ display: 'block' }}>
                                                        <img loading="lazy" decoding="async" src={`${blog?.titleImage}`} alt={`${blog?.title}`} />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="blog_content">
                                                <div className="blog_title_content">
                                                    <div onClick={() => handleBlogClick(blog?._id)} style={{ cursor: 'pointer' }}>
                                                        <Link href={`/blog/${blog?.blogUrl}`}>{blog?.title}</Link>{' '}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                            </>
                        ) : (

                            // <Col className="text-center ">
                                <PreLoader />
                            // </Col>
                        )}
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default BlogPage;
